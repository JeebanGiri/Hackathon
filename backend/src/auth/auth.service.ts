import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserDto, LoginUserDto } from './dto/auth.dto';
import { User } from 'src/users/entities/user.entity';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly dataSource: DataSource) {}
  // ---------- REGISTER ----------

  async register(payload: CreateUserDto) {
    const { full_name, email, password } = payload;

    
    const emailExists = await this.dataSource
      .getRepository(User)
      .findOne({ where: { email } });

    if (emailExists)
      throw new BadRequestException({ message: 'Email already exists.' });

    // Register new user
    const { password: _, ...savedUser } = await this.dataSource
      .getRepository(User)
      .save({
        full_name,
        email,
        password: await argon.hash(password),
      });

    return {
      message: 'User registered. Please check your mail for verification.',
      user: savedUser,
    };
  }

  //---------- LOGIN ----------
  async login(payload: LoginUserDto) {
    const { email, password } = payload;

    const user = await this.dataSource.getRepository(User).findOne({
      where: { email },
    });

    if (!user) throw new UnauthorizedException('Invalid Credentials.');

    // Validate password
    const validPassword = await argon.verify(user.password, password);

    if (!validPassword) throw new UnauthorizedException('Invalid Credentials.');
  }
}

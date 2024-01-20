import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  CreateUserDto,
  LoginUserDto,
} from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ---------- REGISTER ----------

  @Post('register')
  register(@Body() payload: CreateUserDto) {
    return this.authService.register(payload);
  }

  // ---------- LOGIN ----------
  @Post('login')
  login(@Body() payload: LoginUserDto) {
    return this.authService.login(payload);
  }
}

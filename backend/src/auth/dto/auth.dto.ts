import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateUserDto {
  @ApiPropertyOptional({ example: 'John Doe' })
  @IsString()
  @MinLength(3)
  @IsOptional()
  full_name: string;

  @ApiProperty({ example: 'johndoe@gmail.com' })
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string;


  @ApiProperty({ minLength: 8, example: 'Secret@123' })
  @MinLength(8)
  @IsNotEmpty()
  @IsString()
  password: string;
}

export class LoginUserDto {
  @ApiProperty({ example: 'johndoe@example.com' })
  @IsEmail()
  @Transform(({ value }) => value.toLowerCase())
  email: string;

  @ApiProperty({ minLength: 8, example: 'Secret@123' })
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  password: string;
}


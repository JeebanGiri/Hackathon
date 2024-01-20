import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEmail,
  MinLength,
  IsString,
  IsOptional,
  IsEnum,
  IsPhoneNumber,
  IsNotEmpty,
  IsBooleanString,
  Matches,
  IsStrongPassword,
  MaxLength,
  IsInt,
} from 'class-validator';


import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    description: 'email del usuario',
    example: 'example@example.com',
  })
  @IsEmail()
  @IsNotEmpty({
    message: 'El email es requerido',
  })
  email: string;

  @ApiProperty({
    description: 'contraseña del usuario',
    example: 'password',
  })
  @IsString()
  @MinLength(6)
  @IsNotEmpty({
    message: 'La contraseña es requerida',
  })
  password: string;
}

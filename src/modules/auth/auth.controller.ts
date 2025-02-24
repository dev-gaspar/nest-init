import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ActiveUser } from './decorators/session.decorator';
import { User } from '@prisma/client';
import { ResponseMessage } from 'src/decorators/responseMessage.decorator';
import { Auth } from './decorators/auth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @ResponseMessage('User registered successfully')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  @ResponseMessage('User logged in successfully')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('me')
  @Auth()
  @ResponseMessage('User details retrieved successfully')
  async me(@ActiveUser() user: User) {
    return this.authService.getMe(user.id);
  }
}

import { Body, HttpStatus } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { HttpCode } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { RegistrationDto } from './dtos/registration.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Payload } from './dtos/payload.dto';
import { PostLoginResponse } from './dtos/post-login.response.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @ApiOperation({ summary: "Registration with email, password and confirm password" })
  @ApiBody({ type: RegistrationDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "HttpStatus:200:OK",
    type: PostLoginResponse
  })
  @Post('registration')
  registraton(@Body() user: RegistrationDto) {
    return this.authService.registration(user);
  }

  @ApiOperation({ summary: "Login with email and password" })
  @ApiBody({ type: LoginDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "HttpStatus:200:OK",
    type: PostLoginResponse
  })
  @Post('login')
  login(@Body() user: LoginDto ) {
    return this.authService.login(user);
  }

  @ApiOperation({ summary: "Logout" })
  @ApiBearerAuth('access-token')
  @ApiResponse({
    status: HttpStatus.OK,
    description: "HttpStatus:200:OK",
    type: null
  })
  @UseGuards(JwtAuthGuard)
  @Get('logout')
  async logOut() {
    return null;
  }
}

import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { AuthService } from './auth.service'
import { LoginDto } from './dto/logn.dto'
import { RegisterDto } from './dto/register.dto'

@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    try {
      const { username, password } = loginDto

      return {
        message: 'Login Successfully',
        data: await this.authService.login(username, password),
      }
    } catch (error) {
      throw error
    }
  }

  @Post('/register')
  async registry(@Body() registerDto: RegisterDto): Promise<any> {
    try {
      const { username, password, fullName, phone, address } = registerDto

      await this.authService.register(username, password, fullName, phone, address)

      return {
        message: 'Register Successfully',
      }
    } catch (error) {
      throw error
    }
  }
}

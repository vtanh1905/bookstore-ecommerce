import { Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { LoginDto } from './dto/logn.dto'
import { AuthService } from './auth.service'

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
}

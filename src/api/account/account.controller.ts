import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('account')
@Controller('/api/account')
export class AccountController {
  @Get()
  getHello(): string {
    return 'account'
  }
}

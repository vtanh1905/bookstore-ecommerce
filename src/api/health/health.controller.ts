import { Controller, Get } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

@ApiTags('health')
@Controller('/api/health')
export class HealthController {
  @Get('ready')
  getReady(): string {
    return ''
  }

  @Get('live')
  getLive(): string {
    return ''
  }
}

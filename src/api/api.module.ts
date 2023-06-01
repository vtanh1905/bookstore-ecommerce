import { Module } from '@nestjs/common'

import { HealthModule } from './health/health.module'
import { AccountsModule } from './accounts/accounts.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HealthModule, AccountsModule, AuthModule],
})
export class ApiModule {}

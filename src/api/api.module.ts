import { Module } from '@nestjs/common'

import { AccountsModule } from './accounts/accounts.module'
import { AuthModule } from './auth/auth.module'
import { MetaModule } from './meta/meta.module'

@Module({
  imports: [MetaModule, AccountsModule, AuthModule],
})
export class ApiModule {}

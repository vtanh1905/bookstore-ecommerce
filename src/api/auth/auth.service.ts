import { Injectable } from '@nestjs/common'

import { AccountsService } from '../accounts/accounts.service'

@Injectable()
export class AuthService {
  constructor(private accountsService: AccountsService) {}

  async login(username: string, password: string): Promise<any> {
    console.log(await this.accountsService.findByUsername(username));
    return {
      token: '',
    }
  }
}

import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'

import { Role } from 'src/common/constants'
import { Account } from './entities/account.entity'

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  findByEmail(email: string): Promise<Account> {
    return this.accountRepository.findOne({ where: { email } })
  }

  async save(email: string, password: string, fullName: string, phone: string, address: string, role?: Role): Promise<Account> {
    return this.accountRepository.save(
      new Account({
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
        fullName,
        phone,
        address,
        role,
      }),
    )
  }
}

import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Account } from './entities/account.entity'
import { InjectRepository } from '@nestjs/typeorm'
import * as bcrypt from 'bcrypt'

@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  findByUsername(username: string): Promise<Account> {
    return this.accountRepository.findOne({ where: { username } })
  }

  async save(username: string, password: string, fullName: string, phone: string, address: string): Promise<Account> {
    return this.accountRepository.save(
      new Account({
        username,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
        fullName,
        phone,
        address,
      }),
    )
  }
}

import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity({ name: 'accounts'})
export class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  username: string

  @Column()
  password: string

  @Column()
  fullname: string

  @Column()
  phone: string

  @Column()
  address: string

  constructor(partial: Partial<Account>) {
    super()
    Object.assign(this, partial)
  }
}

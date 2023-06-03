import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm'

@Entity({ name: 'categories' })
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ unique: true })
  name: string

  constructor(partial: Partial<Category>) {
    super()
    Object.assign(this, partial)
  }
}

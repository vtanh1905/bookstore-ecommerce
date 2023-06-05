import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Book } from './entities/book.entity'

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  save(name: string, image: string, author: string, description: string, category: number) {
    return this.bookRepository.save({ name, image, author, description, category: { id: category } })
  }

  findByCategoryId(id: number, limit?: number, page?: number) {
    const offset = limit * page - limit
    return this.bookRepository.find({ where: { categoryId: id }, take: limit, skip: offset })
  }
}

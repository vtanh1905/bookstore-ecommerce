import { BadRequestException, Body, Controller, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { CreateBookDto } from './dto/createBook.dto'
import { BooksService } from './books.service'

@ApiTags('books')
@Controller('/api/books')
export class BooksController {
  constructor(private booksService: BooksService) {}
  
  @Post()
  async create(@Body() createBookDto: CreateBookDto): Promise<any> {
    try {
      const { name, image, author, description, categoryId } = createBookDto

      await this.booksService.save(name, image, author, description, categoryId)

      return {
        message: 'Create Book Successfully',
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}

import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { CategoriesService } from './categories.service'
import { CreateCategoryDto } from './dto/createCategory.dto'

@ApiTags('categories')
@Controller('/api/categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async get(): Promise<any> {
    try {
      return {
        message: 'Get Categories Successfully',
        data: await this.categoriesService.findAll(),
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<any> {
    try {
      const { name } = createCategoryDto

      await this.categoriesService.save(name)

      return {
        message: 'Create Category Successfully',
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}

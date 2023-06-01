import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)

  // Setup Swagger UI
  const swaggerDocumentOptions = new DocumentBuilder()
    .setTitle('Book Store')
    .setDescription('The book store API description')
    .setVersion('1.0')
    .build()
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerDocumentOptions)
  SwaggerModule.setup('api-docs', app, swaggerDocument)

  await app.listen(configService.get('SERVER.PORT'))
}

bootstrap()

import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule, ConfigService } from '@nestjs/config'
import { readFileSync } from 'fs'
import * as yaml from 'js-yaml'
import { join } from 'path'

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [() => yaml.load(readFileSync(join(__dirname, './default.yaml'), 'utf8'))],
    }),
  ],
})
export class ConfigModule {}

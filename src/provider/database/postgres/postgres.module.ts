import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE.POSTGRES.HOST'),
        port: configService.get('DATABASE.POSTGRES.POST'),
        username: configService.get('DATABASE.POSTGRES.USERNAME'),
        password: configService.get('DATABASE.POSTGRES.PASSWORD'),
      }),
    }),
  ],
})
export class PostgresModule {}

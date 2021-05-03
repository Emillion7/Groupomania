import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { GpostModule } from './gpost/gpost.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mssql",
      host: "LAPTOP-6U5V75B0\\SQLEXPRESS",
      username: "Emilian7",
      password: "emilian77",
      database: "groupomania",
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: true,
    }),
    UserModule,
    GpostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
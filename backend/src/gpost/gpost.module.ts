import { Module } from '@nestjs/common';
import { GpostController } from './gpost.controller';
import { GpostService } from './gpost.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GpostRepository } from './gpost.repository';

@Module({
  imports: [TypeOrmModule.forFeature([GpostRepository])], // add this
  controllers: [GpostController],
  providers: [GpostService],
})

export class GpostModule {}
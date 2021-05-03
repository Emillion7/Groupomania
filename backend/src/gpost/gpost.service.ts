import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Gpost } from './gpost.entity';
import { CreateGpostDTO } from './dto/create-gpost.dto';
import { GpostRepository } from './gpost.repository';

@Injectable()
export class GpostService {
  constructor(
    @InjectRepository(GpostRepository)
    private gpostRepository: GpostRepository,
  ) {}

  public async createGpost(
    createGpostDto: CreateGpostDTO,
  ): Promise<Gpost> {
    return await this.gpostRepository.createGpost(createGpostDto);
  }


  public async getGposts(): Promise<Gpost[]> {
    return await this.gpostRepository.find();
  }


  public async getGpost(gpostId: number): Promise<Gpost> {
    const foundGpost = await this.gpostRepository.findOne(gpostId);
    if (!foundGpost) {
      throw new NotFoundException('Post not found');
    }
    return foundGpost;
  }


  public async editGpost(
    gpostId: number,
    createGpostDto: CreateGpostDTO,
  ): Promise<Gpost> {
    const editedGpost = await this.gpostRepository.findOne(gpostId);
    if (!editedGpost) {
      throw new NotFoundException('Post not found');
    }
    return this.gpostRepository.editGpost(createGpostDto, editedGpost);
  }


  public async deleteGpost(gpostId: number): Promise<void> {
    await this.gpostRepository.delete(gpostId);
  }
}

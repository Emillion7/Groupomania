import {
    Controller,
    Post,
    Body,
    Get,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { GpostService } from './gpost.service';
  import { CreateGpostDTO } from './dto/create-gpost.dto';
  import { Gpost } from './gpost.entity';
  
  @Controller('gpost')
  export class GpostController {
    constructor(private gpostService: GpostService) {}
  
    @Post('create')
    public async createGpost(
      @Body() createGpostDto: CreateGpostDTO,
    ): Promise<Gpost> {
      const Gpost = await this.gpostService.createGpost(createGpostDto);
      return Gpost;
    }
  
    @Get('all')
    public async getPosts(): Promise<Gpost[]> {
      const gposts = await this.gpostService.getGposts();
      return gposts;
    }
  
    @Get('/:gpostId')
    public async getGpost(@Param('gpostId') gpostId: number) {
      const gpost = await this.gpostService.getGpost(gpostId);
      return gpost;
    }
  
    @Patch('/edit/:gpostId')
    public async editGpost(
      @Body() createGpostDto: CreateGpostDTO,
      @Param('gpostId') gpostId: number,
    ): Promise<Gpost> {
      const gpost = await this.gpostService.editGpost(
        gpostId,
        createGpostDto,
      );
      return gpost;
    }
  
    @Delete('/delete/:gpostId')
    public async deleteGpost(@Param('gpostId') gpostId: number) {
      const deletedGpost = await this.gpostService.deleteGpost(gpostId);
      return deletedGpost;
    }
  }
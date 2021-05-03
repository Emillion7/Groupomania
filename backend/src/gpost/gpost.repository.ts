import { Repository, EntityRepository } from 'typeorm';
import { Gpost } from './gpost.entity';
import { CreateGpostDTO } from './dto/create-gpost.dto';

@EntityRepository(Gpost)
export class GpostRepository extends Repository<Gpost> {

  public async createGpost(
    createGpostDto: CreateGpostDTO,
  ): Promise<Gpost> {
    const { publication_date, user_id, image_url, content } = createGpostDto;

    const gpost = new Gpost();
    gpost.publication_date = publication_date;
    gpost.user_id = user_id;
    gpost.image_url = image_url;
    gpost.content = content;

    await gpost.save();
    return gpost;
  }

  public async editGpost(
    createGpostDto: CreateGpostDTO,
    editedGpost: Gpost,
  ): Promise<Gpost> {
    const { publication_date, user_id, image_url, content } = createGpostDto;

    editedGpost.publication_date = publication_date;
    editedGpost.user_id = user_id;
    editedGpost.image_url = image_url;
    editedGpost.content = content;
    await editedGpost.save();

    return editedGpost;
  }
}
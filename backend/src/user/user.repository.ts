import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  public async createUser(
    createUserDto: CreateUserDTO,
  ): Promise<User> {
    const { name, email, password, image_url, description } = createUserDto;

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    user.image_url = image_url;
    user.description = description;
    

    await user.save();
    return user;
  }

  public async editUser(
    createUserDto: CreateUserDTO,
    editedUser: User,
  ): Promise<User> {
    const { name, email, password, image_url, description } = createUserDto;


    editedUser.name = name;
    editedUser.email = email;
    editedUser.password = password;
    editedUser.image_url = image_url;
    editedUser.description = description;
    await editedUser.save();

    return editedUser;
  }
}
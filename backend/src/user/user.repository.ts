import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDTO } from './dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  public async createUser(
    createUserDto: CreateUserDTO,
  ): Promise<User> {
    const { first_name, last_name, email, password, image_url, description } = createUserDto;

    const user = new User();
    user.first_name = first_name;
    user.last_name = last_name;
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
    const { first_name, last_name, email, password, image_url, description } = createUserDto;

    editedUser.first_name = first_name;
    editedUser.last_name = last_name;
    editedUser.email = email;
    editedUser.password = password;
    editedUser.image_url = image_url;
    editedUser.description = description;
    await editedUser.save();

    return editedUser;
  }
}
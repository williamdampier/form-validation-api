import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserCredentialsDto } from './user-credentials.dto';
import { User } from './users.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(credentials: UserCredentialsDto): Promise<User> {
    return await this.userModel.create(credentials);
  }

  async validateUser(credentials: UserCredentialsDto): Promise<User> {
    const user = await this.userModel.findOne(credentials);

    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}

import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { UserCredentialsDto } from './user-credentials.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() credentials: UserCredentialsDto): Promise<User> {
    return this.usersService.createUser(credentials);
  }

  @Get()
  async loginUser(@Query() credentials: UserCredentialsDto): Promise<User> {
    return this.usersService.validateUser(credentials);
  }
}

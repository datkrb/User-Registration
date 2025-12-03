// src/users/users.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user') // Đổi đường dẫn thành /user theo đề bài
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register') // Endpoint: POST /user/register
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}

// src/users/users.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt'; // Thư viện mã hóa
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;

    // 1. Kiểm tra xem email đã tồn tại chưa
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new BadRequestException('Email này đã được sử dụng!');
    }

    // 2. Mã hóa mật khẩu (Hash)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Lưu vào Database
    const newUser = await this.userModel.create({
      email,
      password: hashedPassword,
    });

    // 4. Trả về kết quả (ẩn mật khẩu đi)
    return {
      _id: newUser._id,
      email: newUser.email,
      createdAt: newUser['createdAt'], // Do dùng timestamps: true
    };
  }

  // Các hàm findAll, findOne... giữ nguyên hoặc xóa nếu không dùng
}

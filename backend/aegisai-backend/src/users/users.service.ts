import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  create(email: string, passwordHash: string) {
    const user = this.userRepo.create({ email, passwordHash });
    return this.userRepo.save(user);
  }

  findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }
}


import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signup(email: string, password: string) {
    const hash = await bcrypt.hash(password, 10);
    const user = await this.usersService.create(email, hash);
    return this.signToken(user.id, user.email);
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException();

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new UnauthorizedException();

    return this.signToken(user.id, user.email);
  }

  private signToken(userId: string, email: string) {
    return {
      access_token: this.jwtService.sign({ sub: userId, email }),
    };
  }
}


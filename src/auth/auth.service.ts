import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from '../dto/SignIn.dto';
import { UsersService } from '../service/users.service';
import * as bcrypt from 'bcrypt';
import { expiresIn, jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string): Promise<SignInDto> {
    const user = await this.usersService.findByUsername(username);

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const payload = { sub: user._id.toString(), username: user.username };

        return {
          access_token: await this.jwtService.signAsync(payload, {
            secret: jwtConstants.secret,
            expiresIn: expiresIn,
          }),
        };
      } else {
        throw new UnauthorizedException();
      }
    }

    throw new Error('Not found user');
    //throw new NotFoundException();
  }
}

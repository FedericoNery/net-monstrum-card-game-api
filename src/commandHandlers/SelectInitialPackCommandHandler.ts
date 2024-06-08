import { Injectable } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { User } from '../models/User.model';

interface SelectInitialPackCommandHandlerInputDto {
  packId: string;
  userId: string;
}

@Injectable()
export class SelectInitialPackCommandHandler {
  constructor(private usersService: UsersService) {}

  async execute(
    payload: SelectInitialPackCommandHandlerInputDto,
  ): Promise<User> {
    const user = await this.usersService.findById(payload.userId);

    //TODO conviene guardar el object ID o directamente el objeto del digimon??
    user.save();
    return user;
  }
}

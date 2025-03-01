import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from '../../database/DTO/UserDTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() UserDTO: UserDTO) {
    return this.userService.create(UserDTO);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.find(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userDTO: UserDTO) {
    return this.userService.update(+id, userDTO);
  }
}

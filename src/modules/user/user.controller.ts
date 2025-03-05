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
import { UserDTO } from '../../database/dto/user.dto';

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

  @Get('perms/:id')
  getPermissions(@Param('id') id: number) {
    return this.userService.getGroups(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userDTO: UserDTO) {
    return this.userService.update(+id, userDTO);
  }
}

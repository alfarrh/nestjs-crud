import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { FormService } from './form.service';
import { AuthGuard } from 'src/common/guards/auth.guard';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  @UseGuards(AuthGuard)
  admin() {
    return this.formService.find();
  }

  @Post()
  free() {
    return this.formService.post();
  }
}

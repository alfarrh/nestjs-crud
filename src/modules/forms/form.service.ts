import { Injectable } from '@nestjs/common';

@Injectable()
export class FormService {
  find() {
    return 'test';
  }

  post() {
    return 'test post';
  }
}

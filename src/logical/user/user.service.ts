import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getOne(): string {
    return '测试成功';
  }

  findOne(username: string): string {
    if (username === 'Kid') {
      return 'Kid is here';
    }
    return 'No one here';
  }
}

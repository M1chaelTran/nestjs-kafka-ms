import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [
    {
      userId: '123',
      stripeUserId: 'abc',
    },
    {
      userId: '456',
      stripeUserId: 'asdfa',
    },
    {
      userId: '789',
      stripeUserId: '23523asdfs',
    },
  ];

  getUser(getUserRequest: GetUserRequest): string {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}

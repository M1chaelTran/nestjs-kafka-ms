import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { CreateOrderEvent } from './create-order-event';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authClient: ClientKafka,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  handleCreateOrder(order: CreateOrderEvent) {
    this.authClient
      .send('get_user', new GetUserRequest(order.userId))
      .subscribe((user) => {
        if (user)
          console.log(
            `Billing user with StripID ${user.stripeUserId} a price of $${order.price}`,
          );
      });
  }
}

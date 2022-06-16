## NestJS with Kafka

This is a simple demonstration of using NestJS with Kafka.

### Prerequisites

- [NestJS](https://nestjs.com/)
- [Kafka](https://kafka.apache.org/)
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Setup

1. Clone the repository
   ```bash
   git clone
   ```
2. Install dependencies
   ```bash
   yarn
   ```
3. Start Kafka docker container
   ```bash
   docker-compose up -d
   ```
4. Run each application in a separate terminal
   ```bash
   yarn start:dev
   ```

### Test the application

open Postman and send a 'POST' request to `localhost:3000` with the following body:

```
{
    "userId": "123",
    "price": 23.45,
}
```

You should see the following in the billing application console log:

```
Billing user with StripID abc a price of $23.45
```

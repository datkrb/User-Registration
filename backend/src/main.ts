// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Kích hoạt Validation
  app.useGlobalPipes(new ValidationPipe());

  // Bật CORS để Frontend (React) gọi được API
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

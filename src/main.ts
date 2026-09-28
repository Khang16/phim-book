import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';
import { setupApp } from './bootstrap/setup-app';
import { setupSwagger } from './bootstrap/setup-swagger';
import { APP_CONFIG } from './config/app/app.config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  const logger = app.get(Logger);
  app.useLogger(logger);

  const configService = app.get(ConfigService);
  const appConfig = configService.getOrThrow<{ port: number }>(APP_CONFIG);

  setupApp(app, logger, configService);
  setupSwagger(app);

  await app.listen(appConfig.port, '0.0.0.0');

  logger.log(
    `🚀 Application is running on: http://localhost:${appConfig.port}/api/v1`,
  );
  logger.log(
    `📚 Swagger documentation: http://localhost:${appConfig.port}/docs`,
  );
}
void bootstrap();

import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const swaggerConfig = new DocumentBuilder()
    .setTitle('PhimBook API')
    .setDescription(
      'Tài liệu API chính thức cho Hệ Thống Đặt Vé Xem Phim PhimBook (PB-BRD-FSD-2026-V1.2)',
    )
    .setVersion('1.0.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description:
          'Nhập JWT Bearer token để xác thực API (ví dụ: Bearer <token>)',
        in: 'header',
      },
      'bearer',
    )
    .addTag('Health', 'Kiểm tra trạng thái máy chủ và kết nối')
    .addTag('Users', 'Quản lý thông tin tài khoản người dùng')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true,
      docExpansion: 'list',
    },
    customSiteTitle: 'PhimBook API Documentation',
  };

  SwaggerModule.setup('docs', app, document, customOptions);
  SwaggerModule.setup('api/docs', app, document, customOptions);
}

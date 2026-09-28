import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SkipThrottle } from '@nestjs/throttler';

@ApiTags('Health')
@Controller({ version: VERSION_NEUTRAL })
export class HealthController {
  @Get(['', 'health'])
  @SkipThrottle()
  @ApiOperation({ summary: 'Kiểm tra trạng thái máy chủ (Health Check)' })
  @ApiResponse({
    status: 200,
    description: 'Máy chủ hoạt động bình thường',
    schema: {
      type: 'object',
      properties: {
        status: { type: 'string', example: 'ok' },
        uptime: { type: 'number', example: 12.34 },
        timestamp: { type: 'string', example: '2026-09-26T10:00:00.000Z' },
      },
    },
  })
  check() {
    return {
      status: 'ok',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    };
  }
}

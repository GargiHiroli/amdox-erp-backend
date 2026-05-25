import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tenant')
@Controller('tenant')
export class TenantController {

  @Post()
  createTenant(@Body() body: any) {
    return {
      message: 'Tenant created successfully',
      data: body,
    };
  }

  @Get()
  getTenants() {
    return {
      message: 'All tenants fetched successfully',
    };
  }
}
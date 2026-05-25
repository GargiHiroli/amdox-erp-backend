import { Controller, Post, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post('create')
  createItem(@Body() body: any) {
    return this.inventoryService.createItem(body, body.tenantId);
  }
}
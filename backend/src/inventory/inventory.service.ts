import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async createItem(data: any, tenantId: string) {
    const item = await this.prisma.inventory.create({
      data: {
        name: data.name,
        quantity: data.quantity,
        threshold: data.threshold,
        tenantId,
      },
    });

    if (item.quantity < item.threshold) {
      console.log('⚠️ Reorder Triggered');
    }

    return item;
  }
}
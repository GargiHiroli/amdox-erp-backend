import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FinanceService {
  constructor(private prisma: PrismaService) {}

  async createEntry(data: any, tenantId: string) {
    if (data.debit !== data.credit) {
      throw new Error('Unbalanced Entry');
    }

    return this.prisma.journal.create({
      data: {
        debit: data.debit,
        credit: data.credit,
        tenantId,
      },
    });
  }
}
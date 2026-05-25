import { Controller, Post, Body } from '@nestjs/common';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Post('journal')
  createJournal(@Body() body: any) {
    return this.financeService.createEntry(body, body.tenantId);
  }
}
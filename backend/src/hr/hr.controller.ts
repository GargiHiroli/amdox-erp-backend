import { Controller, Post, Body } from '@nestjs/common';
import { HrService } from './hr.service';

@Controller('hr')
export class HrController {
  constructor(private hrService: HrService) {}

  @Post('salary')
  calculateSalary(@Body() body: any) {
    return this.hrService.calculateSalary(body.base);
  }
}
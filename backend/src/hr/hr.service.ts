import { Injectable } from '@nestjs/common';

@Injectable()
export class HrService {
  calculateSalary(base: number) {
    const tax = base * 0.1;
    const net = base - tax;

    return {
      base,
      tax,
      net,
    };
  }
}
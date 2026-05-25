import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { emailQueue } from '../queue/email.queue';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(dto) {

  const tenant = await this.prisma.tenant.create({
    data: { name: dto.tenantName }
  });

  const hashed = await bcrypt.hash(dto.password, 10);

  const user = await this.prisma.user.create({
    data: {
      email: dto.email,
      password: hashed,
      role: "admin",
      tenantId: tenant.id
    }
  });

  // ✅ Add email job to queue
  await emailQueue.add('sendEmail', {
    to: dto.email,
    message: 'Welcome to ERP'
  });

  return user;
}

  async login(dto) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email }
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = jwt.sign(
      {
        userId: user.id,
        tenantId: user.tenantId,
        role: user.role
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    return { token };
  }
}

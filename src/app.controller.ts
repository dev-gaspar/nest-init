import { Controller, Get, Post } from '@nestjs/common';
import { ApiExcludeEndpoint, ApiHeader } from '@nestjs/swagger';
import { Service } from './service';
import { Auth } from './modules/auth/decorators/auth.decorator';
import { GlobalStatus, Role, User } from '@prisma/client';
import { ActiveUser } from './modules/auth/decorators/session.decorator';

@Controller()
export class AppController extends Service {
  constructor() {
    super(AppController.name);
  }

  @Get('/ping')
  @ApiExcludeEndpoint()
  getHello(): string {
    return 'pong';
  }

  @Auth([Role.ADMIN])
  @Post('/test-log')
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer token',
  })
  async testLogging(@ActiveUser() user: User): Promise<string> {
    // Crear usuario de prueba
    const newUser = await this.prisma.user.create({
      data: {
        email: `user_${Date.now()}@example.com`,
        password: 'password123',
        role: Role.USER,
        globalStatus: GlobalStatus.ACTIVE,
      },
      executedBy: {
        id: user.id,
        email: user.email,
      },
    } as any);

    // Actualizar usuario recién creado
    const updatedUser = await this.prisma.user.update({
      where: { id: newUser.id },
      data: { email: `updated_${Date.now()}@example.com` },
      executedBy: {
        id: user.id,
        email: user.email,
      },
    } as any);

    // Eliminar usuario recién actualizado
    await this.prisma.user.delete({
      where: { id: updatedUser.id },
      executedBy: {
        id: user.id,
        email: user.email,
      },
    } as any);

    return `Usuario creado, actualizado y eliminado: ${newUser.email} -> ${updatedUser.email}`;
  }
}

import { GlobalStatus, PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const users = [
    {
      email: 'admin@example.com',
      password: '$2b$10$83WHVDqFmdfcR0f3MyhfruXJusUJcHjGNGy0hlbtJrwnAi1yCmzwK',
      role: Role.ADMIN,
      globalStatus: GlobalStatus.ACTIVE,
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }

  console.warn('Database has been seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

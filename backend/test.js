const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function test() {
  try {
    const result = await prisma.$queryRaw`SELECT 1`;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

test();
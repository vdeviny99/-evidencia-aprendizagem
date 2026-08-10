import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const RETENTION_DAYS = Number(process.env.RETENTION_DAYS ?? 90);

async function main() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  const prisma = new PrismaClient({ adapter });

  const cutoff = new Date(Date.now() - RETENTION_DAYS * 24 * 60 * 60 * 1000);

  const result = await prisma.diagnosticSubmission.deleteMany({
    where: { createdAt: { lt: cutoff } },
  });

  console.log(
    `[limpeza-lgpd] ${result.count} diagnóstico(s) com mais de ${RETENTION_DAYS} dias excluído(s).`
  );

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

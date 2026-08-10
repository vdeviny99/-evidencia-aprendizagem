import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { encryptField } from "../src/lib/encryption";

async function main() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  const prisma = new PrismaClient({ adapter });

  const subs = await prisma.diagnosticSubmission.findMany();

  for (const sub of subs) {
    if (!sub.name.startsWith("v1.")) {
      await prisma.diagnosticSubmission.update({
        where: { id: sub.id },
        data: {
          name: encryptField(sub.name),
          whatsapp: encryptField(sub.whatsapp),
          email: sub.email ? encryptField(sub.email) : null,
        },
      });
      console.log(`Criptografado: ${sub.id}`);
    } else {
      console.log(`Já criptografado (skip): ${sub.id}`);
    }
  }

  console.log("Migração de criptografia concluída.");
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

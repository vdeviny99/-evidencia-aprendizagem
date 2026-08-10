import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const categories = [
  { name: "Aprender a Aprender", slug: "aprender-a-aprender", description: "Fundamentos e técnicas de aprendizagem autodirigida." },
  { name: "Memória", slug: "memoria", description: "Como a memória funciona e como melhorá-la." },
  { name: "Atenção", slug: "atencao", description: "Mecanismos de atenção e foco." },
  { name: "Metacognição", slug: "metacognicao", description: "Pensar sobre o próprio pensamento." },
  { name: "Desirable Difficulties", slug: "desirable-difficulties", description: "Dificuldades desejáveis que melhoram a aprendizagem." },
  { name: "Repetição Espaçada", slug: "repeticao-espaçada", description: "Técnica de espaçar revisões no tempo." },
  { name: "Interleaving", slug: "interleaving", description: "Alternar entre diferentes tópicos ao estudar." },
  { name: "Active Recall", slug: "active-recall", description: "Recuperação ativa de informações da memória." },
  { name: "Psicologia Cognitiva", slug: "psicologia-cognitiva", description: "Estudo científico dos processos mentais." },
  { name: "Neurociência", slug: "neurociencia", description: "O cérebro e o sistema nervoso na aprendizagem." },
  { name: "Produtividade", slug: "produtividade", description: "Técnicas para estudar e trabalhar com mais eficiência." },
  { name: "IA aplicada à aprendizagem", slug: "ia-aplicada-aprendizagem", description: "Inteligência artificial como ferramenta de aprendizagem." },
];

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@evidencia.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@evidencia.com",
      role: "ADMIN",
    },
  });

  console.log("Admin user created:", admin.email);

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  console.log(`${categories.length} categories created.`);

  const sampleContent = `
## Por que técnicas de estudo baseadas em evidências funcionam?

Nem todas as técnicas de estudo são igualmente eficazes. Pesquisas em psicologia cognitiva mostram que métodos como **Active Recall** e **Repetição Espaçada** produzem resultados significativamente melhores do que a simples releitura.

### Active Recall

O Active Recall é o processo de recuperar ativamente informações da memória. Em vez de reler um texto, você tenta se lembrar do conteúdo sem consultar a fonte.

> "A prática de recuperar informação da memória é um dos métodos mais eficazes para consolidar a aprendizagem." — Jeffrey Karpicke

### Repetição Espaçada

A Repetição Espaçada envolve revisar o material em intervalos crescentes ao longo do tempo. Esta técnica aproveita o *efeito de espaçamento*, um dos fenômenos mais robustos da psicologia cognitiva.

### Comece hoje

1. Ao estudar, feche o livro e tente explicar o conteúdo
2. Use flashcards com sistemas de repetição espaçada (Anki, RemNote)
3. Intercale diferentes tópicos em uma mesma sessão de estudo
4. Teste-se frequentemente, mesmo antes de se sentir "pronto"
  `;

  const category = await prisma.category.findUnique({
    where: { slug: "aprender-a-aprender" },
  });

  if (category) {
    await prisma.article.upsert({
      where: { slug: "tecnicas-de-estudo-baseadas-em-evidencias" },
      update: {},
      create: {
        title: "Técnicas de Estudo Baseadas em Evidências",
        slug: "tecnicas-de-estudo-baseadas-em-evidencias",
        content: sampleContent,
        excerpt: "Descubra por que Active Recall e Repetição Espaçada são as técnicas mais eficazes para aprender.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date(),
        readingTime: 4,
        categories: {
          connect: { id: category.id },
        },
      },
    });
  }

  console.log("Sample article created.");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

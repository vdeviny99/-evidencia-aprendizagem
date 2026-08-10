import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { MDXContent } from "@/components/mdx/MDXContent";
import { ReadingProgress } from "@/components/ReadingProgress";
import { AuthorCard } from "@/components/AuthorCard";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";

async function getArticle(slug: string) {
  return prisma.article.findUnique({
    where: { slug },
    include: {
      author: { select: { name: true } },
      categories: { select: { name: true, slug: true } },
    },
  });
}

async function getRecentArticles(currentSlug: string) {
  return prisma.article.findMany({
    where: { status: "PUBLISHED", slug: { not: currentSlug } },
    select: { title: true, slug: true },
    orderBy: { publishedAt: "desc" },
    take: 4,
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) return { title: "Artigo não encontrado" };

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArtigoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticle(slug);
  const recent = await getRecentArticles(slug);

  if (!article) notFound();

  return (
    <>
      <ReadingProgress />

      <div className="mx-auto max-w-5xl px-4 py-8">
        <Link
          href="/artigos"
          className="inline-flex items-center gap-2 text-sm text-accent/50 transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para artigos
        </Link>
      </div>

      <article className="mx-auto max-w-3xl px-4 pb-16">
        <header className="animate-fade-in">
          <div className="flex flex-wrap gap-2">
            {article.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/artigos?categoria=${cat.slug}`}
                className="inline-block rounded-full bg-accent/10 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-white"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <h1 className="mt-4 font-heading text-3xl font-bold text-accent sm:text-4xl">
            {article.title}
          </h1>

          {article.subtitle && (
            <p className="mt-3 text-lg text-accent/60">{article.subtitle}</p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-accent/40">
            {article.author.name && (
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" />
                {article.author.name}
              </span>
            )}
            {article.publishedAt && (
              <time className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Intl.DateTimeFormat("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(article.publishedAt))}
              </time>
            )}
            {article.readingTime && (
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {article.readingTime} min de leitura
              </span>
            )}
          </div>
        </header>

        <div className="mt-10 rounded-xl bg-card p-6 shadow-sm sm:p-10">
          <MDXContent source={article.content} />
        </div>
      </article>

      <section className="border-t border-accent/10 bg-cream">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <AuthorCard />
        </div>
      </section>

      <section className="border-t border-accent/10 bg-cream">
        <div className="mx-auto max-w-5xl px-4 pb-16">
          <h2 className="text-center font-heading text-2xl font-bold text-accent">
            Artigos Relacionados
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {recent.slice(0, 4).map((r) => (
              <Link
                key={r.slug}
                href={`/artigos/${r.slug}`}
                className="group rounded-lg bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="font-heading text-sm font-semibold text-accent transition-colors group-hover:text-accent-dark">
                  {r.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

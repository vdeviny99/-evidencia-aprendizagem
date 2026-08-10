import Link from "next/link";
import { Clock, ArrowUpRight } from "lucide-react";

type BlogCardProps = {
  slug: string;
  title: string;
  excerpt: string | null;
  category: string;
  readingTime: number | null;
  publishedAt: Date | null;
  featured?: boolean;
};

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  readingTime,
  publishedAt,
  featured,
}: BlogCardProps) {
  return (
    <Link
      href={`/artigos/${slug}`}
      className={`group relative block overflow-hidden rounded-xl bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        featured ? "sm:col-span-2 sm:grid sm:grid-cols-2" : ""
      }`}
    >
      <div
        className={`flex flex-col justify-center ${
          featured ? "order-2 p-8" : "p-6"
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-accent">
            {category}
          </span>
          {featured && (
            <span className="inline-block rounded-full bg-gold/20 px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-widest text-gold">
              Destaque
            </span>
          )}
        </div>

        <h3
          className={`mt-3 font-heading font-bold text-accent transition-colors group-hover:text-accent-dark ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {title}
        </h3>

        {excerpt && (
          <p
            className={`mt-2 leading-relaxed text-accent/60 ${
              featured ? "text-base" : "text-sm"
            }`}
          >
            {excerpt}
          </p>
        )}

        <div className="mt-4 flex items-center gap-4 text-xs text-accent/40">
          {readingTime && (
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readingTime} min
            </span>
          )}
          {publishedAt && (
            <time>
              {new Intl.DateTimeFormat("pt-BR", {
                day: "numeric",
                month: "short",
                year: "numeric",
              }).format(new Date(publishedAt))}
            </time>
          )}
        </div>
      </div>

      {featured && (
        <div className="order-1 flex items-center justify-center bg-accent/5 p-8">
          <ArrowUpRight className="h-12 w-12 text-accent/20 transition-colors group-hover:text-accent/40" />
        </div>
      )}
    </Link>
  );
}

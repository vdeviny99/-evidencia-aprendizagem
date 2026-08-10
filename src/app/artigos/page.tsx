import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog",
  description:
    "Artigos sobre ciência da aprendizagem, psicologia cognitiva e neurociência — baseados em evidências científicas.",
};

export default function ArtigosPage() {
  return (
    <section className="bg-gradient-to-b from-accent/5 to-cream pb-16 pt-12 sm:pt-20">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <BookOpen className="mx-auto h-12 w-12 text-gold" />
        <h1 className="mt-6 font-heading text-3xl font-bold text-accent sm:text-4xl">
          Em Breve
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-accent/60">
          Em breve teremos textos escritos sobre ciência da aprendizagem,
          psicologia cognitiva e estratégias de estudo baseadas em evidências.
        </p>
      </div>
    </section>
  );
}

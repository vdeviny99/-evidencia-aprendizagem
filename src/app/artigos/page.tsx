import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog",
  description:
    "Artigos sobre ciência da aprendizagem, psicologia cognitiva e neurociência — baseados em evidências científicas.",
};

export default function ArtigosPage() {
  return (
    <section className="relative overflow-hidden bg-cream pb-20 pt-12 sm:pb-28 sm:pt-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 py-12 text-center sm:py-20">
        <BookOpen className="mx-auto h-10 w-10 text-green" />
        <h1 className="mt-6 font-serif text-3xl font-medium leading-tight text-accent sm:text-4xl">
          Em Breve
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-accent/70">
          Em breve teremos textos escritos sobre ciência da aprendizagem,
          psicologia cognitiva e estratégias de estudo baseadas em evidências.
        </p>
      </div>
    </section>
  );
}

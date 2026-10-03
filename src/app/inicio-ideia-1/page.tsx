import { ArrowRight, BookOpen, CheckCircle, ClipboardCheck, Languages, Sparkles } from "lucide-react";
import Link from "next/link";

const offers = [
  [ClipboardCheck, "Diagnóstico", "Entenda seu estilo de aprendizagem e veja caminhos possíveis para estudar melhor.", "/diagnostico"],
  [Languages, "Aulas", "Inglês e francês com comunicação autêntica, objetivos reais e acompanhamento próximo.", "/aulas"],
  [BookOpen, "Cursos", "Curso, mentoria e palestras para transformar ciência da aprendizagem em prática.", "/cursos"],
] as const;

export default function InicioIdeia1() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7f8f4] py-16 sm:py-24">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_30%_20%,rgba(234,88,12,0.14),transparent_32%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent shadow-sm">
              <Sparkles className="h-4 w-4 text-gold" />
              EdukaCuca
            </span>
            <h1 className="mt-7 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-accent sm:text-6xl">
              Aprender melhor começa por entender como você aprende
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent/68">
              A EdukaCuca une diagnóstico, aulas, cursos e mentoria para ajudar estudantes a estudarem com mais consciência, autonomia e método.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/diagnostico" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold/90">
                Fazer diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/aulas" className="inline-flex items-center justify-center rounded-full border border-accent/15 bg-white px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-accent shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent/5">
                Conhecer aulas
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-accent/10 bg-white p-6 shadow-xl shadow-accent/8">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">por onde começar</p>
            <div className="mt-6 space-y-4">
              {offers.map(([Icon, title, text, href]) => (
                <Link key={title} href={href} className="group flex gap-4 rounded-3xl bg-cream p-5 transition-all hover:bg-white hover:shadow-md">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-gold shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-bold text-accent">{title}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-accent/62">{text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-green">a proposta</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent">Menos tentativa e erro. Mais clareza sobre o processo.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Diagnosticar padrões", "Praticar com orientação", "Construir autonomia"].map((item) => (
              <div key={item} className="rounded-3xl border border-accent/10 bg-cream p-5">
                <CheckCircle className="h-6 w-6 text-green" />
                <p className="mt-4 font-heading text-base font-bold text-accent">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

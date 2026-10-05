import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, Languages, Sparkles } from "lucide-react";
import Link from "next/link";

const journey = [
  [ClipboardCheck, "Diagnóstico", "Entenda seu estilo de aprendizagem e veja caminhos possíveis para estudar melhor.", "/diagnostico"],
  [Languages, "Aulas", "Inglês e francês com comunicação autêntica, objetivos reais e acompanhamento próximo.", "/aulas"],
  [BookOpen, "Cursos", "Curso, mentoria e palestras para transformar ciência da aprendizagem em prática.", "/cursos"],
] as const;

const outcomes = [
  ["01", "Diagnosticar padrões", "Antes de indicar técnica, a EdukaCuca identifica como o aluno organiza tempo, foco, revisão e reflexão."],
  ["02", "Praticar com orientação", "Aulas e mentorias transformam o diagnóstico em rotina real, com acompanhamento próximo e objetivos claros."],
  ["03", "Construir autonomia", "O objetivo é o aluno entender o próprio processo e ganhar repertório para estudar melhor sozinho."],
] as const;

export default function Home() {
  return (
    <>
      <section className="bg-accent text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                <Sparkles className="h-4 w-4 text-gold" />
                EdukaCuca
              </span>
              <h1 className="mt-7 max-w-[46rem] text-balance font-heading text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl xl:text-6xl">
                Estudo, idiomas e aprendizagem em um lugar só
              </h1>
              <p className="mt-6 max-w-[42rem] text-pretty text-lg leading-8 text-white/70">
                A EdukaCuca reúne diagnóstico, aulas, cursos e mentorias para ensinar estudantes e profissionais a aprender melhor.
              </p>
              <p className="mt-4 max-w-[42rem] text-pretty text-lg leading-8 text-white/70">
                Unimos neurociência da aprendizagem, psicologia cognitiva, pedagogia e técnicas de ensino de segundo idioma para auxiliar nossos alunos com mais eficácia.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/diagnostico" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gold px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold/90">
                  Conhecer diagnóstico gratuito
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/aulas" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10">
                  Saiba mais sobre as aulas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="w-full rounded-[2rem] border border-white/10 bg-white p-5 text-accent shadow-2xl shadow-black/20 sm:rounded-[2.5rem] sm:p-7 lg:w-[29rem] lg:justify-self-end xl:w-[32rem]">
              <p className="px-1 font-heading text-xs font-bold uppercase tracking-[0.28em] text-gold">Por onde começar</p>
              <div className="mt-6 grid gap-4">
                {journey.map(([Icon, title, text, href]) => (
                  <Link key={title} href={href} className="group flex gap-4 rounded-[1.6rem] bg-cream/70 p-5 transition-all hover:-translate-y-0.5 hover:bg-cream sm:items-center sm:p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-gold shadow-sm ring-1 ring-accent/5 transition-transform group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-xl font-bold text-accent">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-accent/62">{text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">Como funciona</span>
              <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold leading-tight tracking-[-0.03em] text-accent sm:text-4xl">
                Um caminho para ter mais autonomia nos estudos
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-accent/65">
                Temos como propósito ensinar estratégias de aprendizagem baseadas em ciência para que nossos alunos ganhem autonomia e novas ferramentas que possam usar para aprender melhor.
              </p>
            </div>

            <div className="grid gap-4">
              {outcomes.map(([number, title, text]) => (
                <div key={title} className="group grid gap-4 rounded-[1.75rem] border border-accent/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/10 sm:grid-cols-[4.5rem_1fr] sm:p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 font-heading text-sm font-bold text-green ring-1 ring-green/10">
                    {number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green" />
                      <h3 className="font-heading text-xl font-bold text-accent">{title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-accent/62">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[2.25rem] bg-accent p-8 text-white shadow-2xl shadow-accent/20 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">próximo passo</span>
                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                  Comece entendendo como você aprende hoje
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/68">
                  O diagnóstico mostra padrões de estudo e ajuda a escolher o melhor caminho dentro da EdukaCuca.
                </p>
              </div>
              <Link href="/diagnostico" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold/90">
                Fazer diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

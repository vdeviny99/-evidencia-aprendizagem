import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, Languages, Sparkles } from "lucide-react";
import Link from "next/link";

const journey = [
  [ClipboardCheck, "Diagnóstico", "Entenda seu estilo de aprendizagem e veja caminhos possíveis para estudar melhor.", "/diagnostico"],
  [Languages, "Aulas", "Inglês e francês com comunicação autêntica, objetivos reais e acompanhamento próximo.", "/aulas"],
  [BookOpen, "Cursos", "Curso, mentoria e palestras para transformar ciência da aprendizagem em prática.", "/cursos"],
] as const;

const outcomes = [
  {
    number: "01",
    title: "Entender seus padrões",
    recommended: true,
    text: (
      <>
        O questionário observa como você organiza <strong className="font-semibold text-accent">tempo, foco, revisão, motivação e estratégias de estudo</strong> antes de indicar qualquer técnica.
      </>
    ),
  },
  {
    number: "02",
    title: "Aplicar ciência na prática",
    recommended: false,
    text: (
      <>
        Traduzimos <strong className="font-semibold text-accent">neurociência da aprendizagem, psicologia cognitiva e pedagogia</strong> em estratégias possíveis para a sua rotina, sem depender de fórmulas prontas.
      </>
    ),
  },
  {
    number: "03",
    title: "Construir autonomia",
    recommended: false,
    text: (
      <>
        Nosso objetivo é ajudar você a entender o próprio processo e ganhar <strong className="font-semibold text-accent">repertório para escolher o que funciona melhor</strong> na hora de estudar sozinho.
      </>
    ),
  },
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
                Estude melhor: <span className="text-gold decoration-gold/35 underline-offset-[0.18em] [text-decoration-line:underline] [text-decoration-thickness:0.08em]">descubra seu perfil</span> e transforme sua forma de aprender
              </h1>
              <p className="mt-6 max-w-[42rem] text-pretty text-lg leading-8 text-white/70">
                A EdukaCuca combina diagnóstico de aprendizagem, aulas, cursos e estratégias baseadas em ciência para ajudar estudantes e profissionais a estudar com mais clareza, autonomia e direção.
              </p>
              <p className="mt-5 text-sm font-medium leading-6 text-white/72 sm:hidden">
                Comece pelo diagnóstico gratuito e descubra seu perfil de aprendizagem.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/diagnostico" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto">
                  Fazer diagnóstico gratuito
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/aulas" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white transition-colors hover:bg-white/10 sm:w-auto">
                  Ver aulas e mentorias
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="w-full rounded-[2rem] border border-white/10 bg-white p-5 text-accent shadow-2xl shadow-black/20 sm:rounded-[2.5rem] sm:p-7 lg:w-[29rem] lg:justify-self-end xl:w-[32rem]">
              <p className="px-1 font-heading text-xs font-bold uppercase tracking-[0.28em] text-gold">Por onde começar</p>
              <div className="mt-6 grid gap-4">
                {journey.map(([Icon, title, text, href]) => {
                  const isRecommended = title === "Diagnóstico";

                  return (
                  <Link key={title} href={href} className={`group flex gap-4 rounded-[1.6rem] p-5 transition-all hover:-translate-y-0.5 sm:items-center sm:p-6 ${isRecommended ? "border border-gold/35 bg-orange-50 shadow-sm shadow-gold/10 hover:bg-orange-50/90" : "bg-cream/70 hover:bg-cream"}`}>
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-transform group-hover:scale-105 ${isRecommended ? "bg-gold text-white ring-4 ring-gold/15" : "bg-white text-gold ring-1 ring-accent/5"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-xl font-bold text-accent">{title}</h3>
                        {isRecommended && (
                          <span className="rounded-full bg-gold/10 px-2.5 py-1 font-heading text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold ring-1 ring-gold/20">
                            Comece aqui
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-accent/62">{text}</p>
                    </div>
                  </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-10 pt-16 sm:pb-14 sm:pt-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">Como funciona</span>
              <h2 className="mt-4 max-w-xl text-balance font-heading text-3xl font-bold leading-tight tracking-[-0.03em] text-accent sm:text-4xl">
                Antes da técnica, entendemos como você aprende
              </h2>
              <p className="mt-5 max-w-lg leading-relaxed text-accent/65">
                A EdukaCuca ensina <strong className="font-semibold text-accent">estratégias de aprendizagem baseadas em ciência</strong> para ajudar estudantes a ganhar autonomia e aprender melhor.
              </p>
              <p className="mt-4 max-w-lg leading-relaxed text-accent/65">
                Unimos neurociência da aprendizagem, psicologia cognitiva, pedagogia e ensino de idiomas para <strong className="font-semibold text-accent">transformar pesquisa em prática</strong>.
              </p>
            </div>

            <div>
              <div className="relative grid gap-4">
                <div className="pointer-events-none absolute bottom-16 left-7 top-16 hidden w-px bg-accent/10 sm:block" />
                {outcomes.map(({ number, title, text, recommended }) => (
                  <div key={title} className="group relative z-10 grid gap-4 rounded-[1.75rem] border border-accent/10 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/10 sm:grid-cols-[4.5rem_1fr] sm:p-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl font-heading text-sm font-bold ring-1 ${recommended ? "bg-gold/10 text-gold ring-gold/20" : "bg-green/10 text-green ring-green/10"}`}>
                      {number}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <CheckCircle2 className={`h-5 w-5 ${recommended ? "text-gold" : "text-green"}`} />
                        <h3 className="font-heading text-xl font-bold text-accent">{title}</h3>
                        {recommended && (
                          <span className="rounded-full bg-gold/10 px-2.5 py-1 font-heading text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold ring-1 ring-gold/20">
                            Comece aqui
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-accent/62">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/diagnostico" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/10 bg-white px-5 py-3 text-center font-heading text-xs font-bold uppercase tracking-[0.14em] text-accent shadow-sm transition-colors hover:border-gold/30 hover:text-gold sm:hidden">
                Começar pelo diagnóstico gratuito
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 pt-8 sm:pb-24 sm:pt-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[2.25rem] bg-accent p-8 text-white shadow-2xl shadow-accent/20 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">Próximo passo</span>
                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                  Faça o diagnóstico gratuito e descubra por onde começar
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-white/68">
                  Em cerca de 5 minutos, você recebe uma primeira leitura dos seus hábitos de estudo e caminhos práticos para aprender melhor.
                </p>
              </div>
              <Link href="/diagnostico" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto">
                Fazer diagnóstico gratuito
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

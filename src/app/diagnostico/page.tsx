import { BarChart, Brain, Clock, HelpCircle, BookOpen, Repeat, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

const factors = [
  {
    icon: BarChart,
    title: "Planejamento",
    desc: "Metas claras, específicas e planejamento intencional das sessões de estudo.",
  },
  {
    icon: Brain,
    title: "Metacognição",
    desc: "Monitoramento da compreensão, avaliação do próprio aprendizado e propósito do estudo.",
  },
  {
    icon: Clock,
    title: "Gestão do Tempo",
    desc: "Blocos de foco, pausas intencionais e alternância entre modo focado e difuso.",
  },
  {
    icon: HelpCircle,
    title: "Busca de Ajuda",
    desc: "Saber quando e como pedir ajuda — a pessoas, sites, ferramentas e feedback.",
  },
  {
    icon: BookOpen,
    title: "Aprendizagem Ativa",
    desc: "Active Recall, autoexplicação, dificuldades desejáveis e estudo profundo.",
  },
  {
    icon: Repeat,
    title: "Revisão Estratégica",
    desc: "Repetição espaçada, revisão ativa, ferramentas como Anki e anotações organizadas.",
  },
  {
    icon: Heart,
    title: "Motivação e Consistência",
    desc: "Persistência, motivação interna e externa, rotina e crenças de aprendizagem.",
  },
]

export default function DiagnosticoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-accent/5 via-cream to-cream">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent">
              Diagnóstico
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-accent sm:text-5xl">
              Diagnóstico de Aprendizagem
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-accent/70">
              Descubra seu perfil como aprendiz. Este instrumento avalia 7
              dimensões fundamentais dos seus hábitos de estudo, baseado em
              pesquisas das áreas de psicologia cognitiva, neurociência da
              aprendizagem e psicologia educacional.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 pb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {factors.map((f, i) => (
              <div
                key={f.title}
                className="rounded-xl bg-card px-6 py-8 shadow-sm"
              >
                <f.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-heading text-sm font-bold uppercase tracking-wider text-accent">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-accent/60">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent/5">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-accent">
            Como funciona
          </h2>
          <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
            <div className="rounded-xl bg-card px-6 py-8 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
                1
              </span>
              <h3 className="mt-4 font-heading text-sm font-bold uppercase tracking-wider text-accent">
                Responda
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-accent/60">
                33 afirmações sobre seus hábitos reais de estudo. Escala de 0 a
                4. Leva cerca de 12 minutos.
              </p>
            </div>
            <div className="rounded-xl bg-card px-6 py-8 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
                2
              </span>
              <h3 className="mt-4 font-heading text-sm font-bold uppercase tracking-wider text-accent">
                Analise
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-accent/60">
                Receba seu perfil em 7 fatores com pontuações e bandas de
                desempenho individuais.
              </p>
            </div>
            <div className="rounded-xl bg-card px-6 py-8 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-bold text-white">
                3
              </span>
              <h3 className="mt-4 font-heading text-sm font-bold uppercase tracking-wider text-accent">
                Melhore
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-accent/60">
                Receba recomendações personalizadas baseadas em evidências para
                cada dimensão avaliada.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

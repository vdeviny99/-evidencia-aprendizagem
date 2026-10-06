import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CalendarCheck,
  CheckCircle,
  Clock,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Cursos, mentoria e palestras da Edukacuca para aprender a aprender.",
};

const whatsapp = "https://wa.me/5511926599367?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20os%20cursos%20da%20Edukacuca.";

const courses = [
  {
    icon: BookOpen,
    title: "Curso Básico de Aprender a Aprender",
    description:
      "Fundamentos da ciência da aprendizagem para estudar com mais método, autonomia e clareza.",
    tag: "Curso gravado",
    price: "R$ 220",
    note: "acesso por 2 anos",
    color: "from-sky/20 via-white to-white border-sky/40 text-sky-deep",
    items: [
      "Acesso por 2 anos",
      "Atualizações incluídas durante o período",
      "Base para organizar estudos e revisar melhor",
      "Conteúdo introdutório e direto ao ponto",
    ],
    cta: "Comprar curso",
  },
  {
    icon: CalendarCheck,
    title: "Mentoria de aprendizagem",
    description:
      "Acompanhamento de 4 semanas para transformar sua rotina de estudos em um plano mais claro e possível.",
    tag: "4 semanas",
    price: "Sob consulta",
    note: "acompanhamento individual",
    color: "from-green/12 via-white to-white border-green/25 text-green",
    items: [
      "Encontros de acompanhamento",
      "Organização da rotina de estudos",
      "Metas, revisão e ajustes semanais",
      "Plano adaptado ao contexto do estudante",
    ],
    cta: "Falar sobre mentoria",
  },
  {
    icon: GraduationCap,
    title: "Palestras",
    description:
      "Apresentações sobre aprendizagem, estudo e autonomia para escolas, empresas, eventos e grupos.",
    tag: "Instituições e eventos",
    price: "Sob consulta",
    note: "formato personalizado",
    color: "from-gold/15 via-white to-white border-gold/35 text-gold",
    items: [
      "Conteúdo adaptado ao público",
      "Linguagem clara e aplicável",
      "Temas ligados à ciência da aprendizagem",
      "Formato para escolas, equipes e eventos",
    ],
    cta: "Solicitar proposta",
  },
];

const audiences = [
  [Users, "Estudantes", "Para quem quer aprender a estudar com mais consciência e autonomia."],
  [Briefcase, "Profissionais", "Para quem precisa organizar aprendizagem, rotina e atualização constante."],
  [GraduationCap, "Instituições", "Para escolas, empresas e grupos que querem falar sobre aprendizagem de forma prática."],
] as const;

export default function CursosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.09),transparent_28%),linear-gradient(135deg,#f6f8f6_0%,#ffffff_52%,#f4faf6_100%)] py-16 sm:py-24">
        <div className="absolute right-0 top-20 hidden h-72 w-72 rounded-full bg-green/10 blur-3xl lg:block" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white/80 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent shadow-sm">
              <Sparkles className="h-4 w-4 text-gold" />
              Cursos Edukacuca
            </span>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-black tracking-tight text-accent sm:text-5xl">
              Aprenda a aprender com mais método e autonomia
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent/75 sm:text-xl">
              Cursos, mentoria e palestras para transformar ciência da aprendizagem em prática de estudo, rotina e evolução real.
            </p>
            <div className="mt-8 flex">
              <a href="#cursos" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto">
                Conheça as opções
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-accent/10 bg-white/70 p-6 shadow-sm backdrop-blur">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">para quem é</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-accent">Diferentes formatos para diferentes necessidades</h2>
            <div className="mt-6 space-y-3">
              {audiences.map(([Icon, title, text]) => (
                <div key={title} className="flex gap-4 rounded-2xl border border-accent/10 bg-white/70 p-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-heading text-sm font-bold text-accent">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-accent/62">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cursos" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-green">opções</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Escolha o formato que combina com seu momento</h2>
            <p className="mt-4 leading-relaxed text-accent/65">
              Do curso introdutório à mentoria individual, cada opção foi pensada para tornar o aprendizado mais prático e aplicável.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <article key={course.title} className={`flex min-h-[560px] flex-col rounded-[2rem] border bg-gradient-to-br ${course.color} p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10`}>
                  <div className="flex min-h-[170px] flex-col">
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                        <Icon className="h-7 w-7" />
                      </div>
                      <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-accent/55 shadow-sm">
                        {course.tag}
                      </span>
                    </div>
                    <h3 className="mt-7 font-heading text-2xl font-bold leading-tight text-accent">{course.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-accent/65">{course.description}</p>
                  </div>

                  <div className="mt-6 rounded-3xl border border-accent/10 bg-white/80 px-5 py-4 shadow-sm">
                    <p className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent/45">investimento</p>
                    <div className="mt-1 flex flex-wrap items-end gap-x-2 gap-y-1 text-accent">
                      <span className="font-heading text-4xl font-black tracking-tight">{course.price}</span>
                      <span className="pb-1 text-sm text-accent/55">{course.note}</span>
                    </div>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {course.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-accent/70">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 text-center font-heading text-xs font-bold uppercase leading-snug tracking-wider text-white transition-colors hover:bg-accent-dark">
                    {course.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">instituições</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Também levo aprendizagem para escolas, empresas e eventos</h2>
            <p className="mt-4 leading-relaxed text-accent/68">
              Palestras e formações podem ser adaptadas para o perfil do público, com linguagem clara, exemplos práticos e foco em mudança real de comportamento de estudo.
            </p>
          </div>
          <div className="rounded-[2rem] border border-gold/20 bg-gradient-to-br from-gold/10 via-white to-white p-8 shadow-sm">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-gold shadow-sm">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="mt-5 font-heading text-2xl font-bold text-accent">Vamos conversar sobre o formato?</h3>
            <p className="mt-3 leading-relaxed text-accent/65">
              Me conte o público, objetivo e contexto. A partir disso, montamos uma proposta adequada.
            </p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white transition-colors hover:bg-accent-dark">
              <MessageCircle className="h-4 w-4" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

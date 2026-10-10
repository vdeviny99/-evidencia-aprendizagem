import type { CSSProperties } from "react";
import { EditorialPage, EditorialAccent } from "@/components/Editorial";
import editorial from "@/components/Editorial.module.css";
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
    color: "#409d9a",
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
    color: "#60977b",
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
    color: "#ea580c",
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
    <EditorialPage>
      <section className={`${editorial.hero} py-16 sm:py-24`}>
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <span className={editorial.eyebrow}>
              Cursos Edukacuca
            </span>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-black tracking-tight text-accent sm:text-5xl">
              Aprenda a aprender com mais método e autonomia
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent/75 sm:text-xl">
              Cursos, mentoria e palestras para transformar ciência da aprendizagem em prática de estudo, rotina e evolução real.
            </p>
            <div className="mt-8 flex">
              <a href="#cursos" className={`${editorial.button}`}>
                Conheça as opções
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className={`${editorial.panel} p-6 sm:p-8`}>
            <div className={editorial.ctaHeading}><p className={editorial.eyebrow}>para quem é</p><EditorialAccent guide="uirapuru" /></div>
            <h2 className="mt-3 font-heading text-2xl font-bold text-accent">Diferentes formatos para diferentes necessidades</h2>
            <div className="mt-6 space-y-3">
              {audiences.map(([Icon, title, text]) => (
                <div key={title} className={`${editorial.row} flex gap-4 py-4`}>
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

      <section id="cursos" className={`${editorial.paper} scroll-mt-24 py-16 sm:py-24`}>
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-green">opções</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Escolha o formato que combina com seu momento</h2>
            <p className="mt-4 leading-relaxed text-accent/65">
              Do curso introdutório à mentoria individual, cada opção foi pensada para tornar o aprendizado mais prático e aplicável.
            </p>
          </div>

          <div className={editorial.courseGrid}>
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <article key={course.title} className={editorial.course} style={{ "--course-color": course.color } as CSSProperties}>
                  <div className="flex items-center justify-between gap-4">
                    <Icon className="h-7 w-7 shrink-0" style={{ color: course.color }} />
                    <span className="text-xs font-semibold text-accent/70">{course.tag}</span>
                  </div>
                  <div className={editorial.courseIntro}>
                    <h3 className="mt-7 font-heading text-2xl font-bold leading-tight text-accent">{course.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-accent/65">{course.description}</p>
                  </div>

                  <div className={editorial.investment}>
                    <p className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent/70">investimento</p>
                    <div className="mt-1 flex flex-wrap items-end gap-x-2 gap-y-1 text-accent">
                      <strong>{course.price}</strong>
                      <span className="pb-1 text-sm text-accent/70">{course.note}</span>
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

                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={editorial.button}>
                    {course.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${editorial.paper} py-16 sm:py-24`}>
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">instituições</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Também levo aprendizagem para escolas, empresas e eventos</h2>
            <p className="mt-4 leading-relaxed text-accent/68">
              Palestras e formações podem ser adaptadas para o perfil do público, com linguagem clara, exemplos práticos e foco em mudança real de comportamento de estudo.
            </p>
          </div>
          <div className={`${editorial.cta} p-7 sm:p-8`}>
            <div className={editorial.ctaHeading}><Clock className="h-6 w-6 text-green" /><EditorialAccent guide="iara" /></div>
            <h3 className="mt-5 font-heading text-2xl font-bold text-accent">Vamos conversar sobre o formato?</h3>
            <p className="mt-3 leading-relaxed text-accent/65">
              Me conte o público, objetivo e contexto. A partir disso, montamos uma proposta adequada.
            </p>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className={`${editorial.button} mt-8`}>
              <MessageCircle className="h-4 w-4" />
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </EditorialPage>
  );
}

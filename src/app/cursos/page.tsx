import type { Metadata } from "next";
import { BookOpen, ArrowRight, Clock, BarChart, Briefcase, School, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Cursos e materiais do EdukaCuca para aprender a aprender.",
};

const courses = [
  {
    title: "Curso Básico de Aprender a Aprender",
    description:
      "Fundamentos da ciência da aprendizagem para estudantes, profissionais e autodidatas.",
    duration: "4 semanas",
    level: "Iniciante",
  },
  {
    title: "Workshops de Aprender a Aprender",
    description:
      "Sessões práticas e interativas para aplicar técnicas de estudo baseadas em evidências no seu dia a dia.",
    duration: "2 horas",
  },
  {
    title: "Palestras sobre o Tema",
    description:
      "Apresentações sobre ciência da aprendizagem para escolas, empresas e eventos. Conteúdo adaptado ao seu público.",
  },
];

export default function CursosPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-accent/5 to-cream pb-16 pt-12 sm:pt-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center animate-fade-in">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent">
              Cursos
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold text-accent sm:text-4xl">
              Cursos & Materiais
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-accent/60">
              Materiais completos baseados em ciência da aprendizagem.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <div
                key={course.title}
                className={`group animate-fade-in-up stagger-${i + 1} rounded-xl bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-accent" />
                  {(course.duration || course.level) && (
                    <div className="flex gap-4 text-xs text-accent/50">
                      {course.duration && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {course.duration}
                        </span>
                      )}
                      {course.level && (
                        <span className="flex items-center gap-1">
                          <BarChart className="h-3 w-3" />
                          {course.level}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                <h2 className="mt-4 font-heading text-xl font-bold text-accent transition-colors group-hover:text-accent-dark">
                  {course.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-accent/60">
                  {course.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-accent transition-colors group-hover:text-accent-dark">
                  Saiba Mais
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent/90 shadow-xl">
            <div className="grid items-center gap-8 px-8 py-12 sm:px-12 sm:grid-cols-2">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  Contrate para sua Empresa ou Evento
                </h2>
                <p className="mt-3 leading-relaxed text-white/80">
                  Leve cursos, palestras e workshops baseados em ciência da aprendizagem para sua
                  escola, empresa ou evento. Conteúdo adaptado ao seu público com foco em resultados
                  reais.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    { icon: School, text: "Palestras para escolas e universidades" },
                    { icon: Briefcase, text: "Workshops para empresas e equipes" },
                    { icon: Users, text: "Cursos sob medida para seu grupo" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-sm text-white/80">
                      <item.icon className="h-4 w-4 shrink-0 text-gold" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contato"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-gold/90 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Solicitar Orçamento
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="hidden sm:flex sm:justify-center">
                <div className="flex h-56 w-56 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm">
                  <Briefcase className="h-24 w-24 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

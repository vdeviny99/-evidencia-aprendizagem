import { ArrowRight, BookOpen, Brain, ClipboardCheck, GraduationCap, Languages, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

const ecosystem = [
  {
    icon: ClipboardCheck,
    label: "Diagnóstico",
    title: "Entenda seu estilo de aprendizagem",
    text: "Um ponto de partida educativo para identificar tendências, dificuldades e caminhos possíveis para estudar melhor.",
    href: "/diagnostico",
  },
  {
    icon: Languages,
    label: "Aulas",
    title: "Idiomas com comunicação autêntica",
    text: "Inglês e francês com o aluno no centro: objetivo, ritmo, contexto e necessidades reais orientam cada aula.",
    href: "/aulas",
  },
  {
    icon: BookOpen,
    label: "Cursos",
    title: "Aprender a aprender com método",
    text: "Curso básico, mentoria de aprendizagem e palestras para transformar ciência em prática de estudo.",
    href: "/cursos",
  },
];

const principles = [
  [Brain, "Ciência sem complicar", "Estratégias baseadas em psicologia cognitiva, neurociência e educação, explicadas em linguagem clara."],
  [GraduationCap, "Autonomia do estudante", "A ideia não é só entregar conteúdo, mas ajudar você a entender melhor como aprende."],
  [Sparkles, "Prática com sentido", "Menos fórmula pronta. Mais conexão com objetivos reais, rotina e contexto de quem está aprendendo."],
] as const;

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.10),transparent_30%),linear-gradient(135deg,#f6f8f6_0%,#ffffff_54%,#eef7f2_100%)] py-20 sm:py-28">
        <div className="absolute left-1/2 top-12 hidden h-80 w-80 -translate-x-1/2 rounded-full bg-green/10 blur-3xl lg:block" />
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white/80 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent shadow-sm">
              <Sparkles className="h-4 w-4 text-gold" />
              EdukaCuca
            </span>
            <h1 className="mt-7 font-heading text-4xl font-black tracking-tight text-accent sm:text-6xl lg:text-7xl">
              Um lugar para aprender melhor, não apenas estudar mais
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-accent/72 sm:text-xl">
              A EdukaCuca reúne diagnóstico, aulas, cursos e mentoria para ajudar estudantes a entenderem como aprendem, criarem melhores estratégias e usarem o conhecimento com mais autonomia.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/diagnostico" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold/90">
                Começar pelo diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/aulas" className="inline-flex items-center justify-center rounded-full border border-accent/15 bg-white px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-accent shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent/5">
                Conhecer aulas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-green">visão geral</span>
              <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">O ecossistema EdukaCuca</h2>
              <p className="mt-4 leading-relaxed text-accent/65">
                Cada frente resolve uma parte diferente da aprendizagem. Você pode começar por onde fizer mais sentido para o seu momento.
              </p>
            </div>

            <div className="space-y-4">
              {ecosystem.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link key={item.title} href={item.href} className="group grid gap-5 rounded-[2rem] border border-accent/10 bg-cream p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl hover:shadow-accent/8 sm:grid-cols-[76px_1fr_auto] sm:items-center sm:p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-gold shadow-sm">
                      <Icon className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent/45">0{index + 1} · {item.label}</p>
                      <h3 className="mt-2 font-heading text-2xl font-bold text-accent">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-accent/62">{item.text}</p>
                    </div>
                    <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white sm:flex">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">olhar pedagógico</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Aulas, cursos e diagnóstico partem da mesma base</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {principles.map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl border border-accent/10 bg-white p-6 shadow-sm">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 font-heading text-lg font-bold text-accent">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-accent/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <MessageCircle className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 font-heading text-3xl font-bold text-accent">Quer entender qual caminho combina com você?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-accent/65">
            Se você ainda não sabe se começa por aula, diagnóstico, curso ou mentoria, mande uma mensagem e eu te ajudo a escolher o melhor ponto de partida.
          </p>
          <a href="https://wa.me/5511926599367" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark">
            Falar pelo WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}

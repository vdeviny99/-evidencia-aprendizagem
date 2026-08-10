import { Sparkles, Library, Users, ArrowRight, FlaskConical, Languages, CheckCircle } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: Library,
    title: "Base Científica",
    desc: "Conteúdo fundamentado em pesquisas revisadas por pares nas áreas de psicologia cognitiva e neurociência educacional.",
  },
  {
    icon: Sparkles,
    title: "Na Prática",
    desc: "Técnicas validadas que você pode aplicar imediatamente nos seus estudos para aprender mais em menos tempo.",
  },
  {
    icon: Users,
    title: "Para Você",
    desc: "Linguagem acessível sem sacrificar o rigor científico. Atendimento personalizado para adultos e jovens.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/5 via-cream to-cream">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.03)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <span className="inline-block rounded-full border border-accent/20 bg-white/60 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent shadow-sm backdrop-blur-sm">
              Escola Online
            </span>
            <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-accent sm:text-5xl lg:text-6xl">
              EdukaCuca
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-accent/70 sm:text-xl">
              Aprenda a aprender com quem entende do assunto.
            </p>
            <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-base leading-relaxed text-accent/70 text-pretty">
              <p>
                A <strong className="font-semibold text-accent">EdukaCuca</strong> une{" "}
                <strong className="font-semibold text-accent">neurociência, psicologia cognitiva e ensino de idiomas</strong>{" "}
                para transformar sua relação com o aprendizado.
              </p>
              <p>
                Se você sente que estuda, mas não aprende, ou quer levar sua fluência em inglês e francês para o próximo nível,
                você está no lugar certo.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/diagnostico"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/25 transition-all hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 sm:w-auto"
              >
                <FlaskConical className="h-4 w-4" />
                Diagnóstico de Habilidades
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/aulas"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/20 bg-white/80 px-8 py-3 font-heading text-sm font-bold uppercase tracking-wider text-accent shadow-sm transition-all hover:bg-accent/5 hover:shadow-md hover:-translate-y-0.5 sm:w-auto"
              >
                <Languages className="h-4 w-4" />
                Aulas de Idiomas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-8">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-6 sm:grid-cols-3">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={`animate-fade-in-up stagger-${i + 1} rounded-xl bg-card px-6 py-16 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mt-6 font-heading text-sm font-bold uppercase tracking-wider text-accent">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-accent/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent/5 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid items-center gap-12 sm:grid-cols-2">
            <div className="animate-fade-in">
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent">
                Diagnóstico
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-accent sm:text-3xl">
                Como Anda Seu Aprendizado?
              </h2>
              <p className="mt-4 leading-relaxed text-accent/70">
                Responda a um questionário científico de 33 itens — baseado em décadas de pesquisa em
                autorregulação da aprendizagem, metacognição e estilos de estudo — e receba um panorama
                completo do seu perfil como aprendiz.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Avaliação gratuita e anônima",
                  "33 questões baseadas em instrumentos validados",
                  "Resultado imediato com pontuações por categoria",
                  "Recomendações personalizadas de estudo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-accent/70">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/diagnostico"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-accent/90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Fazer Diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex h-64 w-64 items-center justify-center rounded-3xl bg-gradient-to-br from-accent/10 to-gold/10 shadow-inner sm:h-72 sm:w-72">
                <FlaskConical className="h-24 w-24 text-accent/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid items-center gap-12 sm:grid-cols-2">
            <div className="order-2 flex items-center justify-center sm:order-1">
              <div className="flex h-64 w-64 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/10 to-accent/10 shadow-inner sm:h-72 sm:w-72">
                <Languages className="h-24 w-24 text-accent/20" />
              </div>
            </div>
            <div className="order-1 animate-fade-in sm:order-2">
              <span className="inline-block rounded-full bg-gold/10 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-gold">
                Aulas
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-accent sm:text-3xl">
                Inglês e Francês com Método Científico
              </h2>
              <p className="mt-4 leading-relaxed text-accent/70">
                Aulas particulares online que combinam a abordagem Dogme (comunicação autêntica e
                centrada no aluno) com técnicas de neurociência da aprendizagem. Não é um curso
                engessado — cada aula é desenhada para a sua necessidade real.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Aulas individuais sob medida para seu nível e objetivo",
                  "Foco em conversação autêntica desde o primeiro dia",
                  "Estratégias de estudo personalizadas com base na ciência",
                  "Flexibilidade de horários e 100% online",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-accent/70">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/aulas"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-gold/90 hover:shadow-lg hover:-translate-y-0.5"
              >
                Quero Aulas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

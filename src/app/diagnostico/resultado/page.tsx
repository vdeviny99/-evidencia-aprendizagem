"use client";

import { ArrowRight, BarChart3, BookOpen, CalendarCheck, Download, Languages, LockKeyhole, MessageCircle, Presentation } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DiagnosticResult, matrixConfig, scoreToPercent } from "@/lib/diagnosticoResultado";

const fallbackResult: DiagnosticResult = {
  constructs: {
    planejamento: 3.2,
    gestaoTempo: 3,
    metacognicao: 3.1,
    buscaAjuda: 2.9,
    aprendizagemAtiva: 3.2,
    revisaoEstrategica: 3,
    motivacao: 3.1,
  },
  groups: {
    planejamento: 3.1,
    metacognicao: 3.03,
    estrategiasAtivas: 3.1,
  },
  groupStatus: {
    planejamento: true,
    metacognicao: true,
    estrategiasAtivas: true,
  },
  matrixId: 1,
  styleName: matrixConfig[1].name,
  styleDescription: matrixConfig[1].description,
  interpretation: matrixConfig[1].interpretation,
};

const curupiraPractices = [
  ["Planejamento", "Organize sua sessão de estudos antes de começar a estudar. Separe blocos de estudo, planeje pausas, escolha um ambiente calmo, defina o que vai estudar antes de começar e como vai fazer isso. Foque no processo, esqueça o resultado."],
  ["Execução", "Esta é a parte de quando você está no ato de estudar. Utilize estratégias que façam você relembrar do estudo por mais tempo, tais como a prática do 'relembrar ativo' para treinar sua recuperação de memórias, espace as sessões de estudo pela semana em vez de estudar de uma vez só e alterne blocos de estudo com assuntos parecidos em vez de uma matéria só."],
  ["Manutenção do aprendizado", "Aqui você vai se preocupar em interromper o esquecimento do que estudou. Organize revisões ao longo das semanas, teste a si mesmo com provas sobre o assunto, tente explicar para colegas o que sabe. Se envolva com o assunto de verdade e tente entender com suas próprias palavras."],
  ["Reflexão", "Após cada semana/sessão de estudo, pare e pense. Eu atingi meus objetivos ao estudar? Eu poderia ter utilizado estratégias diferentes? O que fiz realmente funcionou? Como posso melhorar para as próximas vezes?"],
];

const products = [
  [Languages, "Aulas de inglês e francês", "Aulas online centradas no aluno, com comunicação autêntica e acompanhamento próximo.", "Conhecer aulas", "/aulas"],
  [BookOpen, "Curso Aprender a Aprender", "Um curso básico para entender estratégias de estudo e aplicar ciência da aprendizagem na rotina.", "Ver curso", "/cursos"],
  [CalendarCheck, "Mentoria de aprendizagem", "Acompanhamento de 4 semanas para organizar estudos, metas e revisão com mais clareza.", "Falar sobre mentoria", "/cursos"],
  [Presentation, "Palestras", "Apresentações sobre aprendizagem para escolas, empresas, eventos e grupos.", "Solicitar palestra", "/cursos"],
] as const;

export default function ResultadoDiagnostico() {
  const [result] = useState<DiagnosticResult>(() => {
    if (typeof window === "undefined") return fallbackResult;

    const stored = window.localStorage.getItem("edukacuca-diagnostico-resultado");
    if (!stored) return fallbackResult;

    try {
      return JSON.parse(stored) as DiagnosticResult;
    } catch {
      return fallbackResult;
    }
  });

  const visibleAxes = [
    ["Planejamento", scoreToPercent(result.groups.planejamento)],
    ["Estratégias ativas", scoreToPercent(result.groups.estrategiasAtivas)],
    ["Metacognição", scoreToPercent(result.groups.metacognicao)],
  ] as const;

  const premiumAxes = [
    ["Gestão do tempo", scoreToPercent(result.constructs.gestaoTempo)],
    ["Busca de ajuda", scoreToPercent(result.constructs.buscaAjuda)],
    ["Revisão estratégica", scoreToPercent(result.constructs.revisaoEstrategica)],
    ["Motivação e consistência", scoreToPercent(result.constructs.motivacao)],
  ] as const;

  return (
    <>
      <section className="bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.12),transparent_28%),linear-gradient(135deg,#f6f8f6_0%,#ffffff_50%,#eef7f2_100%)] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-green/10 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-green">resultado gratuito</span>
              <h1 className="mt-5 font-heading text-4xl font-black tracking-tight text-accent sm:text-5xl">
                Seu estilo de aprendizagem é: {result.styleName}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-accent/70">
                {result.styleDescription}
              </p>
              <p className="mt-5 max-w-2xl rounded-2xl border border-accent/10 bg-white/75 p-5 text-sm leading-relaxed text-accent/65">
                Este é um dos 8 estilos possíveis da matriz Edukacuca. O resultado gratuito apresenta uma leitura inicial do seu estilo e caminhos práticos para estudar melhor.
              </p>
            </div>
            <div className="rounded-[2rem] border border-accent/10 bg-white p-6 shadow-xl shadow-accent/5">
              <BarChart3 className="h-10 w-10 text-gold" />
              <h2 className="mt-4 font-heading text-2xl font-bold text-accent">Seu mapa de aprendizagem</h2>
              <div className="mt-6 space-y-4">
                {visibleAxes.map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm text-accent/65">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-accent/10">
                      <div className="h-3 rounded-full bg-gradient-to-r from-green to-gold" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
                <div className="relative mt-6 overflow-hidden rounded-3xl border border-accent/10 bg-cream p-4">
                  <div className="space-y-4 blur-[3px] select-none">
                    {premiumAxes.map(([label, value]) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-sm text-accent/45">
                          <span>{label}</span>
                          <span>{value}%</span>
                        </div>
                        <div className="h-3 rounded-full bg-accent/10">
                          <div className="h-3 rounded-full bg-gradient-to-r from-green to-gold" style={{ width: `${value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-cream/65 backdrop-blur-[1px]">
                    <div className="rounded-full bg-white px-4 py-2 text-center shadow-sm">
                      <p className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider text-accent">
                        <LockKeyhole className="h-3.5 w-3.5 text-gold" />
                        Mapa completo no diagnóstico premium
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[2rem] bg-cream p-8 sm:p-10">
            <h2 className="font-heading text-3xl font-bold text-accent">Estilo {result.styleName}</h2>
            {result.interpretation.map((paragraph) => (
              <p key={paragraph} className="mt-4 leading-relaxed text-accent/70 first:mt-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-accent/10 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="font-heading text-3xl font-bold text-accent">Boas práticas de estudo para o seu estilo</h2>
            <p className="mt-3 leading-relaxed text-accent/65">
              Se eu tivesse apenas 2 minutos para te ajudar a aprender melhor baseado em meus 8 anos de experiência como professor, faria mais ou menos assim.
            </p>
            <p className="mt-6 font-heading text-sm font-bold uppercase tracking-wider text-green">Os 4 passos fundamentais</p>
            <div className="mt-5 space-y-4">
              {curupiraPractices.map(([title, text], index) => (
                <div key={title} className={`rounded-2xl border-l-4 bg-cream p-5 ${["border-green", "border-gold", "border-sky-deep", "border-orange-700"][index]}`}>
                  <p className="text-sm leading-relaxed text-accent/75">
                    <strong className="font-heading text-accent">{title}.</strong> {text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed text-accent/65">
              Esta é a sua oportunidade de criar o hábito de questionar seus métodos de aprendizado e seus resultados. Seja sincero consigo mesmo e aprenda a refletir sobre suas estratégias e também sobre o que aprendeu. Desta forma, ao se dedicar ao aprender a aprender, terá mais autonomia ao longo do tempo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-accent/10 bg-white p-8 shadow-sm">
            <Download className="h-9 w-9 text-gold" />
            <h2 className="mt-4 font-heading text-2xl font-bold text-accent">Baixar minha devolutiva gratuita em PDF</h2>
            <p className="mt-3 leading-relaxed text-accent/65">
              Acesse o PDF do seu diagnóstico gratuito com estilo de aprendizagem, mapa parcial e recomendações principais.
            </p>
            <a href="#" className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark">
              Baixar PDF
            </a>
          </div>
          <div className="rounded-[2rem] bg-accent p-8 text-white shadow-lg shadow-accent/15">
            <h2 className="font-heading text-2xl font-bold">Quer uma análise personalizada do seu resultado?</h2>
            <p className="mt-3 leading-relaxed text-white/75">
              No diagnóstico completo, você recebe uma devolutiva individual por WhatsApp com interpretação do seu estilo, recomendações específicas e próximos passos para melhorar sua rotina de estudos.
            </p>
            <Link href="/diagnostico/completo" className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-gold/90">
              Quero o diagnóstico completo
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-green">produtos edukacuca</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Continue seu caminho com a Edukacuca</h2>
            <p className="mt-4 leading-relaxed text-accent/65">
              Depois do diagnóstico, você pode seguir por aulas, curso, mentoria ou palestras, de acordo com o seu objetivo.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(([Icon, title, text, button, href]) => (
              <div key={title} className="rounded-3xl border border-accent/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-accent/5">
                <Icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 font-heading text-lg font-bold text-accent">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-accent/65">{text}</p>
                <Link href={href} className="mt-5 inline-flex font-heading text-xs font-bold uppercase tracking-wider text-green">
                  {button}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-[2rem] bg-accent p-8 text-center text-white sm:p-10">
            <h3 className="font-heading text-3xl font-bold">Pronto para transformar seu jeito de estudar?</h3>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="https://wa.me/5511926599367" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-gold/90">
                <MessageCircle className="h-4 w-4" />
                Falar pelo WhatsApp
              </a>
              <Link href="/diagnostico/completo" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10">
                Ver diagnóstico completo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

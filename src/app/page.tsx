import { EditorialPage, EditorialAccent } from "@/components/Editorial";
import editorial from "@/components/Editorial.module.css";
import { ArrowRight, BookOpen, ClipboardCheck, Languages } from "lucide-react";
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
    text: (
      <>
        O questionário observa como você organiza <strong className="font-semibold text-accent">tempo, foco, revisão, motivação e estratégias de estudo</strong> antes de indicar qualquer técnica.
      </>
    ),
  },
  {
    number: "02",
    title: "Aplicar ciência na prática",
    text: (
      <>
        Traduzimos <strong className="font-semibold text-accent">neurociência da aprendizagem, psicologia cognitiva e pedagogia</strong> em estratégias possíveis para a sua rotina, sem depender de fórmulas prontas.
      </>
    ),
  },
  {
    number: "03",
    title: "Construir autonomia",
    text: (
      <>
        Nosso objetivo é ajudar você a entender o próprio processo e ganhar <strong className="font-semibold text-accent">repertório para escolher o que funciona melhor</strong> na hora de estudar sozinho.
      </>
    ),
  },
] as const;

export default function Home() {
  return (
    <EditorialPage>
      <section className={editorial.hero}>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <span className={editorial.eyebrow}>
                EdukaCuca
              </span>
              <h1 className="mt-7 max-w-[46rem] text-balance font-heading text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl xl:text-6xl">
                Estude melhor: <span className="text-green">descubra seu perfil</span> e transforme sua forma de aprender
              </h1>
              <p className="mt-6 max-w-[42rem] text-pretty text-lg leading-8 text-accent/75">
                A EdukaCuca combina diagnóstico de aprendizagem, aulas, cursos e estratégias baseadas em ciência para ajudar estudantes e profissionais a estudar com mais clareza, autonomia e direção.
              </p>
              <p className="mt-5 text-sm font-medium leading-6 text-accent/75 sm:hidden">
                Comece pelo diagnóstico gratuito e descubra seu perfil de aprendizagem.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/diagnostico" className={`${editorial.button}`}>
                  Fazer diagnóstico gratuito
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/aulas" className={`${editorial.button} ${editorial.secondary}`}>
                  Ver aulas e mentorias
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className={`${editorial.panel} w-full p-6 sm:p-8 lg:justify-self-end`}>
              <div className={editorial.ctaHeading}><p className={editorial.eyebrow}>Por onde começar</p><EditorialAccent /></div>
              <div className="mt-6 grid gap-4">
                {journey.map(([Icon, title, text, href]) => (
                  <Link key={title} href={href} className={`${editorial.row} group flex gap-4 py-5 sm:items-center`}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-green">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-xl font-bold text-accent">{title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-accent/62">{text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${editorial.paper} pb-10 pt-16 sm:pb-14 sm:pt-24`}>
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
              <div className="relative grid">
                {outcomes.map(({ number, title, text }) => (
                  <div key={title} className={`${editorial.row} grid grid-cols-[2rem_1fr] gap-4 py-6`}>
                    <div className={editorial.number}>
                      {number}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-heading text-xl font-bold text-accent">{title}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-accent/62">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/diagnostico" className={`${editorial.button} ${editorial.secondary} mt-5 sm:hidden`}>
                Começar pelo diagnóstico gratuito
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={`${editorial.paper} pb-16 pt-8 sm:pb-24 sm:pt-10`}>
        <div className="mx-auto max-w-6xl px-4">
          <div className={`${editorial.cta} p-7 sm:p-10 lg:p-12`}>
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className={editorial.ctaHeading}><span className={editorial.eyebrow}>Próximo passo</span><EditorialAccent guide="uirapuru" /></div>
                <h2 className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
                  Faça o diagnóstico gratuito e descubra por onde começar
                </h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-accent/75">
                  Em cerca de 5 minutos, você recebe uma primeira leitura dos seus hábitos de estudo e caminhos práticos para aprender melhor.
                </p>
              </div>
              <Link href="/diagnostico" className={`${editorial.button}`}>
                Fazer diagnóstico gratuito
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </EditorialPage>
  );
}

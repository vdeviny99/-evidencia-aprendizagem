import {
  GraduationCap,
  Monitor,
  Target,
  Clock,
  MessageCircle,
  UserCheck,
  Repeat,
  FileText,
  ArrowRight,
  Globe,
  BookOpen,
  Lightbulb,
} from "lucide-react";

export const metadata = {
  title: "Aulas",
  description:
    "Aulas baseadas em ciência da aprendizagem para aprender a aprender.",
};

const serviceIcon = [Globe, BookOpen, Lightbulb];
const serviceBg = [
  "from-blue-500/10 to-blue-500/5 border-blue-500/20",
  "from-emerald-500/10 to-emerald-500/5 border-emerald-500/20",
  "from-amber-500/10 to-amber-500/5 border-amber-500/20",
];
const serviceIconBg = [
  "bg-blue-500/10 text-blue-600",
  "bg-emerald-500/10 text-emerald-600",
  "bg-amber-500/10 text-amber-600",
];

const aulas = [
  {
    titulo: "Inglês",
    descricao: "Curso completo de inglês com foco em compreensão e conversação.",
    nivel: "Iniciante a Avançado",
  },
  {
    titulo: "Francês",
    descricao: "Curso completo de francês com foco em compreensão e conversação.",
    nivel: "Iniciante a Avançado",
  },
  {
    titulo: "Estratégias de aprendizagem",
    descricao: "Técnicas baseadas em evidências para estudar melhor e reter mais.",
  },
];

const steps = [
  {
    icon: Target,
    title: "Primeiro Contato",
    desc: "Uma conversa inicial para entender seus objetivos, seu nível e suas necessidades. Conheço você e explico como funciona o método.",
  },
  {
    icon: Repeat,
    title: "Diagnóstico Inicial",
    desc: "Mapeio seu perfil de aprendiz, identifico os pontos fortes e fracos e aponto melhorias.",
  },
  {
    icon: UserCheck,
    title: "Acompanhamento",
    desc: "Feedback contínuo e ajustes no plano de estudos conforme sua evolução.",
  },
];

export default async function AulasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-accent/5 to-cream pb-16 pt-12 sm:pt-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent">
              Aulas
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold text-accent sm:text-4xl">
              Aprenda no seu Ritmo
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-accent/60">
              Aulas estruturadas com base em evidências científicas para transformar
              sua forma de estudar.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {aulas.map((aula, i) => (
              <div
                key={aula.titulo}
                className={`group animate-fade-in-up stagger-${i + 1} relative overflow-hidden rounded-2xl border-t-4 bg-gradient-to-b ${serviceBg[i]} p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${serviceIconBg[i]}`}>
                  {(() => {
                    const Icon = serviceIcon[i];
                    return <Icon className="h-7 w-7" />;
                  })()}
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-accent">
                  {aula.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-accent/60">
                  {aula.descricao}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  {aula.nivel && (
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-accent/60 shadow-sm">
                      {aula.nivel}
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent/60 opacity-0 transition-opacity group-hover:opacity-100">
                    Saiba mais
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold text-accent">
              Como funcionam as aulas
            </h2>
            <p className="mt-3 text-accent/60">
              Nosso método é baseado em evidências e adaptado ao seu perfil.
            </p>
          </div>

          <div className="relative mt-14 grid gap-8 sm:grid-cols-3">
            <div className="absolute left-5 top-0 h-full w-px bg-accent/10 sm:hidden" />
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative pl-14 sm:pl-0 sm:text-center">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-md sm:relative sm:mx-auto">
                    {i + 1}
                  </div>
                  <div className="mt-2 sm:mt-6">
                    <div className="hidden sm:mx-auto sm:flex sm:h-12 sm:w-12 sm:items-center sm:justify-center sm:rounded-full sm:bg-accent/10">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-accent sm:mt-4">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-accent/60">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid items-center gap-12 sm:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-accent/10 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent">
                Online
              </span>
              <h2 className="mt-4 font-heading text-2xl font-bold text-accent">
                Atendimento Online
              </h2>
              <p className="mt-3 leading-relaxed text-accent/70">
                Todas as aulas são realizadas online, ao vivo, com suporte
                personalizado. Você escolhe o horário e o ritmo.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Monitor className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-accent">
                      Ao vivo
                    </h4>
                    <p className="text-sm text-accent/60">
                      Aulas por videochamada com interação em tempo real.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-accent">
                      Horário flexível
                    </h4>
                    <p className="text-sm text-accent/60">
                      Agende conforme sua disponibilidade.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-accent">
                      Suporte contínuo
                    </h4>
                    <p className="text-sm text-accent/60">
                      Tire dúvidas por WhatsApp entre as aulas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="mt-1 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h4 className="font-heading text-sm font-bold text-accent">
                      Feedback Gravado
                    </h4>
                    <p className="text-sm text-accent/60">
                      Todo feedback fica salvo para você consultar quando quiser
                      — registros escritos e de áudio das suas evoluções.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-accent p-8 text-white shadow-sm">
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
                Para quem é?
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Estudantes que querem aprender de verdade",
                  "Profissionais com pouco tempo disponível",
                  "Autodidatas que buscam direcionamento",
                  "Qualquer pessoa que deseja aprender idiomas ou estratégias de estudo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="mt-0.5 text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5511926599367"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-accent transition-all hover:bg-white"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar Aula Experimental
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

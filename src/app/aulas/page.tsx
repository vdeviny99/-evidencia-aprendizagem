import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  Lightbulb,
  MessageCircle,
  Monitor,
  Repeat,
  Sparkles,
  Target,
  UserCheck,
} from "lucide-react";

export const metadata = {
  title: "Aulas",
  description:
    "Aulas online de inglês, francês e estratégias de aprendizagem com foco nas necessidades do aluno.",
};

const whatsapp = "https://wa.me/5511926599367?text=Ol%C3%A1%21%20Quero%20agendar%20uma%20sess%C3%A3o%20inicial%20de%2015%20minutos%20para%20entender%20as%20aulas%20da%20Edukacuca.";

const aulas = [
  {
    icon: Globe,
    titulo: "Inglês",
    descricao:
      "O aluno no centro: priorizamos suas necessidades através da comunicação autêntica.",
    nivel: "Iniciante ao avançado",
    color: "from-sky/20 via-white to-white border-sky/40 text-sky-deep",
    detail: "Conversação, compreensão, repertório e confiança para usar o idioma em situações reais.",
  },
  {
    icon: BookOpen,
    titulo: "Francês",
    descricao:
      "O aluno no centro: priorizamos suas necessidades através da comunicação autêntica.",
    nivel: "Iniciante ao avançado",
    color: "from-green/12 via-white to-white border-green/25 text-green",
    detail: "Base sólida, escuta ativa e prática orientada para construir autonomia no idioma.",
  },
  {
    icon: Lightbulb,
    titulo: "Estratégias de aprendizagem",
    descricao:
      "Aprenda a estudar com mais clareza, método e consciência do que funciona para você.",
    nivel: "Estudo e organização",
    color: "from-gold/15 via-white to-white border-gold/35 text-gold",
    detail: "Rotina, revisão, foco, memória e técnicas baseadas em evidências para aprender melhor.",
  },
];

const principles = [
  "Aulas adaptadas ao seu objetivo, ritmo e contexto.",
  "Comunicação autêntica, voltada às suas necessidades reais.",
  "Feedback claro para você saber o que melhorar depois de cada aula.",
];

const steps = [
  {
    icon: Target,
    title: "Primeiro contato",
    desc: "Entendemos seu objetivo, sua rotina e o que você espera alcançar com as aulas.",
  },
  {
    icon: UserCheck,
    title: "Plano individual",
    desc: "A aula é organizada a partir das suas necessidades, não de um roteiro genérico.",
  },
  {
    icon: Repeat,
    title: "Acompanhamento",
    desc: "Você recebe feedback contínuo e ajustes conforme sua evolução.",
  },
];

const features = [
  [Monitor, "Online e ao vivo", "Interação em tempo real, com atenção individual e espaço para tirar dúvidas."],
  [Clock, "Horários combinados", "A agenda é organizada conforme disponibilidade e objetivo do aluno."],
  [MessageCircle, "Suporte próximo", "Você pode alinhar dúvidas e próximos passos pelo WhatsApp."],
  [FileText, "Registro de evolução", "Feedbacks e orientações ficam claros para acompanhar seu progresso."],
] as const;

const packages = [
  {
    title: "1 aula por semana",
    price: "R$ 400",
    note: "por mês",
    desc: "Para quem quer manter constância, criar rotina e evoluir com acompanhamento semanal.",
    items: ["1 encontro semanal ao vivo", "Plano adaptado ao objetivo", "Feedback e próximos passos", "Suporte pelo WhatsApp"],
    featured: false,
    color: "from-sky/20 via-white to-white border-sky/40",
  },
  {
    title: "2 aulas por semana",
    price: "R$ 720",
    note: "por mês",
    desc: "Para quem busca mais ritmo, prática frequente e evolução mais acompanhada ao longo da semana.",
    items: ["2 encontros semanais ao vivo", "Mais tempo de prática guiada", "Acompanhamento mais próximo", "Melhor custo por aula"],
    featured: true,
    color: "from-green/12 via-white to-white border-green/25",
  },
  {
    title: "Estratégias de aprendizagem",
    price: "R$ 120",
    note: "por hora",
    desc: "Para quem quer organizar estudos, melhorar rotina, revisar métodos e aprender com mais consciência.",
    items: ["Sessão avulsa", "Plano prático de estudo", "Orientação personalizada", "Foco em rotina, revisão e autonomia"],
    featured: false,
    color: "from-gold/15 via-white to-white border-gold/35",
  },
];

export default function AulasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.09),transparent_28%),linear-gradient(135deg,#f6f8f6_0%,#ffffff_52%,#f4faf6_100%)] py-16 sm:py-24">
        <div className="absolute right-0 top-20 hidden h-72 w-72 rounded-full bg-green/10 blur-3xl lg:block" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white/80 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent shadow-sm">
              <Sparkles className="h-4 w-4 text-gold" />
              Aulas Edukacuca
            </span>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-black tracking-tight text-accent sm:text-5xl">
              Aulas pensadas para o seu jeito de aprender
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent/75 sm:text-xl">
              Inglês, francês e estratégias de aprendizagem com foco no aluno, comunicação autêntica e acompanhamento próximo.
            </p>
            <div className="mt-8 flex">
              <a href="#aulas" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold/90">
                Conheça as opções de aulas
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-accent/10 bg-white/70 p-6 shadow-sm backdrop-blur">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">experiência do aluno</p>
            <h2 className="mt-3 font-heading text-2xl font-bold text-accent">O que guia cada aula</h2>
            <p className="mt-3 text-sm leading-relaxed text-accent/62">
              O ponto de partida é entender o aluno, seus objetivos e os obstáculos que aparecem no caminho.
            </p>
            <div className="mt-6 space-y-3">
              {principles.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-accent/10 bg-white/70 p-4 text-sm leading-relaxed text-accent/70">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="aulas" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-green">opções de aula</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Escolha o caminho que faz sentido para você</h2>
            <p className="mt-4 leading-relaxed text-accent/65">
              Cada proposta parte do mesmo princípio: entender suas necessidades e transformar a aula em prática significativa.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {aulas.map((aula) => {
              const Icon = aula.icon;
              return (
                <article key={aula.titulo} className={`group flex min-h-[390px] flex-col rounded-[2rem] border bg-gradient-to-br ${aula.color} p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-accent/55 shadow-sm">
                      {aula.nivel}
                    </span>
                  </div>
                  <h3 className="mt-7 font-heading text-2xl font-bold text-accent">{aula.titulo}</h3>
                  <p className="mt-3 text-base leading-relaxed text-accent/75">{aula.descricao}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-accent/58">{aula.detail}</p>
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark">
                    Contratar
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">método</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Como a aula vira progresso real</h2>
            <p className="mt-4 leading-relaxed text-accent/68">
              A experiência não começa pelo material. Começa por entender quem está aprendendo, qual é o objetivo e quais obstáculos aparecem no caminho.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="flex min-h-[300px] flex-col rounded-[2rem] border border-accent/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-white shadow-sm">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="font-heading text-5xl font-black leading-none text-accent/8">0{index + 1}</span>
                  </div>
                  <div className="mt-8 flex flex-1 flex-col">
                    <h3 className="font-heading text-xl font-bold leading-tight text-accent">{step.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-accent/62">{step.desc}</p>
                  </div>
                  <div className="mt-7 flex items-center justify-between border-t border-accent/10 pt-4">
                    <span className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">Etapa 0{index + 1}</span>
                    <span className="h-1.5 w-14 rounded-full bg-gold/80" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">pacotes</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Escolha o formato das aulas</h2>
            <p className="mt-4 leading-relaxed text-accent/65">
              Os pacotes de idiomas são mensais. As aulas de estratégias de aprendizagem podem ser contratadas por hora.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.title} className={`flex min-h-[520px] flex-col rounded-[2rem] border bg-gradient-to-br ${pkg.color} p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10`}>
                <div className="min-h-[154px]">
                  <div className="flex min-h-8 items-start justify-between gap-3">
                    <h3 className="font-heading text-2xl font-bold leading-tight text-accent">{pkg.title}</h3>
                    {pkg.featured ? (
                      <span className="shrink-0 rounded-full bg-white/80 px-3 py-1 font-heading text-[0.62rem] font-bold uppercase tracking-wider text-accent/55 shadow-sm">
                        Mais intensivo
                      </span>
                    ) : (
                      <span className="hidden shrink-0 px-3 py-1 lg:block" aria-hidden="true" />
                    )}
                  </div>
                  <p className="mt-4 leading-relaxed text-accent/65">{pkg.desc}</p>
                </div>
                <div className="mt-6 rounded-3xl border border-accent/10 bg-white/80 px-5 py-4 shadow-sm">
                  <p className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent/45">{pkg.note === "por hora" ? "aula avulsa" : "mensalidade"}</p>
                  <div className="mt-1 flex items-end gap-2 text-accent">
                    <span className="font-heading text-4xl font-black tracking-tight">{pkg.price}</span>
                    <span className="pb-1 text-sm text-accent/55">{pkg.note}</span>
                  </div>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-accent/70">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark">
                  Contratar
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-[2rem] border border-accent/10 bg-white p-8 shadow-sm">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-green">aulas online</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent">Estrutura leve, acompanhamento próximo</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl bg-cream p-5">
                  <Icon className="h-6 w-6 text-gold" />
                  <h3 className="mt-4 font-heading text-base font-bold text-accent">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-accent/62">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-accent/10 bg-white p-8 text-accent shadow-xl shadow-accent/8">
            <CalendarCheck className="h-10 w-10 text-gold" />
            <h2 className="mt-5 font-heading text-3xl font-bold">Agende sua conversa de 15 minutos</h2>
            <p className="mt-4 leading-relaxed text-accent/68">
              Uma conversa breve para entender sua demanda, tirar dúvidas e explicar como funciona meu acompanhamento.
            </p>
            <ul className="mt-6 space-y-3">
              {["Sem compromisso", "Online", "15 minutos", "Clareza sobre formato, valores e próximos passos"].map((item) => (
                <li key={item} className="flex gap-3 text-sm text-accent/72">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold/90">
              <MessageCircle className="h-4 w-4" />
              Agendar conversa pelo WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}

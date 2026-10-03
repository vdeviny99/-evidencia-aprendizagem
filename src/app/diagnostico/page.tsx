import {
  ArrowRight,
  CheckCircle,
  Bird,
  Fish,
  Flame,
  Footprints,
  ShieldCheck,
  Sparkles,
  TreePine,
  Waves,
  Wind,
} from "lucide-react";
import Link from "next/link";

const freeItems = [
  "Resultado resumido",
  "Gráfico do estilo de aprendizagem",
  "Estilo de aprendizagem",
  "Recomendações gerais de estudo",
  "Acesso imediato ao resultado",
  "Gratuito",
];

const paidItems = [
  "Resultado aprofundado",
  "Gráfico + interpretação personalizada",
  "Estilo de aprendizagem com análise individual",
  "Recomendações específicas para a rotina do estudante",
  "Devolutiva personalizada por WhatsApp",
  "Pago",
];

const profiles = [
  {
    icon: Footprints,
    name: "Curupira",
    desc: "Tende a aprender melhor quando entende a lógica por trás do conteúdo.",
  },
  {
    icon: TreePine,
    name: "Caipora",
    desc: "Tende a gostar de planejar, organizar etapas e acompanhar progresso.",
  },
  {
    icon: Wind,
    name: "Saci",
    desc: "Tende a aprender testando, errando, experimentando e fazendo conexões.",
  },
  {
    icon: Waves,
    name: "Iara",
    desc: "Tende a aprender melhor explicando, debatendo e ouvindo outras pessoas.",
  },
  {
    icon: Fish,
    name: "Boto",
    desc: "Tende a precisar transformar teoria em aplicação concreta.",
  },
  {
    icon: Flame,
    name: "Boitatá",
    desc: "Tende a ter boa concentração quando possui metas claras e ambiente estruturado.",
  },
  {
    icon: Sparkles,
    name: "Cuca",
    desc: "Tende a aprender conectando ideias, imagens, histórias e exemplos.",
  },
  {
    icon: Bird,
    name: "Uirapuru",
    desc: "Tende a evoluir com repetição, rotina e acompanhamento consistente.",
  },
];

const learningMap = [
  ["Planejamento", 82],
  ["Metacognição", 74],
  ["Gestão do tempo", 68],
  ["Busca de ajuda", 63],
  ["Aprendizagem ativa", 79],
  ["Revisão estratégica", 71],
  ["Motivação e consistência", 76],
] as const;

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-accent/70">
      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green" />
      <span>{children}</span>
    </li>
  );
}

export default function DiagnosticoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(234,88,12,0.12),transparent_32%),linear-gradient(135deg,#f6f8f6_0%,#ffffff_46%,#eef7f2_100%)]">
        <div className="absolute right-0 top-12 hidden h-72 w-72 rounded-full bg-green/10 blur-3xl lg:block" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:py-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white/80 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent shadow-sm">
              <ShieldCheck className="h-4 w-4 text-green" />
              Diagnóstico de Aprendizagem Edukacuca
            </span>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-black tracking-tight text-accent sm:text-6xl">
              Descubra seu estilo de aprendizagem
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent/75 sm:text-xl">
              Entenda como você aprende, quais estratégias combinam mais com seu jeito de estudar e receba recomendações práticas para melhorar sua rotina.
            </p>
            <p className="mt-5 max-w-2xl rounded-2xl border border-accent/10 bg-white/70 p-5 text-sm leading-relaxed text-accent/65 shadow-sm">
              Este diagnóstico tem finalidade educativa. Os estilos apresentados ajudam a explicar os construtos avaliados pelo teste, sem intenção de rotular, classificar definitivamente ou substituir avaliações pedagógicas especializadas.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/diagnostico/captura"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/15 bg-white px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-accent shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent/5"
              >
                Fazer diagnóstico gratuito
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/diagnostico/completo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold/90"
              >
                Conhecer diagnóstico completo
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-accent/10 bg-white/80 p-5 shadow-2xl shadow-accent/10 backdrop-blur">
            <div className="rounded-[1.5rem] bg-accent p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-white/55">Mapa educativo</p>
                  <h2 className="mt-2 font-heading text-2xl font-bold">Hábitos de estudo em foco</h2>
                </div>
                <Sparkles className="h-10 w-10 text-gold" />
              </div>
              <div className="mt-8 space-y-4">
                {learningMap.map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex justify-between text-sm text-white/75">
                      <span>{label}</span>
                      <span>{value}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10">
                      <div
                        className="h-3 rounded-full bg-gradient-to-r from-gold to-sky"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-green">estilos de aprendizagem</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Estilos de aprendizagem</h2>
            <p className="mt-4 leading-relaxed text-accent/65">
              Esses estilos ajudam a explicitar os construtos do diagnóstico de forma simples e educativa. Eles não são rótulos fixos, mas caminhos para entender tendências, dificuldades e potências na forma de aprender.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {profiles.map((profile) => (
              <div key={profile.name} className="group rounded-3xl border border-accent/10 bg-cream p-6 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:shadow-accent/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gold shadow-sm group-hover:bg-gold group-hover:text-white">
                  <profile.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-accent">{profile.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-accent/65">{profile.desc}</p>
                <button className="mt-5 font-heading text-xs font-bold uppercase tracking-wider text-green">ver mais</button>
              </div>
            ))}
          </div>
          <div className="mt-14 rounded-[2rem] bg-accent p-8 text-center text-white sm:p-10">
            <h3 className="font-heading text-2xl font-bold">Quer descobrir qual estilo de aprendizagem mais combina com você?</h3>
            <Link href="/diagnostico/captura" className="mt-6 inline-flex rounded-full bg-gold px-7 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-gold/90">
              Fazer diagnóstico gratuito
            </Link>
          </div>
        </div>
      </section>

      <section id="diagnostico-completo" className="bg-cream py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">gratuito vs completo</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Escolha a profundidade da sua devolutiva</h2>
            <p className="mt-4 leading-relaxed text-accent/65">
              O gratuito entrega uma leitura inicial útil. O completo aprofunda a interpretação com devolutiva personalizada por WhatsApp.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="flex min-h-[540px] flex-col rounded-[1.75rem] border border-accent/10 bg-white p-8 shadow-sm">
              <div>
                <h3 className="font-heading text-2xl font-bold text-accent">Diagnóstico gratuito</h3>
                <p className="mt-3 min-h-[84px] leading-relaxed text-accent/65">
                  Ideal para quem quer entender rapidamente seu estilo de aprendizagem e receber recomendações iniciais para estudar melhor.
                </p>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {freeItems.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
              <div className="mt-8 rounded-3xl border border-accent/10 bg-cream px-5 py-4">
                <p className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.22em] text-accent/45">Acesso inicial</p>
                <div className="mt-1 flex items-end gap-2 text-accent">
                  <span className="font-heading text-4xl font-black tracking-tight">Gratuito</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-accent/55">Resultado resumido e recomendações gerais com acesso imediato.</p>
              </div>
              <Link href="/diagnostico/captura" className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-accent-dark">
                Começar gratuitamente
              </Link>
            </div>
            <div className="relative flex min-h-[540px] flex-col rounded-[1.75rem] border-2 border-gold/50 bg-white p-8 shadow-xl shadow-gold/10">
              <span className="absolute right-6 top-6 rounded-full bg-gold/10 px-3 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-wider text-gold">
                Mais completo
              </span>
              <div>
                <h3 className="pr-32 font-heading text-2xl font-bold text-accent">Diagnóstico completo</h3>
                <p className="mt-3 min-h-[84px] leading-relaxed text-accent/65">
                  Para quem quer uma leitura mais detalhada, com avaliação personalizada e orientação individual por WhatsApp.
                </p>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {paidItems.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
              </ul>
              <div className="mt-8 rounded-3xl border border-gold/20 bg-gold/5 px-5 py-4">
                <p className="font-heading text-[0.65rem] font-bold uppercase tracking-[0.22em] text-gold">Pagamento único</p>
                <div className="mt-1 flex items-end gap-2 text-accent">
                  <span className="font-heading text-sm font-bold leading-8">R$</span>
                  <span className="font-heading text-4xl font-black tracking-tight">49,90</span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-accent/55">Devolutiva personalizada por WhatsApp em até 48h úteis.</p>
              </div>
              <Link href="/diagnostico/completo" className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-gold/90">
                Quero minha devolutiva completa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

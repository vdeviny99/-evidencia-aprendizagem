import { ArrowRight, CheckCircle, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LearningLandscape } from "@/components/LearningLandscape";
import { learningGuides } from "@/lib/learningJourney";
import explorerStyles from "@/components/LearningStyleExplorer.module.css";
import LearningStyleExplorer from "@/components/LearningStyleExplorer";

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
            <div className="mt-5 max-w-3xl rounded-2xl border border-accent/10 bg-white/70 p-5 text-sm leading-7 text-accent/65 shadow-sm sm:p-6">
              <p className="text-pretty">
                Este diagnóstico tem finalidade educativa. Os estilos apresentados ajudam a explicar os construtos avaliados pelo teste.
              </p>
              <p className="mt-2 text-pretty">
                Ele não tem intenção de rotular, classificar definitivamente ou substituir avaliações pedagógicas especializadas.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/diagnostico/captura"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/15 bg-white px-7 py-3.5 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-accent shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent/5 sm:w-auto"
              >
                Fazer diagnóstico gratuito
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/diagnostico/completo"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto"
              >
                Conhecer diagnóstico completo
              </Link>
            </div>
          </div>
          <div className={explorerStyles.heroCard}>
            <div className={explorerStyles.heroArt} aria-hidden="true">
              <LearningLandscape guide={learningGuides[0]} moving={false} />
              <div className={explorerStyles.heroCharacters}>
                {learningGuides.map((guide) => <Image key={guide.id} src={`/para/personagens/${guide.id}.png`} width={100} height={100} sizes="(max-width: 640px) 64px, 80px" alt="" />)}
              </div>
              <span className={explorerStyles.heroCaption}>Personagens da nossa jornada</span>
            </div>
            <div className="bg-accent p-6 text-white sm:p-8">
              <Sparkles className="h-7 w-7 text-gold" aria-hidden="true" />
              <p className="mt-5 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/75">Um convite à descoberta</p>
              <h2 className="mt-3 font-heading text-3xl font-bold">Oito personagens. Muitos caminhos para aprender.</h2>
              <p className="mt-5 leading-7 text-white/85">Passeie pelos estilos, conheça suas histórias e encontre ideias para observar sua rotina de estudo.</p>
              <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-4 text-sm leading-6 text-white/85">Este passeio não é um resultado. Seu estilo não está predeterminado: o diagnóstico considera suas respostas.</div>
              <Link href="#explorar-estilos" className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 font-heading text-sm font-bold text-accent outline-offset-4 focus-visible:outline-2 focus-visible:outline-white">
                Explorar os estilos <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LearningStyleExplorer />

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
              <Link href="/diagnostico/captura" className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-center font-heading text-xs font-bold uppercase leading-snug tracking-wider text-white transition-colors hover:bg-accent-dark">
                Começar gratuitamente
              </Link>
            </div>
            <div className="relative flex min-h-[540px] flex-col rounded-[1.75rem] border-2 border-gold/50 bg-white p-8 shadow-xl shadow-gold/10">
              <span className="mb-4 w-fit rounded-full bg-gold/10 px-3 py-1 font-heading text-[0.65rem] font-bold uppercase tracking-wider text-gold sm:absolute sm:right-6 sm:top-6 sm:mb-0">
                Mais completo
              </span>
              <div>
                <h3 className="font-heading text-2xl font-bold text-accent sm:pr-32">Diagnóstico completo</h3>
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
              <Link href="/diagnostico/completo" className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 text-center font-heading text-xs font-bold uppercase leading-snug tracking-wider text-white transition-colors hover:bg-gold/90">
                Quero minha devolutiva completa
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

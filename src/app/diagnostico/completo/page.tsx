import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Clock3,
  FileText,
  MessageCircle,
  QrCode,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const whatsappUrl = "https://wa.me/5511926599367?text=Ol%C3%A1%21%20Fiz%20o%20pagamento%20do%20Diagn%C3%B3stico%20Completo%20Edukacuca%20e%20quero%20enviar%20meu%20comprovante.";
const paymentUrl = "https://nubank.com.br/cobrar/24uy8/6ac11730-9fa4-4be2-b4a1-6f0156250fd1";
const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(paymentUrl)}`;
const pixKey = "+55 11 92659-9367";

const included = [
  "Interpretação individual do seu estilo de aprendizagem",
  "Leitura dos 7 construtos do diagnóstico",
  "Pontos fortes e pontos de atenção",
  "Recomendações específicas para sua rotina de estudos",
  "Devolutiva personalizada por WhatsApp",
  "Resumo em PDF com próximos passos",
];

const steps = [
  [QrCode, "Faça o Pix", "Use a chave Pix ou o QR code desta página para realizar o pagamento."],
  [MessageCircle, "Envie o comprovante", "Depois do pagamento, mande o comprovante pelo WhatsApp da Edukacuca."],
  [FileText, "Preencha o diagnóstico", "Responda perguntas abertas e o diagnóstico para obter análise completa."],
  [Clock3, "Receba em até 48h", "A devolutiva personalizada é enviada pelo WhatsApp em até 48 horas úteis."],
] as const;

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-accent/70">
      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green" />
      <span>{children}</span>
    </li>
  );
}

export default function DiagnosticoCompletoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.14),transparent_30%),linear-gradient(135deg,#f6f8f6_0%,#ffffff_48%,#eef7f2_100%)] py-16 sm:py-24">
        <div className="absolute left-0 top-16 hidden h-72 w-72 rounded-full bg-green/10 blur-3xl lg:block" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_0.88fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white/80 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent shadow-sm">
              <ShieldCheck className="h-4 w-4 text-green" />
              Diagnóstico completo Edukacuca
            </span>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-black tracking-tight text-accent sm:text-6xl">
              Receba uma análise personalizada do seu estilo de aprendizagem
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent/75 sm:text-xl">
              Uma devolutiva individual por WhatsApp, com interpretação do seu resultado, recomendações específicas e próximos passos para estudar melhor.
            </p>
            <p className="mt-5 max-w-2xl rounded-2xl border border-accent/10 bg-white/70 p-5 text-sm leading-relaxed text-accent/65 shadow-sm">
              Este material tem finalidade educativa. Ele ajuda a entender tendências de aprendizagem a partir das suas respostas, sem funcionar como diagnóstico clínico, psicológico ou definitivo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#pagamento" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white shadow-lg shadow-gold/25 transition-all hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto">
                Quero minha devolutiva completa
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/diagnostico" className="inline-flex w-full items-center justify-center rounded-full border border-accent/15 bg-white px-7 py-3.5 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-accent shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent/5 sm:w-auto">
                Ver diagnóstico gratuito
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-accent/10 bg-white p-6 shadow-2xl shadow-accent/10">
            <Sparkles className="h-10 w-10 text-gold" />
            <h2 className="mt-4 font-heading text-2xl font-bold text-accent">O que está incluso</h2>
            <ul className="mt-6 space-y-3">
              {included.map((item) => <CheckItem key={item}>{item}</CheckItem>)}
            </ul>
            <div className="mt-8 rounded-3xl bg-accent p-6 text-white">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/55">Entrega</p>
              <p className="mt-2 text-3xl font-black">até 48h úteis</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">Após confirmação do pagamento e envio das respostas do diagnóstico.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-green">como funciona</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Um processo simples, com devolutiva humana</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl border border-accent/10 bg-cream p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-gold shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-accent">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-accent/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pagamento" className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">pagamento via pix</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Para contratar, faça o Pix e envie o comprovante</h2>
            <p className="mt-4 leading-relaxed text-accent/70">
              Depois de enviar o comprovante pelo WhatsApp, você recebe as orientações para concluir o diagnóstico. A devolutiva completa é preparada individualmente e enviada em até 48 horas úteis.
            </p>
            <div className="mt-6 rounded-3xl border border-accent/10 bg-white p-6 shadow-sm">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent/50">valor</p>
              <p className="mt-2 font-heading text-4xl font-black text-accent">R$ 49,90</p>
              <p className="mt-2 text-sm leading-relaxed text-accent/60">Pagamento único para receber sua devolutiva personalizada por WhatsApp.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-accent/10 bg-white p-6 shadow-xl shadow-accent/5 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-[220px_1fr] sm:items-center">
              <div className="rounded-3xl border border-accent/10 bg-cream p-4 text-center">
                <img src={qrCodeUrl} alt="QR Code para pagar o Diagnóstico Completo Edukacuca" className="mx-auto aspect-square w-full max-w-[220px] rounded-2xl bg-white p-3 shadow-sm" />
                <p className="mt-4 font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent/50">QR Code da cobrança</p>
                <p className="mt-2 text-xs leading-relaxed text-accent/55">Escaneie para abrir a cobrança de R$ 49,90 no Nubank.</p>
              </div>
              <div>
                <p className="font-heading text-xs font-bold uppercase tracking-[0.22em] text-accent/50">Chave Pix</p>
                <div className="mt-3 rounded-2xl bg-cream px-4 py-4 font-mono text-sm text-accent">
                  {pixKey}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-accent/65">
                  Após pagar, envie o comprovante pelo WhatsApp para liberar sua devolutiva completa.
                </p>
                <a href={paymentUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold/90">
                  <QrCode className="h-4 w-4" />
                  Pagar R$ 49,90 pelo Nubank
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/15 px-7 py-3 text-center font-heading text-xs font-bold uppercase leading-snug tracking-wider text-accent transition-colors hover:bg-accent/5">
                  <MessageCircle className="h-4 w-4" />
                  Enviar comprovante no WhatsApp
                </a>
                <Link href="/diagnostico/completo/captura" className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-accent/15 px-7 py-3 text-center font-heading text-xs font-bold uppercase leading-snug tracking-wider text-accent transition-colors hover:bg-accent/5">
                  Já paguei, começar diagnóstico
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <BarChart3 className="mx-auto h-10 w-10 text-gold" />
          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl">Quer transformar seu resultado em próximos passos?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">
            O diagnóstico completo aprofunda seu mapa de aprendizagem e traduz o resultado em recomendações práticas para sua rotina.
          </p>
          <a href="#pagamento" className="mt-8 inline-flex rounded-full bg-gold px-8 py-4 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white transition-colors hover:bg-gold/90">
            Fazer pagamento via Pix
          </a>
        </div>
      </section>
    </>
  );
}

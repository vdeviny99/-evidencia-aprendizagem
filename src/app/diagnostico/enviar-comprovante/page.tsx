import { ArrowRight, CheckCircle, Clock3, FileText, MessageCircle } from "lucide-react";
import Link from "next/link";

const whatsappUrl = "https://wa.me/5511926599367?text=Ol%C3%A1%21%20Conclu%C3%AD%20o%20diagn%C3%B3stico%20da%20EdukaCuca%20e%20quero%20enviar%20meu%20comprovante.";

export default function EnviarComprovantePage() {
  return (
    <section className="bg-[linear-gradient(135deg,#f6f8f6_0%,#ffffff_55%,#eef7f2_100%)] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-[2.5rem] border border-accent/10 bg-white p-8 text-center shadow-2xl shadow-accent/10 sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green/10 text-green">
            <CheckCircle className="h-8 w-8" />
          </div>
          <span className="mt-6 inline-flex rounded-full bg-gold/10 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-gold">
            diagnóstico concluído
          </span>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance font-heading text-4xl font-bold tracking-tight text-accent sm:text-5xl">
            Agora envie o comprovante pelo WhatsApp
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-accent/70">
            Depois que você enviar o comprovante, eu preparo sua análise detalhada e envio a devolutiva em até 2 dias úteis.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            <div className="rounded-3xl bg-cream p-5">
              <FileText className="h-7 w-7 text-gold" />
              <h2 className="mt-4 font-heading text-lg font-bold text-accent">1. Separe o comprovante</h2>
              <p className="mt-2 text-sm leading-relaxed text-accent/65">Use o comprovante do pagamento do diagnóstico completo.</p>
            </div>
            <div className="rounded-3xl bg-cream p-5">
              <MessageCircle className="h-7 w-7 text-gold" />
              <h2 className="mt-4 font-heading text-lg font-bold text-accent">2. Envie pelo WhatsApp</h2>
              <p className="mt-2 text-sm leading-relaxed text-accent/65">Mande o comprovante e avise que você já concluiu o diagnóstico.</p>
            </div>
            <div className="rounded-3xl bg-cream p-5">
              <Clock3 className="h-7 w-7 text-gold" />
              <h2 className="mt-4 font-heading text-lg font-bold text-accent">3. Aguarde a análise</h2>
              <p className="mt-2 text-sm leading-relaxed text-accent/65">A devolutiva detalhada será enviada em até 2 dias úteis.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold/90 sm:w-auto">
              Enviar comprovante
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/diagnostico/completo" className="inline-flex w-full items-center justify-center rounded-full border border-accent/15 px-8 py-4 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-accent transition-colors hover:bg-accent/5 sm:w-auto">
              Ver instruções de pagamento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

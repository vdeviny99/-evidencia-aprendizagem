import { ArrowRight, LockKeyhole, Mail, MessageCircle, UserRound } from "lucide-react";

const goals = ["Escola", "Vestibular", "ENEM", "Reforço", "Organização dos estudos", "Outro"];

export default function CapturaDiagnostico() {
  return (
    <section className="bg-[linear-gradient(135deg,#f6f8f6_0%,#ffffff_55%,#eef7f2_100%)] py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <span className="inline-flex rounded-full bg-gold/10 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-gold">
            diagnóstico gratuito
          </span>
          <h1 className="mt-5 font-heading text-4xl font-black tracking-tight text-accent sm:text-5xl">
            Antes de começar, para onde enviamos seu resultado?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-accent/70">
            Preencha seus dados para acessar o diagnóstico gratuito e receber sua devolutiva ao final do teste.
          </p>
          <div className="mt-8 space-y-4 rounded-3xl border border-accent/10 bg-white p-6 shadow-sm">
            <div className="flex gap-3 text-sm text-accent/70">
              <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-green" />
              <span>Seus dados serão usados para gerar seu resultado, melhorar nossas recomendações e enviar conteúdos relacionados ao seu estilo de aprendizagem.</span>
            </div>
            <div className="flex gap-3 text-sm text-accent/70">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-green" />
              <span>Você poderá revisar seu resultado e seguir para a versão completa se quiser uma leitura individual.</span>
            </div>
          </div>
        </div>

        <form action="/diagnostico/teste" className="rounded-[2rem] border border-accent/10 bg-white p-6 shadow-xl shadow-accent/5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Nome</span>
              <input name="nome" required className="mt-2 w-full rounded-2xl border border-accent/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" placeholder="Seu nome" />
            </label>
            <label className="block">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-accent/60">E-mail</span>
              <input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-accent/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" placeholder="voce@email.com" />
            </label>
            <label className="block">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-accent/60">WhatsApp</span>
              <input name="whatsapp" required className="mt-2 w-full rounded-2xl border border-accent/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" placeholder="(11) 99999-9999" />
            </label>
            <label className="block sm:col-span-2">
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Série/ano escolar ou fase de estudo</span>
              <input name="fase" required className="mt-2 w-full rounded-2xl border border-accent/15 bg-cream px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20" placeholder="Ex.: 2º ano, vestibular, faculdade..." />
            </label>
          </div>

          <div className="mt-6">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-accent/60">Objetivo principal</span>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {goals.map((goal) => (
                <label key={goal} className="flex cursor-pointer items-center gap-2 rounded-2xl border border-accent/10 bg-cream px-4 py-3 text-sm text-accent/70 transition hover:border-gold/50 hover:bg-gold/5">
                  <input type="radio" name="goal" value={goal} required className="accent-gold" />
                  {goal}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3 rounded-3xl bg-cream p-5">
            <label className="flex gap-3 text-sm leading-relaxed text-accent/75">
              <input type="checkbox" required className="mt-1 accent-gold" />
              <span>Aceito os Termos de Uso e a Política de Privacidade.</span>
            </label>
            <label className="flex gap-3 text-sm leading-relaxed text-accent/75">
              <input type="checkbox" className="mt-1 accent-gold" />
              <span>Autorizo o uso das minhas respostas para fins de melhoria do diagnóstico e produção de dados educacionais, de forma responsável.</span>
            </label>
            <label className="flex gap-3 text-sm leading-relaxed text-accent/75">
              <input type="checkbox" className="mt-1 accent-gold" />
              <span>Quero receber conteúdos, recomendações e atualizações por e-mail e WhatsApp.</span>
            </label>
          </div>

          <button type="submit" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:bg-gold/90">
            <UserRound className="h-4 w-4" />
            Começar diagnóstico
            <ArrowRight className="h-4 w-4" />
          </button>
          <a href="https://wa.me/5511926599367" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/15 px-7 py-3 font-heading text-xs font-bold uppercase tracking-wider text-accent transition-colors hover:bg-accent/5">
            <MessageCircle className="h-4 w-4" />
            Tirar dúvida pelo WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { ArrowRight, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a EdukaCuca para tirar dúvidas sobre diagnóstico, aulas, cursos e mentorias.",
};

const topics = ["Diagnóstico gratuito", "Aulas de inglês ou francês", "Cursos e mentorias", "Palestras e parcerias"];

export default function ContatoPage() {
  return (
    <>
      <section className="bg-accent text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              <Sparkles className="h-4 w-4 text-gold" />
              Contato
            </span>
            <h1 className="mt-7 font-heading text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl">
              Vamos encontrar o melhor caminho para você aprender melhor
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Tire dúvidas sobre diagnóstico, aulas, cursos, mentorias ou parcerias. Se preferir, fale direto pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/5511926599367" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-all hover:-translate-y-0.5 hover:bg-gold/90">
                Falar pelo WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:almeida.jv2019@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10">
                Enviar e-mail
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/15 sm:rounded-[2.5rem] sm:p-7">
            <div className="rounded-[1.7rem] bg-white p-6 text-accent">
              <MessageCircle className="h-9 w-9 text-gold" />
              <h2 className="mt-5 font-heading text-2xl font-bold">Como podemos ajudar?</h2>
              <p className="mt-3 leading-relaxed text-accent/65">
                Conte rapidamente o que você procura. Assim fica mais fácil indicar o próximo passo.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {topics.map((topic) => (
                  <div key={topic} className="rounded-2xl bg-cream px-4 py-3 font-heading text-sm font-bold text-accent/75">
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.25em] text-gold">mensagem</span>
            <h2 className="mt-4 font-heading text-3xl font-bold leading-tight tracking-[-0.03em] text-accent sm:text-4xl">
              Envie sua dúvida ou pedido
            </h2>
            <p className="mt-5 leading-relaxed text-accent/65">
              Use o formulário para explicar sua necessidade. Respondemos assim que possível com uma orientação objetiva.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-3 rounded-3xl border border-accent/10 bg-white p-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-heading text-sm font-bold text-accent">E-mail</p>
                  <p className="mt-1 break-all text-sm text-accent/60">almeida.jv2019@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-3xl border border-accent/10 bg-white p-5">
                <Send className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-heading text-sm font-bold text-accent">Resposta</p>
                  <p className="mt-1 text-sm text-accent/60">Normalmente respondemos pelo canal informado na mensagem.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-accent/10 bg-white p-6 shadow-xl shadow-accent/5 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

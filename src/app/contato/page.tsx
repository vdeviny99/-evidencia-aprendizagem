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
      <section className="relative overflow-hidden bg-cream text-accent">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 py-16 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 border-l-2 border-gold pl-3 py-1 font-heading text-xs font-bold uppercase tracking-[0.16em] text-green">
              <Sparkles className="h-4 w-4 text-gold" />
              Contato
            </span>
            <h1 className="mt-7 font-serif text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl">
              Vamos encontrar o melhor caminho para você aprender melhor
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent/70">
              Tire dúvidas sobre diagnóstico, aulas, cursos, mentorias ou parcerias. Se preferir, fale direto pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/5511926599367" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-white transition-colors hover:bg-gold/90 sm:w-auto">
                Falar pelo WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="mailto:almeida.jv2019@gmail.com" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-accent/20 px-7 py-3.5 text-center font-heading text-sm font-bold uppercase leading-snug tracking-wider text-accent transition-colors hover:bg-white sm:w-auto">
                Enviar e-mail
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-green/15 bg-white p-2 sm:p-3">
            <div className="rounded-xl bg-white p-6 text-accent">
              <MessageCircle className="h-9 w-9 text-gold" />
              <h2 className="mt-5 font-serif text-2xl font-medium leading-tight">Como podemos ajudar?</h2>
              <p className="mt-3 leading-relaxed text-accent/70">
                Conte rapidamente o que você procura. Assim fica mais fácil indicar o próximo passo.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {topics.map((topic) => (
                  <div key={topic} className="border-t border-accent/10 py-3 font-heading text-sm font-bold text-accent/75">
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-accent/10 bg-white py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <span className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-gold">mensagem</span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight tracking-[-0.03em] text-accent sm:text-4xl">
              Envie sua dúvida ou pedido
            </h2>
            <p className="mt-5 leading-relaxed text-accent/70">
              Use o formulário para explicar sua necessidade. Respondemos assim que possível com uma orientação objetiva.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex gap-3 rounded-xl border border-accent/10 bg-white p-5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-heading text-sm font-bold text-accent">E-mail</p>
                  <p className="mt-1 break-all text-sm text-accent/70">almeida.jv2019@gmail.com</p>
                </div>
              </div>
              <div className="flex gap-3 rounded-xl border border-accent/10 bg-white p-5">
                <Send className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="font-heading text-sm font-bold text-accent">Resposta</p>
                  <p className="mt-1 text-sm text-accent/70">Normalmente respondemos pelo canal informado na mensagem.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-accent/15 bg-cream p-5 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

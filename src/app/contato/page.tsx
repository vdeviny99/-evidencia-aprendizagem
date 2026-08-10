import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a equipe EdukaCuca.",
};

export default function ContatoPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-accent/5 to-cream pb-16 pt-12 sm:pt-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent">
              Contato
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold text-accent sm:text-4xl">
              Fale Conosco
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-accent/60">
              Tem uma sugestão, crítica ou quer colaborar? Mande sua mensagem.
            </p>
          </div>

          <div className="rounded-xl bg-card p-8 shadow-sm sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setStatus("idle");

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          subject: form.get("subject"),
          message: form.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <CheckCircle className="h-12 w-12 text-green-600" />
        <h3 className="mt-4 font-heading text-lg font-bold text-accent">
          Mensagem enviada!
        </h3>
        <p className="mt-2 text-sm text-accent/60">
          Agradecemos seu contato. Responderemos em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60"
          >
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Seu nome"
            className="mt-2 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="seu@email.com"
            className="mt-2 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60"
        >
          Assunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="Assunto da mensagem"
          className="mt-2 w-full rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-heading text-xs font-bold uppercase tracking-wider text-accent/60"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Sua mensagem..."
          className="mt-2 w-full resize-y rounded-lg border border-accent/20 bg-cream px-4 py-3 text-sm text-accent outline-none placeholder:text-accent/30 focus:border-accent/40 focus:ring-1 focus:ring-accent/20"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Erro ao enviar mensagem. Tente novamente.
        </div>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3 font-heading text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-accent-dark disabled:opacity-50"
      >
        {sending ? "Enviando..." : "Enviar Mensagem"}
        <Send className="h-3 w-3" />
      </button>
    </form>
  );
}

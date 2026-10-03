"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/diagnostico", label: "Diagnóstico" },
  { href: "/artigos", label: "Blog" },
  { href: "/cursos", label: "Cursos" },
  { href: "/aulas", label: "Aulas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

const whatsapp = "https://wa.me/5511926599367";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-accent/95 shadow-[0_8px_28px_rgba(15,39,31,0.18)] backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-full pr-3 transition-transform hover:-translate-y-0.5"
        >
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-white/25">
            <Image
              src="/images/eduka3.jpeg"
              alt="EdukaCuca"
              width={96}
              height={96}
              className="h-full w-full object-contain"
              priority
            />
          </span>
          <span className="text-xl font-extrabold tracking-[-0.035em] text-white antialiased">
            EdukaCuca
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white/78 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-gold/70 hover:bg-gold/15 hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/80 hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-slide-down border-t border-white/10 bg-accent-dark px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wider text-white/80 hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full border border-white/20 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white/90 transition-colors hover:border-gold hover:bg-gold/10 hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar
          </a>
        </nav>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import { Menu, X, BookOpen, MessageCircle } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/diagnostico/aplicar", label: "Diagnóstico" },
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
    <header className="sticky top-0 z-50 w-full bg-accent shadow-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-wide text-white"
        >
          <BookOpen className="h-5 w-5 text-gold" />
          EdukaCuca
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-xs font-bold uppercase tracking-wider text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white/90 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-white/80 hover:bg-white/10"
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

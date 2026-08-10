import Link from "next/link";
import { BookOpen, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-10 sm:grid-cols-4">
          <div className="sm:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-gold" />
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
                EdukaCuca
              </h3>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Aprender a aprender com ciência, prática e criatividade. Traduzindo
              pesquisa acadêmica em prática.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
              Conteúdo
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/artigos"
                  className="text-sm text-zinc-400 transition-colors hover:text-gold"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/cursos"
                  className="text-sm text-zinc-400 transition-colors hover:text-gold"
                >
                  Cursos
                </Link>
              </li>
              <li>
                <Link
                  href="/aulas"
                  className="text-sm text-zinc-400 transition-colors hover:text-gold"
                >
                  Aulas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
              Sobre
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-zinc-400 transition-colors hover:text-gold"
                >
                  Sobre
                </Link>
              </li>

              <li>
                <Link
                  href="/contato"
                  className="text-sm text-zinc-400 transition-colors hover:text-gold"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-gold">
              Contato
            </h3>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href="https://wa.me/5511926599367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>(11) 92659-9367</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:almeida.jv2019@gmail.com"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>almeida.jv2019@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-center text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} EdukaCuca. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}

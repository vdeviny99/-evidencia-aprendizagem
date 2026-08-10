import Image from "next/image";

export function AuthorCard() {
  return (
    <div className="flex items-start gap-5 rounded-xl bg-card p-6 shadow-sm sm:p-8">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/10 sm:h-24 sm:w-24">
        <Image
          src="/images/fotovini2.jpeg"
          alt="José Vinicius"
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>
      <div>
        <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
          José Vinicius
        </h3>
        <p className="mt-1 text-xs text-accent/50">
          Founder, EdukaCuca
        </p>
        <p className="mt-2 text-sm leading-relaxed text-accent/70">
          Pesquisador e educador apaixonado por traduzir ciência da aprendizagem
          em prática. Acredita que conhecimento sobre como aprendemos não deveria
          estar trancado em laboratórios.
        </p>
      </div>
    </div>
  );
}

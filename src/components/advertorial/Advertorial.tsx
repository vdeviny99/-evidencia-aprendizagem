import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5511926599367";

export function wa(text: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export type Arte = "caderno" | "noite" | "anil";

export function Advertorial({ arte, children }: { arte: Arte; children: React.ReactNode }) {
  return (
    <div className="adv" data-arte={arte}>
      {children}
    </div>
  );
}

export function Masthead({
  kicker,
  title,
  dek,
  readMinutes,
  art,
}: {
  kicker: string;
  title: React.ReactNode;
  dek: string;
  readMinutes: number;
  art?: React.ReactNode;
}) {
  return (
    <header className="adv-masthead">
      <div className="adv-masthead__text">
        <p className="adv-kicker">{kicker}</p>
        <h1 className="adv-title">{title}</h1>
        <p className="adv-dek">{dek}</p>
        <div className="adv-byline">
          <span className="adv-byline__photo">
            <Image src="/images/fotovini2.jpeg" alt="José Vinicius" fill sizes="48px" className="object-cover" />
          </span>
          <span>
            <strong>Por José Vinicius</strong>
            <span className="adv-byline__meta">
              Professor e fundador da EdukaCuca · outubro de 2026 · leitura de {readMinutes} min
            </span>
          </span>
        </div>
      </div>
      {art ? <div className="adv-masthead__art">{art}</div> : null}
    </header>
  );
}

export function Body({ children }: { children: React.ReactNode }) {
  return <article className="adv-body">{children}</article>;
}

export function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section className="adv-section" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function Pull({ children, by }: { children: React.ReactNode; by?: string }) {
  return (
    <figure className="adv-pull">
      <blockquote>{children}</blockquote>
      {by ? <figcaption>{by}</figcaption> : null}
    </figure>
  );
}

export function Callout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <aside className="adv-callout">
      <p className="adv-callout__label">{label}</p>
      <div>{children}</div>
    </aside>
  );
}

export function Cards({ items }: { items: { icon: LucideIcon; title: string; text: string }[] }) {
  return (
    <ul className="adv-cards">
      {items.map(({ icon: Icon, title, text }) => (
        <li key={title} className="adv-card">
          <span className="adv-card__icon" aria-hidden="true">
            <Icon className="h-5 w-5" />
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className="adv-steps">
      {items.map((item, i) => (
        <li key={item.title}>
          <span className="adv-steps__n">{i + 1}</span>
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

const SLUG: Record<string, string> = {
  Cuca: "cuca", Saci: "saci", Curupira: "curupira", Boitatá: "boitata",
  Caipora: "caipora", Iara: "iara", Boto: "boto", Uirapuru: "uirapuru",
};

export function Medallion({ name, size = 120, tilt = 0 }: { name: string; size?: number; tilt?: number }) {
  return (
    <Image
      src={`/para/personagens/${SLUG[name]}.png`}
      alt={name}
      width={size}
      height={size}
      className="adv-medallion"
      style={{ transform: `rotate(${tilt}deg)` }}
    />
  );
}

export function Cast({ caption }: { caption: string }) {
  const names = Object.keys(SLUG);
  return (
    <figure className="adv-cast">
      <ul>
        {names.map((n, i) => (
          <li key={n}>
            <Medallion name={n} size={96} tilt={i % 2 ? 4 : -4} />
            <span>{n}</span>
          </li>
        ))}
      </ul>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function Stamp() {
  return (
    <Image
      src="/para/artes/carimbo-tipo-fixo.png"
      alt="Carimbo: você não é um tipo fixo."
      width={410}
      height={125}
      className="adv-stamp"
    />
  );
}

export function Reel({ n, caption }: { n: number; caption: string }) {
  return (
    <figure className="adv-reel">
      <video
        controls
        playsInline
        preload="none"
        poster={`/para/videos/habito-${n}.jpg`}
        src={`/para/videos/habito-${n}.mp4`}
        aria-label={caption}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export type OfferItem = {
  title: string;
  price: string;
  priceNote: string;
  bullets: string[];
  cta: { href: string; label: string };
  featured?: boolean;
};

export function Offer({ title, intro, items }: { title: string; intro: string; items: OfferItem[] }) {
  return (
    <section className="adv-offer" id="como-comecar">
      <div className="adv-offer__head">
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>
      <ul className="adv-offer__grid">
        {items.map((it) => (
          <li key={it.title} className={it.featured ? "adv-plan is-featured" : "adv-plan"}>
            <h3>{it.title}</h3>
            <p className="adv-plan__price">
              {it.price}
              <span>{it.priceNote}</span>
            </p>
            <ul>
              {it.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              href={it.cta.href}
              className={it.featured ? "adv-btn" : "adv-btn adv-btn--ghost"}
              {...(it.cta.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {it.cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CtaBand({
  title,
  text,
  primary,
  secondary,
}: {
  title: string;
  text: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  const ext = (href: string) => (href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {});
  return (
    <aside className="adv-ctaband">
      <div>
        <p className="adv-ctaband__title">{title}</p>
        <p>{text}</p>
      </div>
      <div className="adv-ctaband__actions">
        <a href={primary.href} className="adv-btn" {...ext(primary.href)}>
          {primary.href.includes("wa.me") ? <MessageCircle className="h-4 w-4" aria-hidden="true" /> : null}
          {primary.label}
        </a>
        {secondary ? (
          <a href={secondary.href} className="adv-btn adv-btn--ghost" {...ext(secondary.href)}>
            {secondary.label}
          </a>
        ) : null}
      </div>
    </aside>
  );
}

export function Faq({ items }: { items: { q: string; a: React.ReactNode }[] }) {
  return (
    <div className="adv-faq">
      {items.map((it) => (
        <details key={it.q}>
          <summary>{it.q}</summary>
          <div>{it.a}</div>
        </details>
      ))}
    </div>
  );
}

export function Author() {
  return (
    <aside className="adv-author">
      <span className="adv-author__photo">
        <Image src="/images/fotovini2.jpeg" alt="José Vinicius" fill sizes="96px" className="object-cover" />
      </span>
      <div>
        <p className="adv-author__name">Quem escreve</p>
        <p>
          <strong>José Vinicius</strong> dá aulas de inglês e francês há 7 anos, em aulas individuais, escolas e
          empresas, e estuda ciência da aprendizagem há 6. Já deu palestras sobre estratégias de estudo em
          universidades, escolas e empresas e participou de formação em neuropsicologia clínica com a
          vice-presidente da Sociedade Brasileira de Neuropsicologia. É o fundador da EdukaCuca.
        </p>
      </div>
    </aside>
  );
}

export function Refs({ items }: { items: string[] }) {
  return (
    <section className="adv-refs">
      <h2>Para ler a pesquisa</h2>
      <ol>
        {items.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ol>
    </section>
  );
}

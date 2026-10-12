import { EditorialPage, EditorialAccent } from "@/components/Editorial";
import editorial from "@/components/Editorial.module.css";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, GraduationCap, Languages, Microscope } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça José Vinicius, professor de idiomas e fundador do EdukaCuca.",
};

const highlights = [
  [Languages, "Idiomas", "7 anos ensinando inglês e francês em aulas individuais, escolas e empresas."],
  [Microscope, "Ciência da aprendizagem", "6 anos estudando estratégias de estudo, cognição e aprendizagem baseada em evidências."],
  [GraduationCap, "Formação e pesquisa", "Vivência em palestras, formação em neuropsicologia e contato com pesquisadores da área."],
] as const;

export default function SobrePage() {
  return (
    <EditorialPage>
      <section className={`${editorial.hero} py-16 sm:py-24`}>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto w-full max-w-[420px] lg:mx-0">
            <div className={`${editorial.portrait} relative aspect-[4/5] overflow-hidden bg-white`}>
              <Image
                src="/images/vinift.jpg"
                alt="José Vinicius, fundador do EdukaCuca"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 420px"
                priority
              />
            </div>
          </div>

          <div className="lg:pl-4">
            <span className={editorial.eyebrow}>
              Sobre o fundador
            </span>
            <h1 className="mt-6 max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-accent/95 sm:text-5xl">
              Educação, idiomas e ciência da aprendizagem no mesmo caminho
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-accent/68">
              Sou José Vinicius, professor de inglês e francês e fundador da EdukaCuca. Meu trabalho é ajudar pessoas a aprender melhor, com método, comunicação autêntica e autonomia.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/aulas" className={`${editorial.button}`}>
                Conhecer aulas
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/diagnostico" className={`${editorial.button} ${editorial.secondary}`}>
                Fazer diagnóstico
              </Link>
            </div>

            <div className="mt-10 grid gap-4">
                {highlights.map(([Icon, title, text]) => (
                  <div key={title} className={`${editorial.row} grid grid-cols-[1.5rem_1fr] gap-4 pt-4`}>
                    <Icon className="h-5 w-5 text-gold" />
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-accent/90">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-accent/75">{text}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${editorial.paper} py-16 sm:py-24`}>
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="py-2">
            <div className={editorial.ctaHeading}><span className={editorial.eyebrow}>trajetória</span><EditorialAccent /></div>
            <h2 className="mt-3 font-heading text-3xl font-bold text-accent sm:text-4xl">Da sala de aula à pesquisa sobre como aprendemos</h2>
            <p className="mt-4 leading-relaxed text-accent/68">
              A EdukaCuca nasceu da união entre prática de ensino e estudo profundo sobre aprendizagem. Gosto de seguir o seguinte lema, “A verdadeira arte de ensinar é mostrar que vale a pena aprender apesar de ser difícil”.
            </p>
          </div>

          <div className={editorial.biography}>
            <div className="space-y-5 text-accent/72">
              <p className="leading-relaxed">
                Sou professor particular de inglês e francês há 7 anos, com experiência em escolas, empresas e aulas individuais. Em paralelo ao ensino de idiomas, há 6 anos estudo como aprendemos e como podemos tornar esse processo mais eficaz.
              </p>
              <p className="leading-relaxed">
                Esse interesse me levou a ministrar palestras em universidades, escolas e empresas sobre aprendizagem e estratégias de estudo. Também participei de formação em neuropsicologia clínica com a vice-presidente da Sociedade Brasileira de Neuropsicologia e de pesquisas com professores e pesquisadores das áreas de psicologia e neurociências.
              </p>
              <p className="leading-relaxed">
                Meu trabalho integra conhecimentos da neurociência da aprendizagem, psicologia cognitiva, psicologia educacional e pedagogia. No ensino de idiomas, uso uma abordagem centrada no aluno, com comunicação autêntica e situações relacionadas às necessidades reais de quem aprende.
              </p>
            </div>
          </div>
        </div>
      </section>
    </EditorialPage>
  );
}

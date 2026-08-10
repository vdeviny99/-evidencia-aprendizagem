import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o José Vinicius — professor de inglês e fundador do EdukaCuca.",
};

export default function SobrePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-accent/5 to-cream pb-16 pt-12 sm:pt-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center animate-fade-in">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent">
              Sobre
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold text-accent sm:text-4xl">
              José Vinicius
            </h1>
          </div>

          <div className="grid items-start gap-10 sm:grid-cols-5">
            <div className="sm:col-span-2">
              <div className="sticky top-24">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl shadow-lg sm:mx-0">
                  <Image
                    src="/images/vinift.jpg"
                    alt="José Vinicius — Fundador do EdukaCuca"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
                <div className="mt-4 text-center sm:text-left">
                  <h2 className="font-heading text-lg font-bold text-accent">
                    José Vinicius
                  </h2>
                  <p className="text-sm text-accent/50">
                    Professor · Fundador do EdukaCuca
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="rounded-xl bg-card p-8 shadow-sm sm:p-10">
                <p className="leading-relaxed text-accent/80">
                  Sou professor particular de inglês e francês há 7 anos, com experiência em escolas, empresas e aulas individuais. Paralelamente ao ensino de idiomas, há 6 anos estudo profundamente como aprendemos e como podemos tornar esse processo mais eficaz.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Esse interesse me levou a ministrar palestras em universidades, escolas e empresas sobre aprendizagem e estratégias de estudo. Também fui selecionado para a primeira turma de formação em neuropsicologia clínica da{" "}
                  <a href="https://instagram.com/neuropsicoterapiabh" target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline underline-offset-2">
                    @neuropsicoterapiabh
                  </a>
                  , onde tive um ano de formação com a vice-presidente da Sociedade Brasileira de Neuropsicologia. Ao longo desse percurso, também participei de pesquisas com professores e pesquisadores das áreas de psicologia e neurociências.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Sou apaixonado por desafios, inclusive por aqueles que me colocam novamente no lugar de estudante. Nas redes sociais, já me propus a aprender italiano, holandês, russo e até piano, sempre buscando testar estratégias de aprendizagem na prática, compartilhar o que descubro e aprimorar continuamente minha própria metodologia.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Meu trabalho integra conhecimentos da neurociência da aprendizagem, da psicologia cognitiva e educacional e da pedagogia. No ensino de idiomas, utilizo a abordagem Dogme, que coloca o aluno no centro da aula e prioriza a comunicação autêntica, a interação e situações relacionadas às suas necessidades reais.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Mais do que ensinar um conteúdo, meu objetivo é ajudar você a entender melhor como aprende, para estudar com mais autonomia, segurança e eficiência.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Se você quer aprender idiomas ou desenvolver estratégias de estudo baseadas em evidências, este é o meu trabalho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

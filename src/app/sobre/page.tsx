import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça o José Vinicius — professor de inglês, pesquisador em neuropsicologia e fundador do EdukaCuca.",
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
                    Professor · Pesquisador · Fundador do EdukaCuca
                  </p>
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="rounded-xl bg-card p-8 shadow-sm sm:p-10">
                <p className="leading-relaxed text-accent/80">
                  Sou professor particular de inglês e francês há 7 anos, com passagem por escolas, empresas e aulas particulares. Em paralelo, há 6 anos estudo a fundo como aprender a aprender de forma eficaz, e esse tema já me levou a dar palestras em universidades, escolas e empresas.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Fui um dos selecionados para a primeira turma de formação em neuropsicologia clínica da{" "}
                  <a href="https://instagram.com/neuropsicoterapiabh" target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline underline-offset-2">
                    @neuropsicoterapiabh
                  </a>
                  , onde tive um ano de aulas com a vice-presidente da Sociedade Brasileira de Neuropsicologia. Também participei de pesquisas com professores renomados das áreas de psicologia e neurociências.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Sou apaixonado por desafios. Nas redes sociais, já me propus a aprender italiano, holandês, russo e até piano, sempre com o objetivo de divulgar boas estratégias de estudo e, principalmente, me colocar no lugar do estudante para continuar aprimorando minha própria técnica.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Minha metodologia integra neurociência da aprendizagem, pedagogia e psicologia cognitiva e educacional. No ensino de idiomas, uso a abordagem Dogme, centrada no aluno, com conversação autêntica e sempre conectada à necessidade real de cada estudante.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Se você se sente inseguro em relação à aprendizagem e quer usar técnicas de estudo que funcionam de verdade, para melhorar sua relação com os estudos, você está no lugar certo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

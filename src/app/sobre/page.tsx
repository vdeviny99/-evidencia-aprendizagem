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
                    src="/images/fotovini2.jpeg"
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
                  Sou professor particular de inglês e francês há 7 anos com experiência em escolas, empresas e aulas particulares. Paralelamente, há 6 anos estudo intensamente como aprender a aprender de forma eficaz, tendo dado palestras em universidades, escolas e empresas sobre o tema. Fui um dos alunos selecionados para a primeira turma de formação de neuropsicologia clínica pela{" "}
                  <a href="https://instagram.com/neuropsicoterapiabh" target="_blank" rel="noopener noreferrer" className="font-medium text-accent underline underline-offset-2">
                    @neuropsicoterapiabh
                  </a>
                  , em que tive 1 ano de aulas com a vice-presidente da Sociedade Brasileira de Neuropsicologia. Participei de pesquisas com professores renomados da área de psicologia e neurociências do Brasil.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Sou apaixonado por desafios — na minha jornada como aprendiz já fiz desafios nas redes sociais em que me propus a aprender italiano, holandês, russo e até mesmo piano. Todos com o intuito de divulgar estratégias e também me colocar no lugar do estudante para que possa sempre estar aprimorando minha técnica.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Minha metodologia de ensino é baseada na integração entre neurociência da aprendizagem, pedagogia, psicologia cognitiva e educacional. Além de utilizar a abordagem Dogme para ensino de segundo idioma, com foco no aluno e em conversação autêntica, ligada à demanda real do estudante.
                </p>
                <p className="mt-4 leading-relaxed text-accent/80">
                  Se você se sente inseguro em relação à aprendizagem e gostaria de aprender a utilizar técnicas adequadas de estudo e melhorar sua relação com a aprendizagem, está no lugar certo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

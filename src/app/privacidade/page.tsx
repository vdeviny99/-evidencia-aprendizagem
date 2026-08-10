import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como o EdukaCuca coleta, usa e protege os seus dados pessoais, conforme a Lei Geral de Proteção de Dados (LGPD).",
};

export default function PrivacidadePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-accent/5 to-cream pb-16 pt-12 sm:pt-20">
        <div className="mx-auto max-w-3xl px-4">
          <div className="mb-10 text-center animate-fade-in">
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1 font-heading text-xs font-bold uppercase tracking-widest text-accent">
              Privacidade
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold text-accent sm:text-4xl">
              Política de Privacidade
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-accent/60">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>

          <div className="space-y-8 rounded-xl bg-card p-8 shadow-sm sm:p-10">
            <Section title="1. Quem somos">
              <p>
                O EdukaCuca é um projeto educacional focado em técnicas de
                aprendizagem baseadas em evidências. Esta política explica como
                tratamos os dados pessoais coletados pelo nosso site, em
                conformidade com a Lei Geral de Proteção de Dados (LGPD – Lei nº
                13.709/2018).
              </p>
            </Section>

            <Section title="2. Quais dados coletamos">
              <p>
                No formulário de diagnóstico, coletamos os seguintes dados
                fornecidos voluntariamente por você:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Nome</li>
                <li>Idade</li>
                <li>Profissão ou ocupação</li>
                <li>Curso ou série</li>
                <li>WhatsApp</li>
                <li>E-mail (opcional)</li>
                <li>Objetivos e respostas do questionário de autoavaliação</li>
              </ul>
            </Section>

            <Section title="3. Para que usamos seus dados">
              <p>
                Utilizamos os dados exclusivamente para: analisar o seu
                diagnóstico de hábitos de estudo, preparar o feedback
                personalizado, e entrar em contato pelo WhatsApp ou e-mail para
                enviar esse feedback. Não vendemos, alugamos ou compartilhamos
                seus dados com terceiros.
              </p>
            </Section>

            <Section title="4. Base legal e consentimento">
              <p>
                O tratamento dos seus dados é feito com base no seu
                consentimento livre e informado (Art. 7º, I, da LGPD). O
                consentimento é registrado com data e hora no momento do envio
                do formulário e pode ser revogado a qualquer momento.
              </p>
            </Section>

            <Section title="5. Armazenamento e retenção">
              <p>
                Os dados ficam armazenados em serviços de hospedagem na nuvem
                com criptografia em trânsito e em repouso. Seus dados são
                mantidos pelo prazo de <strong>90 (noventa) dias</strong> após o
                envio, sendo automaticamente excluídos após esse período, salvo
                obrigação legal de retenção.
              </p>
            </Section>

            <Section title="6. Seus direitos">
              <p>
                Nos termos da LGPD, você pode, a qualquer momento, solicitar:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>A confirmação da existência do tratamento</li>
                <li>O acesso aos seus dados</li>
                <li>A correção de dados incompletos, inexatos ou desatualizados</li>
                <li>A exclusão dos dados (revogação do consentimento)</li>
              </ul>
              <p className="mt-3">
                Para exercer qualquer um desses direitos, basta nos contatar
                pelo e-mail abaixo.
              </p>
            </Section>

            <Section title="7. Contato">
              <p>
                Dúvidas, solicitações ou reclamações sobre esta política podem
                ser enviadas para{" "}
                <a
                  href="mailto:almeida.jv2019@gmail.com"
                  className="font-medium text-accent underline underline-offset-2"
                >
                  almeida.jv2019@gmail.com
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 font-heading text-lg font-bold text-accent">
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-accent/75">{children}</div>
    </section>
  );
}

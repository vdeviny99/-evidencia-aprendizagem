import type { Metadata } from "next";
import {
  Advertorial, Author, Body, Callout, Cast, CtaBand, Faq, Masthead, Medallion, Offer, Pull,
  Reel, Refs, Section, Stamp, Steps, wa,
} from "@/components/advertorial/Advertorial";

export const metadata: Metadata = {
  title: "Leu tudo e deu branco na prova",
  description:
    "Para quem estuda para vestibular e concurso: o que é ilusão de fluência, o que a pesquisa mostra sobre lembrar e revisar, e um plano de uma semana com o seu próprio material.",
  robots: { index: false, follow: false },
};

const WA_CURSO = wa("Olá! Vim pela página de vestibular e concurso e quero saber do curso Aprender a Aprender.");
const WA_AULA = wa("Olá! Vim pela página de vestibular e concurso e quero agendar uma aula de estratégias de aprendizagem.");
const WA_DUVIDA = wa("Olá! Vim pela página de vestibular e concurso e tenho uma dúvida sobre como estudar.");

function HeroArt() {
  return (
    <div className="adv-hero-noite" aria-hidden="true">
      <div className="adv-hero-noite__card">
        <p className="tag">Meu plano de estudo</p>
        <p className="strike">Reler o resumo pela quarta vez</p>
        <p>Fechar o caderno e lembrar</p>
        <p>Conferir o que faltou</p>
        <p>Rever amanhã e daqui a uma semana</p>
      </div>
      <div className="adv-slot" style={{ left: "-2%", top: "-2%", width: "34%" }}>
        <Medallion name="Curupira" size={170} tilt={-8} />
      </div>
      <div className="adv-slot" style={{ right: "-2%", bottom: "-1%", width: "36%" }}>
        <Medallion name="Saci" size={170} tilt={7} />
      </div>
    </div>
  );
}

export default function ParaVestibularPage() {
  return (
    <Advertorial arte="noite">
      <Masthead
        kicker="Para quem estuda para vestibular e concurso"
        title={<>Você leu tudo, achou que sabia, e na prova <em>deu branco</em>. Isso tem nome, e tem treino.</>}
        dek="Ilusão de fluência é a sensação de dominar uma matéria que você ainda não tentou lembrar. Dá para sair dela com o material que você já tem, e eu mostro como em uma semana."
        readMinutes={7}
        art={<HeroArt />}
      />

      <Body>
        <p className="adv-lede">
          Você termina o capítulo com a sensação boa de quem entendeu. Duas semanas depois, na frente da questão, a
          resposta não vem. Você estudou, e muito. O que costuma pesar é o tipo de esforço que esse estudo pediu de
          você.
        </p>

        <Pull>“Eu relendo o material pela quarta vez achando que tô aprendendo.” Depois: “Eu na prova.”</Pull>

        <Section title="Reconhecer é diferente de lembrar">
          <p>
            Quando você relê, o cérebro reconhece o texto. Reconhecer é fácil e agradável, porque tudo parece familiar.
            Na prova não há texto para reconhecer: você precisa produzir a resposta do zero. Por isso o estudo que mais
            se parece com a prova é o que pede para você lembrar sem olhar.
          </p>
          <p>
            Em um estudo publicado na Science em 2008, Jeffrey Karpicke e Henry Roediger compararam estudantes que
            seguiam relendo com estudantes que praticavam lembrar. Uma semana depois, quem praticou lembrar se saiu bem
            melhor. Na revisão de 2013 de John Dunlosky e colegas sobre dez técnicas de estudo, testar a si mesmo e
            distribuir a prática no tempo foram as duas classificadas como de alta utilidade.
          </p>
          <p>
            O sono também entra na conta. A pesquisa sobre memória mostra que dormir participa da consolidação do que
            foi estudado, e a madrugada antes da prova costuma sair cara.
          </p>
        </Section>

        <Section title="Uma semana para testar no seu material">
          <p>Escolha dois assuntos da sua próxima prova, que vou chamar de A e B. O número de cada passo é o dia.</p>
          <Steps
            items={[
              { title: "Estude e feche", text: "Estude o assunto A por 25 minutos. Feche tudo e escreva o que lembrar. Confira e marque o que faltou." },
              { title: "Comece pelas lacunas", text: "Abra pelas marcações de ontem. Responda sem olhar e só depois confira." },
              { title: "Segundo assunto", text: "Faça o mesmo com o assunto B. Antes de terminar, gaste 5 minutos tentando lembrar o assunto A." },
              { title: "Misture", text: "Resolva questões de A e B misturadas, sem saber de antemão de qual assunto é cada uma." },
              { title: "Dê aula", text: "Explique o assunto A em voz alta, como se fosse professor. Onde a explicação engasgar, revise." },
              { title: "Simulado curto", text: "Faça questões dos dois assuntos, sem consulta, no tempo da prova." },
              { title: "Revise e agende", text: "Revise só o que errou e marque no calendário as próximas revisões: alguns dias depois e uma semana depois." },
            ]}
          />
          <Callout label="Vai parecer mais difícil">
            <p>
              É esperado. Lembrar sem olhar cansa mais do que reler, e esse esforço faz parte do aprender. Compare o
              que você acertou no dia 6 com o que lembrou no dia 1.
            </p>
          </Callout>
        </Section>

        <Reel n={3} caption="Hábito 3 de 7, metacognição: as três perguntas para fazer no meio do estudo, em 42 segundos." />

        <Section title="Os sete hábitos por trás da nota">
          <p>
            O diagnóstico da EdukaCuca olha sete hábitos de estudo e mostra quais estão fortes e quais pedem treino:
            planejamento, gestão do tempo, metacognição, busca de ajuda, aprendizagem ativa, revisão estratégica,
            motivação e consistência. Cada combinação ganha o nome de um personagem do folclore, e o personagem muda
            conforme você treina.
          </p>
          <Cast caption="O Curupira anda com os pés virados e acha que está indo pra frente. O Saci para no meio do caminho e confere." />
          <Stamp />
        </Section>

        <CtaBand
          title="Descubra quais hábitos estão te segurando"
          text="33 perguntas, resultado na hora, sem custo."
          primary={{ href: "/diagnostico/captura", label: "Fazer o diagnóstico gratuito" }}
          secondary={{ href: WA_DUVIDA, label: "Falar com o professor" }}
        />
      </Body>

      <Offer
        title="Para ir além da semana-teste"
        intro="Os valores são os mesmos do site."
        items={[
          {
            title: "Curso Básico de Aprender a Aprender",
            price: "R$ 220",
            priceNote: "curso gravado, acesso por 2 anos",
            bullets: [
              "Fundamentos da ciência da aprendizagem",
              "Base para organizar estudos e revisar melhor",
              "Atualizações incluídas no período",
            ],
            cta: { href: WA_CURSO, label: "Quero o curso" },
            featured: true,
          },
          {
            title: "Aula de estratégias de aprendizagem",
            price: "R$ 120",
            priceNote: "aula avulsa de 1 hora, online",
            bullets: ["Plano prático de estudo", "Orientação personalizada", "Foco em rotina, revisão e autonomia"],
            cta: { href: WA_AULA, label: "Agendar uma aula" },
          },
          {
            title: "Diagnóstico completo",
            price: "R$ 49,90",
            priceNote: "pagamento único por Pix",
            bullets: [
              "Leitura individual das suas respostas",
              "Recomendações para a sua rotina",
              "Devolutiva pelo WhatsApp em até 48 h úteis",
            ],
            cta: { href: "/diagnostico/completo", label: "Quero a devolutiva" },
          },
        ]}
      />

      <Body>
        <Section title="Perguntas frequentes">
          <Faq
            items={[
              {
                q: "O curso ensina as matérias da prova?",
                a: "Ele ensina a estudar qualquer matéria: planejar, lembrar, revisar e acompanhar o próprio progresso. Vale para vestibular, concurso, faculdade e certificação. O conteúdo das disciplinas continua com o seu material.",
              },
              {
                q: "Como compro o curso?",
                a: "A compra é combinada pelo WhatsApp. Me chama que eu explico o acesso.",
              },
              {
                q: "E se eu quiser acompanhamento mais próximo?",
                a: "Existe a mentoria de 4 semanas, com encontros, metas e revisões semana a semana. O valor é combinado na conversa.",
              },
            ]}
          />
        </Section>

        <Author />

        <Refs
          items={[
            "Karpicke, J. D., & Roediger, H. L. (2008). The critical importance of retrieval for learning. Science, 319(5865), 966-968.",
            "Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. Psychological Science in the Public Interest, 14(1), 4-58.",
            "Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: a review and quantitative synthesis. Psychological Bulletin, 132(3), 354-380.",
            "Rasch, B., & Born, J. (2013). About sleep's role in memory. Physiological Reviews, 93(2), 681-766.",
          ]}
        />
      </Body>
    </Advertorial>
  );
}

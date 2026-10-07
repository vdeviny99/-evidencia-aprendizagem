import type { Metadata } from "next";
import { CalendarClock, MessageCircle, Timer } from "lucide-react";
import {
  Advertorial, Author, Body, Callout, Cards, Cast, CtaBand, Faq, Masthead, Medallion, Offer,
  Reel, Refs, Section, Stamp, Steps, wa,
} from "@/components/advertorial/Advertorial";

export const metadata: Metadata = {
  title: "Quando o estudo não vira nota",
  description:
    "Guia para pais: por que reler e grifar dão sensação de estudo, o que a pesquisa recomenda e como o diagnóstico de hábitos da EdukaCuca ajuda.",
  robots: { index: false, follow: false },
};

const WA_DUVIDA = wa("Olá! Vim pela página para pais e quero entender como o diagnóstico pode ajudar meu filho.");
const WA_MENTORIA = wa("Olá! Vim pela página para pais e quero saber da mentoria de 4 semanas para o meu filho.");

function HeroArt() {
  return (
    <div className="adv-hero-caderno" aria-hidden="true">
      <div style={{ position: "absolute", left: "16%", top: "9%", width: "30%" }}>
        <Medallion name="Saci" size={150} tilt={-6} />
      </div>
      <div style={{ position: "absolute", left: "52%", top: "6%", width: "30%" }}>
        <Medallion name="Caipora" size={150} tilt={5} />
      </div>
      <div style={{ position: "absolute", left: "34%", top: "34%", width: "30%" }}>
        <Medallion name="Uirapuru" size={150} tilt={-3} />
      </div>
      <Stamp />
    </div>
  );
}

export default function ParaPaisPage() {
  return (
    <Advertorial arte="caderno">
      <Masthead
        kicker="Guia para pais · EdukaCuca"
        title={<>Ele passa a tarde estudando e a nota <em>não acompanha</em>. O que pode estar acontecendo nessas horas</>}
        dek="Reler e grifar dão a sensação de estudo. A pesquisa sobre aprendizagem aponta outros caminhos, e três perguntas simples ajudam você a enxergar isso em casa hoje à noite."
        readMinutes={6}
        art={<HeroArt />}
      />

      <Body>
        <p className="adv-lede">
          Você passa pela porta do quarto e ele está lá: material aberto, marca-texto na mão, a mesma página há meia
          hora. Na semana seguinte, a nota da prova fica abaixo do esforço que você viu. Em casa, a conversa costuma
          cair em dois lugares, falta de dedicação ou falta de jeito para a matéria. Nos alunos que acompanho, o que
          mais aparece é o modo como as horas de estudo são usadas.
        </p>

        <Section title="Reler dá a sensação de que aprendeu">
          <p>
            Quando um estudante relê um texto, as frases ficam familiares. Essa familiaridade se parece muito com
            entender. Na prova, ele precisa tirar a resposta da própria cabeça, sem o texto na frente, e a familiaridade
            ajuda pouco. Pesquisadores chamam esse engano de ilusão de fluência.
          </p>
          <p>
            Em 2013, um grupo de psicólogos liderado por John Dunlosky revisou a pesquisa sobre dez técnicas de estudo
            muito usadas. Reler e grifar ficaram entre as de baixa utilidade. Testar a si mesmo e distribuir o estudo em
            vários dias ficaram entre as de alta utilidade.
          </p>
          <Callout label="Em casa, isso quer dizer">
            <p>
              O que muda a nota é o que ele faz dentro das horas de estudo. Dá para observar isso sem virar fiscal, com
              perguntas que fazem a memória dele trabalhar.
            </p>
          </Callout>
        </Section>

        <Section title="Três perguntas para fazer hoje à noite">
          <p>Nenhuma delas exige que você saiba a matéria.</p>
          <Cards
            items={[
              {
                icon: MessageCircle,
                title: "“Me explica sem olhar?”",
                text: "Peça para ele fechar o caderno e contar, com as próprias palavras, o que estudou. Onde ele travar é o que precisa revisar.",
              },
              {
                icon: CalendarClock,
                title: "“Quando você vai rever isso?”",
                text: "Uma revisão curta no dia seguinte e outra alguns dias depois costumam fixar mais do que uma maratona na véspera.",
              },
              {
                icon: Timer,
                title: "“Quanto dura o seu bloco de foco?”",
                text: "Combine antes de começar: um bloco curto, uma tarefa clara, celular longe e pausa de verdade no fim.",
              },
            ]}
          />
        </Section>

        <Reel n={5} caption="Hábito 5 de 7, aprendizagem ativa: o “fecha e lembra” da série Caderno de Campo, em 44 segundos." />

        <Section title="Um mapa em vez de um rótulo">
          <p>
            Na EdukaCuca eu uso um diagnóstico de 33 perguntas que olha sete hábitos de estudo: planejamento, gestão do
            tempo, metacognição (perceber se está entendendo), busca de ajuda, aprendizagem ativa, revisão estratégica,
            motivação e consistência.
          </p>
          <p>
            Para o resultado conversar com um adolescente, cada combinação de hábitos ganha o nome de um personagem do
            folclore brasileiro. A Caipora se organiza bem. O Saci confere o próprio aprendizado e pratica, e ainda
            precisa de planejamento. O Uirapuru está montando a rotina, um pouco por dia.
          </p>
          <Cast caption="Os oito personagens do diagnóstico. Cada um descreve um momento do estudante, e o momento muda com treino." />
          <Stamp />
          <p className="adv-note">
            O diagnóstico é educativo. Ele não rotula o estudante e não substitui avaliação psicológica, neuropsicológica
            ou pedagógica especializada.
          </p>
        </Section>

        <Section title="Como funciona">
          <Steps
            items={[
              {
                title: "Diagnóstico gratuito",
                text: "Seu filho responde 33 perguntas no site e vê o resultado inicial na hora. Se ele tem menos de 18 anos, façam juntos e usem o seu nome e o seu WhatsApp no cadastro.",
              },
              {
                title: "Devolutiva individual, se você quiser",
                text: "No diagnóstico completo eu leio as respostas e mando, pelo WhatsApp, recomendações para a rotina dele. O pagamento é por Pix e a devolutiva chega em até 48 horas úteis depois do comprovante.",
              },
              {
                title: "Acompanhamento, se precisar",
                text: "A mentoria de 4 semanas organiza rotina, metas e revisões semana a semana, em encontros comigo.",
              },
            ]}
          />
        </Section>

        <CtaBand
          title="Quer começar pelo mapa?"
          text="33 perguntas, resultado na hora, sem custo."
          primary={{ href: "/diagnostico/captura", label: "Fazer o diagnóstico gratuito" }}
          secondary={{ href: WA_DUVIDA, label: "Tirar uma dúvida" }}
        />
      </Body>

      <Offer
        title="Por onde começar"
        intro="Três caminhos, do mais leve ao mais próximo. Os valores são os mesmos do site."
        items={[
          {
            title: "Diagnóstico gratuito",
            price: "Grátis",
            priceNote: "resultado na hora",
            bullets: ["33 perguntas sobre hábitos de estudo", "Resultado inicial e recomendações gerais", "Feito no próprio site"],
            cta: { href: "/diagnostico/captura", label: "Fazer o diagnóstico" },
          },
          {
            title: "Diagnóstico completo",
            price: "R$ 49,90",
            priceNote: "pagamento único por Pix",
            bullets: [
              "Leitura individual das respostas",
              "Recomendações para a rotina do estudante",
              "Devolutiva pelo WhatsApp em até 48 h úteis",
            ],
            cta: { href: "/diagnostico/completo", label: "Quero a devolutiva completa" },
            featured: true,
          },
          {
            title: "Mentoria de 4 semanas",
            price: "Sob consulta",
            priceNote: "acompanhamento individual",
            bullets: ["Encontros de acompanhamento", "Rotina, metas e revisões semanais", "Plano adaptado ao contexto do estudante"],
            cta: { href: WA_MENTORIA, label: "Conversar sobre a mentoria" },
          },
        ]}
      />

      <Body>
        <Section title="Perguntas de pais">
          <Faq
            items={[
              {
                q: "É uma avaliação psicológica?",
                a: "Não. O diagnóstico é educativo: olha hábitos e estratégias de estudo. Ele não substitui avaliação psicológica, neuropsicológica ou pedagógica especializada.",
              },
              {
                q: "Meu filho precisa fazer sozinho?",
                a: "Pode fazer sozinho, mas o resultado rende mais conversa quando vocês leem juntos. Se ele tem menos de 18 anos, o cadastro fica no nome do responsável.",
              },
              {
                q: "Como é o pagamento do diagnóstico completo?",
                a: "Por Pix. Depois das respostas, você envia o comprovante pelo WhatsApp e eu preparo a devolutiva em até 48 horas úteis.",
              },
              {
                q: "O que acontece com as respostas?",
                a: (
                  <>
                    Elas servem para montar o resultado e são tratadas conforme a{" "}
                    <a href="/privacidade">Política de Privacidade</a>.
                  </>
                ),
              },
            ]}
          />
        </Section>

        <Author />

        <Refs
          items={[
            "Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. Psychological Science in the Public Interest, 14(1), 4-58.",
            "Karpicke, J. D., & Roediger, H. L. (2008). The critical importance of retrieval for learning. Science, 319(5865), 966-968.",
            "Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: a review and quantitative synthesis. Psychological Bulletin, 132(3), 354-380.",
          ]}
        />
      </Body>
    </Advertorial>
  );
}

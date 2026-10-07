import type { Metadata } from "next";
import Image from "next/image";
import { Clock, MessageSquareQuote, Repeat } from "lucide-react";
import {
  Advertorial, Author, Body, Callout, Cards, CtaBand, Faq, Masthead, Offer, Pull, Section, Steps, wa,
} from "@/components/advertorial/Advertorial";

export const metadata: Metadata = {
  title: "Inglês no trabalho: quando a frase não sai",
  description:
    "Para quem entende inglês e trava para falar: o que fazer quando falta uma palavra e como funcionam as aulas online ao vivo da EdukaCuca.",
  robots: { index: false, follow: false },
};

const WA_CONVERSA = wa("Olá! Vim pela página de inglês no trabalho e quero agendar a conversa de 15 minutos.");
const WA_1X = wa("Olá! Vim pela página de inglês no trabalho e tenho interesse no plano de 1 aula por semana.");
const WA_2X = wa("Olá! Vim pela página de inglês no trabalho e tenho interesse no plano de 2 aulas por semana.");

function HeroArt() {
  return (
    <div className="adv-hero-anil" aria-hidden="true">
      <Image
        src="/para/artes/ingles-tem-um-motivo.webp"
        alt=""
        width={1080}
        height={1349}
        className="adv-post"
        style={{ left: "0%", top: "4%", transform: "rotate(-7deg)" }}
        priority
      />
      <Image
        src="/para/artes/faltou-uma-palavra.webp"
        alt=""
        width={1080}
        height={1349}
        className="adv-post"
        style={{ right: "0%", top: "0%", transform: "rotate(6deg)" }}
      />
      <Image
        src="/para/artes/medo-de-falar.webp"
        alt=""
        width={1080}
        height={1349}
        className="adv-post"
        style={{ left: "23%", bottom: "0%", transform: "rotate(-1.5deg)" }}
      />
    </div>
  );
}

export default function ParaInglesTrabalhoPage() {
  return (
    <Advertorial arte="anil">
      <Masthead
        kicker="Inglês na prática"
        title={<>Você entende a reunião em inglês. Na hora de falar, <em>a frase não sai</em>.</>}
        dek="Entender e falar são habilidades que se treinam de jeitos diferentes. Um professor de inglês há 7 anos mostra o que fazer quando falta uma palavra e como funcionam aulas ao vivo montadas para o seu trabalho."
        readMinutes={5}
        art={<HeroArt />}
      />

      <Body>
        <p className="adv-lede">
          A call começa, você acompanha tudo e entende a pergunta que fizeram para você. A resposta estava pronta na
          cabeça e sai pela metade, ou não sai. Muitas pessoas que estudaram inglês por anos passam por isso. Costuma faltar uma
          coisa que lista de palavras e aplicativo não dão: prática de falar, com tempo para errar e alguém para
          corrigir.
        </p>

        <Pull>“Eu sei inglês, mas tenho medo de falar em voz alta.”</Pull>

        <Section title="Entender e falar se treinam de jeitos diferentes">
          <p>
            Quando você lê ou escuta, o inglês chega pronto e você reconhece. Quando você fala, precisa montar a frase
            do zero, em tempo real, com alguém esperando. Isso melhora falando: travando, achando outro caminho e
            tentando de novo, de preferência com alguém que devolve um feedback claro.
          </p>
          <p>
            Por isso, nas minhas aulas, o tempo é seu para falar. A gramática e o vocabulário entram quando a conversa
            pede.
          </p>
        </Section>

        <Section title="Faltou uma palavra? A conversa não precisa parar">
          <p>Três saídas para usar na próxima reunião. Escolha uma e fale em voz alta hoje.</p>
          <Cards
            items={[
              {
                icon: MessageSquareQuote,
                title: "Descreva o que falta",
                text: "Esqueceu “key”? Diga: “It's something you use to open a door.”",
              },
              {
                icon: Clock,
                title: "Ganhe alguns segundos",
                text: "“Let me think for a second.”",
              },
              {
                icon: Repeat,
                title: "Peça para repetir",
                text: "Não ouviu bem? “Could you say that again?”",
              },
            ]}
          />
        </Section>

        <Section title="Seu inglês tem um motivo. Sua aula também.">
          <Callout label="Exercício de dois minutos">
            <p>
              Pense em uma situação de trabalho em que você quer usar o inglês. Escreva, em português mesmo, uma frase
              que gostaria de conseguir dizer. Ela pode ser o ponto de partida da nossa primeira conversa.
            </p>
          </Callout>
          <p>As aulas seguem três etapas:</p>
          <Steps
            items={[
              {
                title: "Primeiro contato",
                text: "Uma conversa de 15 minutos, sem compromisso, para entender seu objetivo, sua rotina e o que você espera das aulas.",
              },
              {
                title: "Plano individual",
                text: "As aulas partem das situações que você precisa enfrentar: a reunião, a apresentação, a entrevista, a viagem.",
              },
              {
                title: "Acompanhamento",
                text: "Feedback claro depois de cada aula e ajustes conforme você evolui.",
              },
            ]}
          />
        </Section>

        <CtaBand
          title="Comece pela conversa de 15 minutos"
          text="Sem compromisso. Me conta em que situação o inglês trava você."
          primary={{ href: WA_CONVERSA, label: "Agendar pelo WhatsApp" }}
        />
      </Body>

      <Offer
        title="Aulas online e ao vivo"
        intro="Inglês do iniciante ao avançado, com aulas individuais. Também dou aulas de francês. Os valores são os mesmos do site."
        items={[
          {
            title: "1 aula por semana",
            price: "R$ 400",
            priceNote: "por mês",
            bullets: ["1 encontro semanal ao vivo", "Plano adaptado ao seu objetivo", "Feedback e próximos passos", "Suporte pelo WhatsApp"],
            cta: { href: WA_1X, label: "Quero 1 aula por semana" },
          },
          {
            title: "2 aulas por semana",
            price: "R$ 720",
            priceNote: "por mês",
            bullets: ["2 encontros semanais ao vivo", "Mais tempo de prática guiada", "Acompanhamento mais próximo", "Suporte pelo WhatsApp"],
            cta: { href: WA_2X, label: "Quero 2 aulas por semana" },
            featured: true,
          },
          {
            title: "Conversa inicial",
            price: "15 min",
            priceNote: "online e sem compromisso",
            bullets: ["Seu objetivo e sua rotina", "Formato, valores e próximos passos"],
            cta: { href: WA_CONVERSA, label: "Agendar a conversa" },
          },
        ]}
      />

      <Body>
        <Section title="Perguntas frequentes">
          <Faq
            items={[
              { q: "Serve para quem está começando?", a: "Sim. As aulas vão do iniciante ao avançado, e o plano parte do seu nível e do seu objetivo." },
              { q: "As aulas são em grupo?", a: "São individuais, online e ao vivo, com atenção só para você." },
              { q: "E o horário?", a: "Os horários são combinados conforme a sua disponibilidade e o seu objetivo." },
              { q: "Dá para fazer francês?", a: "Dá. Os pacotes de francês funcionam do mesmo jeito." },
            ]}
          />
        </Section>

        <Author />
      </Body>
    </Advertorial>
  );
}

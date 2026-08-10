import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const newCategories = [
  { name: "Hábitos", slug: "habitos", description: "Formação de hábitos e rotinas de estudo." },
  { name: "Leitura Técnica", slug: "leitura-tecnica", description: "Métodos científicos de leitura e compreensão de textos técnicos." },
  { name: "Mnemônicos", slug: "mnemonicos", description: "Técnicas de memorização e o método dos loci." },
  { name: "Exercício e Cognição", slug: "exercicio-cognicao", description: "Relação entre atividade física e função cognitiva." },
  { name: "Ambiente de Estudo", slug: "ambiente-estudo", description: "Como o ambiente físico afeta a aprendizagem." },
  { name: "Ansiedade e Provas", slug: "ansiedade-provas", description: "Ansiedade de prova, branco e estratégias de preparação." },
  { name: "Aprendizagem em Grupo", slug: "aprendizagem-grupo", description: "Estudo colaborativo e cooperativo." },
  { name: "Diferenças Individuais", slug: "diferencas-individuais", description: "Memória de trabalho, conhecimento prévio e variações cognitivas." },
  { name: "Zona de Desenvolvimento", slug: "zona-desenvolvimento", description: "ZDP, andaimes e o papel do suporte na aprendizagem." },
  { name: "Erro e Falha Produtiva", slug: "erro-falha-produtiva", description: "O papel do erro e da falha produtiva na aprendizagem." },
  { name: "Criatividade", slug: "criatividade", description: "Mecanismos neurais da criatividade e do insight." },
  { name: "Alimentação e Cognição", slug: "alimentacao-cognicao", description: "Dieta, hidratação e função cerebral." },
];

const habitoContent = `
Você já tomou a decisão de estudar todos os dias. No primeiro dia, funcionou. No segundo, também. No terceiro, a preguiça chegou. No sétimo, você já tinha desistido.

Não se culpe. O problema não é sua força de vontade — é que você tentou criar um hábito sem entender como hábitos funcionam.

Estima-se que cerca de 40% das nossas ações diárias não são decisões conscientes, mas hábitos (Wood, 2016). Isso significa que quase metade do que você faz todos os dias não envolve escolha — é automatizado. Se você conseguir transformar o estudo em um hábito, estudar deixará de ser uma batalha diária contra a preguiça e se tornará algo tão automático quanto escovar os dentes.

---

## O que é um hábito

Um hábito é um comportamento que, após repetido o suficiente em um contexto estável, torna-se automático. Diferente de uma decisão consciente, um hábito é disparado por um gatilho contextual, não por uma intenção deliberada.

O ciclo do hábito funciona assim:

1. **Gatilho** — um sinal no ambiente que inicia o comportamento (ex.: sentar na escrivaninha depois do café)
2. **Rotina** — o comportamento em si (ex.: abrir o Anki e revisar flashcards)
3. **Recompensa** — a sensação positiva que reforça o ciclo (ex.: ver os cards zerados, sentir progresso)

Com o tempo, o cérebro aprende a associar gatilho e recompensa, e a rotina se torna automática. É por isso que você não precisa de força de vontade para escovar os dentes — o gatilho (acordar) dispara automaticamente a rotina.

---

## Como funciona a formação de hábitos

Lally e colaboradores (2010) conduziram um estudo seminal sobre formação de hábitos. Participantes escolheram um novo comportamento saudável (como correr 15 minutos ou comer uma fruta no almoço) e o repetiram diariamente em um contexto consistente.

Os resultados revelam três descobertas importantes:

**Primeiro**, a formação de hábitos segue uma curva decrescente — o esforço necessário para realizar o comportamento diminui com a repetição, mas o ganho é maior no início e diminui gradualmente.

**Segundo**, o tempo médio para que um comportamento se torne automático foi de **66 dias**, variando de 18 a 254 dias dependendo da complexidade. Isso derruba o mito popular de que um hábito se forma em 21 dias.

**Terceiro**, pular um dia ocasional não prejudica significativamente a formação do hábito. O que importa é a **consistência geral**, não a perfeição.

Wood (2016) acrescenta que os hábitos são formados através de um processo de "memória contexto-dependente": o cérebro aprende a associar um contexto específico a uma resposta automática. Quanto mais estável o contexto, mais rápido o hábito se forma.

---

## O que a ciência descobriu

### A volatilidade dos hábitos

Gardner e Lally (2023) mostraram que hábitos formados em contextos estáveis persistem mesmo quando a motivação desaparece. Participantes que formaram o hábito de estudar em um horário e local fixos continuaram estudando mesmo em dias de baixa motivação, enquanto aqueles sem contexto estável pararam.

### Hábitos vs. metas

Wood e Neal (2016) demonstraram uma distinção crucial: metas são representações conscientes de resultados desejados; hábitos são associações automáticas entre contexto e resposta. Quando você depende apenas de metas, qualquer distração ou queda de motivação interrompe o comportamento. Quando você tem um hábito, o contexto dispara a ação independentemente da motivação.

### O papel da recompensa imediata

A principal razão pela qual hábitos de estudo são difíceis de formar é que a recompensa é atrasada. A nota boa vem semanas depois. O aprendizado real leva meses. O cérebro privilegia recompensas imediatas sobre recompensas futuras (o chamado *delay discounting*). É por isso que o celular (recompensa imediata) sempre vence contra o livro (recompensa futura).

### A técnica de empilhamento de hábitos

Clear (2018), em seu livro *Atomic Habits*, popularizou o conceito de "habit stacking": empilhar um novo hábito em cima de um hábito existente. A fórmula é: "Depois de [hábito atual], eu vou [novo hábito]". Por exemplo: "Depois de escovar os dentes, eu vou fazer 5 minutos de flashcards no Anki."

---

## Exemplos práticos

### Exemplo 1: Hábito de revisão diária

Maria quer criar o hábito de revisar o conteúdo do dia. Ela define: "Depois do jantar, eu vou para o quarto e abro o Anki por 10 minutos." O gatilho é o jantar terminar. A rotina é ir para o quarto e abrir o Anki. A recompensa é ver os cards zerados. Após 60 dias, Maria faz isso automaticamente.

### Exemplo 2: Micro-hábito de leitura

João quer ler mais livros técnicos, mas nunca encontra tempo. Em vez de tentar ler 30 minutos por dia, ele começa com 2 páginas por dia após escovar os dentes. Duas páginas são tão fáceis que ele não precisa de motivação para começar. Frequentemente, ele lê mais — mas o compromisso mínimo remove a barreira de entrada.

### Exemplo 3: Ambiente como gatilho

Pedro quer estudar desenho. Ele deixa o caderno e os lápis sempre abertos na mesa de estudo. O simples ato de ver os materiais prontos funciona como gatilho visual. Ele não precisa decidir desenhar — os materiais já estão lá, esperando.

---

## Erros comuns

### "Preciso de 21 dias para formar um hábito"

Esse número vem de um estudo mal interpretado do cirurgião plástico Maxwell Maltz, que observou que amputados levavam cerca de 21 dias para se adaptar à perda de um membro. Não tem nada a ver com hábitos. A pesquisa real mostra que hábitos simples levam em média 66 dias, e hábitos complexos podem levar mais de 8 meses.

### "Se eu falhar um dia, estraguei tudo"

A pesquisa de Lally mostra que falhas ocasionais não prejudicam a formação do hábito, desde que a consistência geral seja mantida. O que destrói um hábito não é um dia perdido — são duas semanas perdidas.

### "Força de vontade é suficiente"

Força de vontade é um recurso limitado e se esgota ao longo do dia. Depender dela para manter um hábito é uma estratégia perdedora. O segredo é criar um ambiente e um contexto que tornem o hábito inevitável, não usar força de vontade.

### "Grandes mudanças exigem grandes esforços"

Estudos mostram que a magnitude do esforço inicial não prediz a manutenção do hábito. Micro-hábitos — tão pequenos que são impossíveis de falhar — têm maior taxa de sucesso do que metas ambiciosas.

---

## Limitações

- **Complexidade importa**: hábitos simples (beber água, revisar flashcards) se formam mais rápido que hábitos complexos (estudar cálculo por 2 horas).
- **Contexto instável**: se seu ambiente muda com frequência (viagens, mudanças de rotina), a formação de hábitos é prejudicada.
- **Não substitui planejamento**: hábitos automatizam a execução, mas não substituem a necessidade de planejamento estratégico do que estudar.
- **Recaídas são normais**: hábitos podem ser quebrados por mudanças de vida (mudança de emprego, nascimento de filho). O importante é retomar.

---

## Como aplicar

1. **Escolha um micro-hábito**: comece com algo que leve menos de 2 minutos (ex.: abrir o Anki, ler uma página, escrever uma frase).
2. **Defina um gatilho claro**: "Depois de [X], eu vou [Y]". Ex.: "Depois do café da manhã, eu vou revisar 5 flashcards."
3. **Estabilize o contexto**: mesmo horário, mesmo local, mesmos materiais. A consistência do ambiente acelera a automação.
4. **Celebre a execução, não o resultado**: a recompensa não é aprender — é ter feito. Marque no calendário cada dia completo. O "streak" visual é uma recompensa poderosa.
5. **Remova a fricção**: deixe os materiais prontos na noite anterior. Se vai estudar de manhã, durma com o livro na mesa.
6. **Aumente gradualmente**: depois de 2-3 semanas, aumente o tempo ou a complexidade. Mas nunca aumente antes de o hábito estar automatizado.
7. **Planeje a recaída**: todos falham. Tenha um plano de retomada: "Se eu perder um dia, no dia seguinte faço o mínimo."

---

## Principais ideias

1. Hábitos são comportamentos automáticos disparados por contexto, não por força de vontade.
2. Formar um hábito leva em média 66 dias, não 21.
3. Micro-hábitos (tão pequenos que são impossíveis de falhar) são a estratégia mais eficaz.
4. O ambiente é mais importante que a motivação — gatilhos visuais e materiais prontos reduzem a fricção.
5. Recompensas imediatas (como marcar um "X" no calendário) sustentam o ciclo do hábito.

---

## Referências

- Clear, J. (2018). *Atomic Habits*. Avery.
- Gardner, B., & Lally, P. (2023). Habit and habitual behaviour. *Health Psychology Review*, 17(1), 1–7. https://doi.org/10.1080/17437199.2022.2156918
- Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed. *European Journal of Social Psychology*, 40(6), 998–1009. https://doi.org/10.1002/ejsp.674
- Wood, W. (2016). The psychology of habit. *Annual Review of Psychology*, 67, 17.1–17.26. https://doi.org/10.1146/annurev-psych-122414-033417
- Wood, W., & Neal, D. T. (2016). Healthy through habit. *Behavioral Science & Policy*, 2(1), 71–83. https://doi.org/10.1353/bsp.2016.0008
`;

const leituraTecnicaContent = `
Você está diante de um livro técnico de 400 páginas sobre um assunto que precisa dominar para o semestre que vem. Você abre na primeira página, lê cada palavra, vira a página, continua. Duas horas depois, você leu 30 páginas e não lembra do que estava no início.

A cena é familiar, e o problema não é você — é a estratégia. Ler um texto técnico não é como ler um romance. Você não pode simplesmente começar no início e seguir até o fim, confiando que a história vai se revelar. Textos técnicos exigem uma abordagem ativa, estruturada e estratégica.

A boa notícia é que existem métodos cientificamente validados para transformar a leitura técnica em uma ferramenta de aprendizado profundo. Dois dos mais conhecidos são o **SQ3R** e o **PQ4R**.

---

## O que é

SQ3R é um método de leitura desenvolvido por Francis Robinson em 1946, ainda amplamente utilizado e estudado. O nome é uma sigla em inglês para cinco etapas: **Survey, Question, Read, Recite, Review** — em português: **Visão Geral, Perguntar, Ler, Recitar, Revisar**.

O PQ4R é uma variação atualizada, desenvolvida por Thomas e Robinson (1972), que adiciona uma etapa: **Preview, Question, Read, Reflect, Recite, Review** — **Pré-visualizar, Perguntar, Ler, Refletir, Recitar, Revisar**.

Ambos os métodos compartilham o mesmo princípio fundamental: **a leitura eficaz não é passiva**. Ela exige que você interaja com o texto antes, durante e depois da leitura.

---

## Como funciona

### Por que a leitura linear falha

Quando você lê um texto técnico de forma linear — da primeira à última palavra — seu cérebro está processando a informação em tempo real, sem contexto prévio. Você não sabe o que é importante, o que é secundário, nem como as partes se conectam. É como tentar montar um quebra-cabeça sem olhar para a imagem na caixa.

O resultado é que você gasta a mesma quantidade de energia mental em detalhes irrelevantes e em conceitos centrais. Ao final, sua memória ficou com uma massa amorfa de informações, sem estrutura clara.

### O método SQ3R passo a passo

**Survey (Visão Geral)**: antes de ler, folheie o capítulo rapidamente. Leia os títulos, subtítulos, legendas de figuras, resumos, perguntas no final. Isso leva de 2 a 5 minutos e cria um mapa mental do terreno que você vai percorrer.

**Question (Perguntar)**: transforme cada título em uma pergunta. Se o subtítulo é "A teoria da carga cognitiva", sua pergunta é "O que é a teoria da carga cognitiva?" ou "Como a carga cognitiva afeta a aprendizagem?".

**Read (Ler)**: agora leia o texto ativamente, buscando responder às perguntas que você formulou. Não leia passivamente — leia como quem busca tesouro, procurando as respostas.

**Recite (Recitar)**: após cada seção, feche o livro e recite em voz alta ou escreva a resposta para sua pergunta. Se não consegue responder, releia a seção. Este é o Active Recall aplicado à leitura.

**Review (Revisar)**: após terminar o capítulo, revisite todas as perguntas e respostas. Verifique se você ainda lembra das respostas sem consultar o texto.

### A diferença do PQ4R

O PQ4R adiciona o passo **Reflect (Refletir)**: após ler cada seção, você não apenas recita, mas reflete sobre como o conteúdo se conecta ao que já sabe, a exemplos práticos e a outras áreas do conhecimento. Essa etapa de elaboração é crucial para a transferência do aprendizado.

---

## O que a ciência descobriu

### A eficácia do SQ3R

Adams (1980) conduziu uma revisão inicial dos estudos sobre o SQ3R e encontrou evidências consistentes de que o método melhora a compreensão e a retenção em comparação com a leitura tradicional. Estudantes que usavam o SQ3R lembravam significativamente mais do conteúdo após uma semana.

Estudos mais recentes confirmam esses achados. Nist e colaboradores (1991) mostraram que estudantes universitários que foram treinados no SQ3R tiveram desempenho superior em testes de compreensão de leitura, especialmente em textos expositivos — os mais comuns no ambiente acadêmico.

### PQ4R e a importância da elaboração

O passo adicional "Reflect" do PQ4R está alinhado com a teoria da **elaboração**, proposta por Craik e Lockhart (1972). Segundo eles, quanto mais profundamente você processa uma informação — não apenas repetindo, mas conectando, aplicando, questionando — mais forte será a memória.

Uma meta-análise de Dunlosky et al. (2013) classificou a **autoexplicação** (que inclui a reflexão proposta pelo PQ4R) como uma técnica de utilidade moderada a alta. Combinada com Active Recall (a etapa "Recite"), forma uma abordagem poderosa.

### Leitura ativa vs. passiva

Vidal-Abarca e colaboradores (2010) investigaram o que diferencia leitores proficientes de leitores menos proficientes. A principal diferença não era velocidade de leitura ou vocabulário — era o uso de estratégias ativas: formular perguntas, resumir mentalmente, monitorar a compreensão. Leitores proficientes fazem isso naturalmente; leitores menos proficientes precisam ser ensinados.

### O papel do conhecimento prévio

Kintsch (1994) mostrou que a compreensão de leitura depende da ativação do conhecimento prévio. O SQ3R, com sua etapa inicial de Survey, ativa esse conhecimento antes da leitura detalhada, preparando o terreno para que a nova informação se ancore no que você já sabe.

---

## Exemplos práticos

### Exemplo 1: Estudando um capítulo de biologia

Maria precisa estudar o capítulo sobre fotossíntese. Em vez de começar a ler da primeira página:

1. **Survey** (3 min): ela folheia o capítulo, lê os subtítulos (cloroplastos, fase clara, fase escura), vê as figuras dos ciclos.
2. **Question** (2 min): ela escreve "O que são cloroplastos?", "Como funciona a fase clara?", "O que é o ciclo de Calvin?".
3. **Read** (15 min): lê o capítulo buscando responder cada pergunta.
4. **Recite** (5 min): após cada seção, ela fecha o livro e explica em voz alta.
5. **Review** (5 min): ao final, ela responde às perguntas iniciais sem consultar o texto.

### Exemplo 2: Lendo um artigo científico

João precisa ler um artigo de 20 páginas para um seminário. Ele aplica o PQ4R:

1. **Preview**: lê título, resumo, introdução, conclusão (5 min).
2. **Question**: "Qual é a hipótese?", "Que método usaram?", "Quais os resultados principais?".
3. **Read**: lê o artigo completo, mas apenas os trechos relevantes para suas perguntas.
4. **Reflect**: "Como isso se conecta com o que vimos em aula?", "Isso contradiz o artigo que li na semana passada?".
5. **Recite**: explica o artigo para um colega sem consultar.
6. **Review**: verifica se não esqueceu nenhum ponto importante.

### Exemplo 3: Preparando-se para uma prova de direito

Pedro tem que ler 50 páginas de doutrina jurídica. Ele organiza seu estudo em blocos de SQ3R de 30 minutos: 5 min de Survey, 5 min de Questions, 12 min de Read, 5 min de Recite, 3 min de Review. Em cada bloco, ele cobre cerca de 10 páginas. Ao final de 5 blocos (com pausas entre eles), ele leu, compreendeu e fixou o conteúdo — algo que levaria o dobro do tempo com leitura passiva.

---

## Erros comuns

### "Ler é só passar os olhos pelo texto"

Ler tecnicamente não é passar os olhos. É um processo ativo de construção de significado. Se você não consegue explicar o que leu com suas próprias palavras, você não leu — apenas passou os olhos.

### "O SQ3R é muito lento"

O SQ3R parece mais lento no curto prazo, mas é mais rápido no longo prazo porque você não precisa reler o texto várias vezes. Uma leitura ativa com SQ3R substitui três ou quatro leituras passivas.

### "Só funciona para textos fáceis"

Na verdade, o método é mais eficaz justamente para textos complexos e densos, onde a estruturação prévia faz mais diferença.

### "Depois de ler, posso esquecer o texto"

O SQ3R já inclui revisão. Mas para retenção de longo prazo, combine com Repetição Espaçada: revise o material um dia depois, três dias depois, uma semana depois.

---

## Limitações

- **Exige disciplina**: pular as etapas de Survey e Question é tentador, mas reduz drasticamente a eficácia.
- **Não substitui outras técnicas**: SQ3R organiza a leitura, mas não substitui Active Recall, Repetição Espaçada ou prática deliberada.
- **Pode ser cansativo**: leitura ativa exige mais energia mental que leitura passiva. É normal sentir cansaço após 30-40 minutos.
- **Melhor para textos expositivos**: funciona melhor para livros didáticos e artigos acadêmicos. Para literatura, poesia ou textos criativos, outros métodos podem ser mais adequados.

---

## Como aplicar

1. **Antes de ler qualquer texto técnico, faça o Survey**: 2 a 5 minutos folheando, lendo títulos, subtítulos, resumos, figuras.
2. **Transforme cada título em pergunta**: escreva as perguntas em um caderno ou documento.
3. **Leia ativamente**: busque responder a cada pergunta enquanto lê. Sublinhe apenas o essencial.
4. **Feche o livro e recite**: após cada seção de 2 a 3 páginas, feche o livro e responda à pergunta em voz alta ou por escrito.
5. **Reflita sobre conexões**: pergunte-se "como isso se relaciona com o que já sei?".
6. **Revise ao final**: responda todas as perguntas do capítulo sem consultar.
7. **Agende revisões futuras**: coloque no seu sistema de Repetição Espaçada para revisar em 1, 3, 7 e 15 dias.

---

## Principais ideias

1. Ler tecnicamente não é passar os olhos — é um processo ativo de construção de significado.
2. O SQ3R (Survey, Question, Read, Recite, Review) estrutura a leitura em etapas antes, durante e depois.
3. O PQ4R adiciona Reflect (Refletir), conectando o novo conteúdo ao conhecimento existente.
4. A etapa mais importante é Recite — é o Active Recall aplicado à leitura.
5. O método parece mais lento, mas é mais rápido no longo prazo porque elimina a necessidade de releituras.
6. Combine leitura estruturada com Repetição Espaçada para retenção duradoura.

## Referências

- Adams, A. (1980). The SQ3R method: A review. *Journal of Reading*, 23(6), 524–528.
- Craik, F. I. M., & Lockhart, R. S. (1972). Levels of processing: A framework for memory research. *Journal of Verbal Learning and Verbal Behavior*, 11(6), 671–684. https://doi.org/10.1016/S0022-5371(72)80001-X
- Dunlosky, J., Rawson, K. A., Marsh, E. J., Nathan, M. J., & Willingham, D. T. (2013). Improving students' learning with effective learning techniques. *Psychological Science in the Public Interest*, 14(1), 4–58. https://doi.org/10.1177/1529100612453266
- Kintsch, W. (1994). Text comprehension, memory, and learning. *American Psychologist*, 49(4), 294–303. https://doi.org/10.1037/0003-066X.49.4.294
- Nist, S. L., Simpson, M. L., Olejnik, S., & Mealey, D. L. (1991). The relation between self-selected study processes and test performance. *American Educational Research Journal*, 28(4), 849–874. https://doi.org/10.3102/00028312028004849
- Robinson, F. P. (1946). *Effective study*. Harper & Brothers.
- Thomas, E. L., & Robinson, H. A. (1972). *Improving reading in every class: A sourcebook for teachers*. Allyn and Bacon.
- Vidal-Abarca, E., Salmerón, L., & Mañá, A. (2010). Individual differences in self-regulatory processes in reading. *Handbook of individual differences in reading*, 127–141.
`;

const mnemonicoContent = `
Você precisa lembrar de uma lista de itens para uma prova: os doze pares de nervos cranianos. São doze nomes complicados — olfativo, óptico, oculomotor, troclear, trigêmeo, abducente, facial, vestibulococlear, glossofaríngeo, vago, acessório, hipoglosso. Decorar isso parece impossível.

Agora experimente esta frase: "Olha, Ó, Oculomotor, Trocleia, Trigêmeo, Abduz, Faz, Vestibular, Glosso, Vago, Acessa, Hipoglosso." Não é perfeitamente elegante, mas funciona. Você criou uma **mnemônica** — uma âncora artificial que torna a informação mais fácil de lembrar.

Mnemônicos são uma das técnicas de memorização mais antigas da humanidade. Oradores gregos e romanos como Cícero usavam o **método dos loci** (palácio da memória) para decorar discursos inteiros sem anotações. Hoje, a ciência cognitiva confirma o que os antigos já sabiam: mnemônicos funcionam.

---

## O que são

Mnemônicos são estratégias cognitivas que transformam informações difíceis de lembrar em formatos mais facilmente recuperáveis. Eles funcionam criando associações artificiais entre o que você quer aprender e algo que já está firmemente estabelecido na memória.

Existem vários tipos de mnemônicos:

**Acrônimos e acrósticos**: transformar uma lista em uma palavra ou frase. Exemplo: "Vai Treinar Com Muito AFeto" para lembrar as vogais (a, e, i, o, u). Ou "Minha Vovó Tem Muitas Joias Só Usa Nos Pés" para a ordem dos planetas (Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno, Plutão).

**Rimas e canções**: "30 dias têm setembro, abril, junho e novembro" é uma mnemônica que você provavelmente aprendeu na infância e nunca esqueceu.

**Método dos loci (palácio da memória)**: associar itens a locais específicos em um ambiente familiar. É uma das técnicas mais poderosas e versáteis.

**Método da história**: criar uma narrativa absurda e visual que conecta os itens que você precisa lembrar.

---

## Como funciona

### O princípio do processamento elaborativo

Mnemônicos funcionam porque forçam seu cérebro a processar a informação de forma mais profunda e elaborada. Em vez de tentar gravar um nome solto (como "troclear"), você o conecta a uma palavra familiar ("trocleia") inserida em uma frase familiar.

Craik e Tulving (1975) demonstraram que informações processadas de forma elaborada — conectadas a conhecimentos prévios, visualizadas, associadas — são lembradas muito melhor do que informações processadas superficialmente.

### A potência das imagens visuais

O cérebro humano é excepcionalmente bom em processar e lembrar imagens. Paivio (1986) propôs a **teoria da codificação dual**: informações verbais e visuais são processadas em canais separados, e quando você codifica algo nos dois canais simultaneamente, cria duas trilhas de memória — o que dobra a chance de lembrar.

Mnemônicos que envolvem imagens vívidas, bizarras ou emocionais são particularmente eficazes porque ativam múltiplas regiões cerebrais simultaneamente (Paivio, 1986). Quanto mais bizarra a imagem, mais difícil de esquecer.

### O palácio da memória

O método dos loci explora a excepcional capacidade do cérebro humano para memorizar espaços físicos. Você conhece sua casa de cor: quantos cômodos tem, a posição dos móveis, a ordem das portas. Esse conhecimento espacial é extremamente estável e de longa duração.

Ao associar cada item que você quer lembrar a um local específico dentro de um ambiente familiar, você está usando o conhecimento espacial já consolidado como "gancho" para novos conhecimentos. Para recuperar a informação, você faz uma caminhada mental pelo ambiente e "vê" cada item no seu lugar.

Yates (1966) documenta que oradores gregos como Simônides de Ceos já usavam essa técnica no século V a.C. Após um desabamento durante um banquete, Simônides percebeu que conseguia lembrar onde cada convidado estava sentado — e desenvolveu o método a partir dessa observação.

---

## O que a ciência descobriu

### Mnemônicos e a memória de longo prazo

Uma meta-análise de Bellezza (1996) revisou décadas de pesquisa sobre mnemônicos e concluiu que eles produzem ganhos substanciais na retenção de informações factuais, com tamanhos de efeito grandes. Os efeitos são mais pronunciados para listas, vocabulário em novos idiomas e informações com estrutura hierárquica.

### O método dos loci em laboratório

Maguire e colaboradores (2003) estudaram o cérebro de campeões mundiais de memória. Surpreendentemente, os campeões não tinham QI mais alto nem diferenças estruturais no cérebro. O que os distinguia era o uso sistemático do método dos loci, combinado com treinamento intensivo.

Estudos de neuroimagem mostraram que, durante o uso do método dos loci, regiões cerebrais envolvidas na navegação espacial e na memória visual — como o hipocampo posterior e o córtex retrosplenial — são fortemente ativadas (Maguire et al., 2003).

### Mnemônicos em sala de aula

Scruggs e Mastropieri (1990) conduziram múltiplos estudos sobre o uso de mnemônicos na educação especial. Estudantes com dificuldades de aprendizagem que usavam mnemônicos tinham desempenho significativamente superior em testes de ciências e história comparados a grupos de controle que usavam métodos tradicionais.

### Limites dos mnemônicos

Uma descoberta importante é que, embora mnemônicos melhorem a memória para fatos específicos, eles não necessariamente melhoram a compreensão conceitual ou a transferência (Carney & Levin, 2000). Você pode lembrar perfeitamente que "troclear" é o quarto nervo craniano sem entender o que ele faz.

---

## Exemplos práticos

### Exemplo 1: Palácio da memória para uma prova de anatomia

Ana precisa lembrar os ossos do crânio para a prova. Ela usa sua própria casa como palácio da memória:

1. **Entrada**: o crânio (protegendo a entrada do corpo).
2. **Sala de estar**: o osso frontal (a "testa" da sala).
3. **Cozinha**: os parietais (como duas paredes da cozinha).
4. **Quarto**: o temporal (perto do travesseiro, onde o tempo passa).
5. **Banheiro**: o occipital (na parte de trás, como a descarga).

Cada osso está associado a uma imagem absurda no local correspondente. Na hora da prova, Ana faz a caminhada mental pela casa e "vê" cada osso.

### Exemplo 2: Aprendendo vocabulário em inglês

João precisa aprender a palavra "engulf" (engolir, tragar). Ele cria a imagem de um **golfinho que engole** uma bola inteira. "Engulf" soa como "engole golfinho". A imagem absurda fixa a palavra.

### Exemplo 3: Decorando fórmulas de física

Pedro precisa lembrar a fórmula da energia cinética (E = mv²/2). Ele cria a frase: "**E**ma, **m**inha **v**aca **v**oa **v**oando **2** vezes". A frase absurda ancora cada elemento da fórmula.

---

## Erros comuns

### "Mnemônico é para quem tem memória fraca"

Ao contrário. Campeões mundiais de memória usam mnemônicos sistematicamente. A técnica não substitui a memória — ela a potencializa.

### "Funciona para tudo"

Mnemônicos são excelentes para fatos isolados, listas, vocabulário. Mas não substituem a compreensão conceitual. Você pode usar mnemônicos para lembrar os passos de um processo, mas precisa entender o processo para aplicá-lo.

### "Basta criar a associação uma vez"

Mnemônicos precisam ser praticados, especialmente no início. A associação se fortalece com o uso — como qualquer outra memória.

### "Quanto mais simples, melhor"

Mnemônicos muito simples são facilmente esquecidos. O ideal é que a associação seja vívida, inusitada e até absurda — quanto mais marcante, mais durável.

---

## Limitações

- **Não substituem compreensão**: você pode lembrar de todos os termos sem entender o conceito. Use mnemônicos como complemento, não como substituto.
- **Exigem tempo para criar**: desenvolver associações eficazes leva tempo e criatividade. Para alguns conteúdos, o custo-benefício pode não valer a pena.
- **Podem confundir**: se você criar muitas mnemônicas, pode misturá-las. Use com moderação e mantenha um registro.
- **Melhor para fatos do que para procedimentos**: mnemônicos funcionam bem para informações declarativas (o quê), menos para habilidades procedurais (como).
- **Dependem de prática**: a mnemônica mais engenhosa do mundo não adianta se você não revisá-la com Repetição Espaçada.

---

## Como aplicar

1. **Identifique o que precisa ser memorizado**: listas, sequências, termos, fórmulas, nomes.
2. **Escolha o tipo de mnemônica**: acrônimo para listas curtas, palácio da memória para listas longas, história para sequências, imagem para vocabulário.
3. **Crie associações vívidas**: quanto mais bizarra, absurda ou emocional, melhor. O cérebro não esquece imagens marcantes.
4. **Use o palácio da memória**: escolha um ambiente que você conhece bem (sua casa, o trajeto até a faculdade). Associe cada item a um local específico nesse ambiente.
5. **Pratique a recuperação**: não apenas crie a mnemônica — teste-se para ver se consegue recuperar a informação apenas com o gatilho.
6. **Combine com Repetição Espaçada**: revise as mnemônicas em intervalos crescentes para consolidar na memória de longo prazo.

---

## Principais ideias

1. Mnemônicos são associações artificiais que tornam informações difíceis mais fáceis de lembrar.
2. Funcionam porque forçam o processamento elaborativo e ativam a codificação dual (verbal + visual).
3. O método dos loci (palácio da memória) explora a capacidade inata do cérebro para navegação espacial.
4. Campeões mundiais de memória usam mnemônicos — não há limite "natural" para a memória.
5. Mnemônicos são ótimos para fatos, mas não substituem compreensão conceitual.
6. Combine mnemônicos com Active Recall e Repetição Espaçada para melhores resultados.

## Referências

- Bellezza, F. S. (1996). Mnemonic methods to enhance storage and retrieval. In E. L. Bjork & R. A. Bjork (Eds.), *Memory* (pp. 345–380). Academic Press.
- Carney, R. N., & Levin, J. R. (2000). Mnemonic instruction, with a focus on transfer. *Journal of Educational Psychology*, 92(4), 783–790. https://doi.org/10.1037/0022-0663.92.4.783
- Craik, F. I. M., & Tulving, E. (1975). Depth of processing and the retention of words in episodic memory. *Journal of Experimental Psychology: General*, 104(3), 268–294. https://doi.org/10.1037/0096-3445.104.3.268
- Maguire, E. A., Valentine, E. R., Wilding, J. M., & Kapur, N. (2003). Routes to remembering: The brains behind superior memory. *Nature Neuroscience*, 6(1), 90–95. https://doi.org/10.1038/nn988
- Paivio, A. (1986). *Mental representations: A dual coding approach*. Oxford University Press.
- Scruggs, T. E., & Mastropieri, M. A. (1990). Mnemonic instruction for students with disabilities: A meta-analysis. *Learning Disability Quarterly*, 13(4), 271–280. https://doi.org/10.2307/1510361
- Yates, F. A. (1966). *The art of memory*. University of Chicago Press.
`;

const exercicioContent = `
Você está estudando há duas horas. A concentração começa a falhar. Os olhos pesam. As ideias não se fixam. O que você faz?

A maioria das pessoas pega o celular, come um lanche ou toma mais um café. Mas há uma estratégia muito mais eficaz, apoiada por décadas de pesquisa científica: **levantar e se movimentar**.

O exercício físico não é bom apenas para o corpo — é uma das intervenções mais poderosas que existem para melhorar a função cerebral, especialmente a memória, a atenção e a capacidade de aprender. E os benefícios não são apenas de longo prazo: mesmo uma única sessão de exercício pode melhorar seu desempenho cognitivo nas horas seguintes.

---

## O que é

A relação entre exercício físico e cognição é o campo de estudo que investiga como a atividade física afeta o funcionamento do cérebro, incluindo a memória, a atenção, o raciocínio e a aprendizagem.

Diferente de outras estratégias de estudo que atuam diretamente sobre processos cognitivos (como Active Recall), o exercício físico atua sobre os **substratos biológicos** da cognição: ele altera a química cerebral, a vascularização, a neurogênese e a inflamação — criando as condições biológicas ideais para o aprendizado.

---

## Como funciona

### Neurogênese e o fator BDNF

Uma das descobertas mais revolucionárias da neurociência moderna é que o cérebro adulto pode gerar novos neurônios — um processo chamado **neurogênese adulta**, que ocorre principalmente no hipocampo, a região central da memória e da aprendizagem.

O exercício aeróbico é o mais potente estimulador da neurogênese conhecido. Ele aumenta a produção de uma proteína chamada **BDNF** (Brain-Derived Neurotrophic Factor), que funciona como "fertilizante" para o cérebro: estimula o crescimento de novos neurônios, fortalece as sinapses existentes e protege os neurônios contra danos.

Cotman e Berchtold (2002) demonstraram que o BDNF aumenta significativamente após o exercício aeróbico e que esse aumento está diretamente correlacionado com melhorias na memória e na aprendizagem.

### Aumento do fluxo sanguíneo cerebral

O exercício físico aumenta o fluxo sanguíneo para o cérebro, especialmente para o hipocampo e o córtex pré-frontal — regiões críticas para a memória e funções executivas. Mais sangue significa mais oxigênio e mais nutrientes para os neurônios, além de remoção mais eficiente de resíduos metabólicos.

### Neurotransmissores e estado de alerta

O exercício aumenta os níveis de neurotransmissores essenciais para a cognição: dopamina (motivação, atenção), noradrenalina (alerta, foco) e serotonina (humor, bem-estar). Uma sessão de 20 minutos de exercício aeróbico de intensidade moderada eleva esses neurotransmissores por até 2 horas, criando uma "janela de oportunidade" para o estudo (Ratey & Hagerman, 2008).

### Redução da inflamação e do estresse

O exercício regular reduz a inflamação crônica de baixo grau e os níveis de cortisol (o hormônio do estresse), ambos prejudiciais à cognição. O estresse crônico encolhe o hipocampo e prejudica a formação de novas memórias — e o exercício é um dos antídotos mais eficazes.

---

## O que a ciência descobriu

### O estudo clínico de Erickson e colaboradores (2011)

Em um dos estudos mais importantes da área, Erickson e colaboradores (2011) acompanharam 120 adultos sedentários durante um ano. Metade fez exercícios aeróbicos (caminhada rápida) três vezes por semana; a outra metade fez apenas alongamento.

Resultado: o grupo aeróbico teve aumento de **2% no volume do hipocampo** — equivalente a reverter de 1 a 2 anos de declínio cerebral relacionado à idade. O grupo de alongamento teve declínio de 1,4%. O aumento do hipocampo foi diretamente correlacionado com melhorias na memória espacial.

### Exercício agudo e desempenho cognitivo

Hillman e colaboradores (2008) mostraram que uma única sessão de 20 minutos de caminhada rápida melhorou o desempenho de crianças e adultos em testes de atenção e controle cognitivo. Os efeitos foram observados imediatamente após o exercício e persistiram por até 1 hora.

### Exercício e desempenho acadêmico

Uma meta-análise de Fedewa e Ahn (2011) revisou 59 estudos sobre atividade física e desempenho acadêmico em crianças e adolescentes. A conclusão: a atividade física regular está associada a melhorias significativas em notas, testes padronizados e comportamento em sala de aula. Os efeitos foram maiores para exercícios aeróbicos de intensidade moderada a vigorosa.

### O efeito do exercício em diferentes faixas etárias

Os benefícios do exercício para a cognição são observados em todas as idades. Em crianças, melhora a atenção e o desempenho escolar (Hillman et al., 2008). Em adultos, melhora a memória e a produtividade (Ratey & Hagerman, 2008). Em idosos, retarda o declínio cognitivo e reduz o risco de demência (Erickson et al., 2011).

---

## Exemplos práticos

### Exemplo 1: A pausa ativa

Maria está estudando para uma prova de fisiologia há 1 hora. A concentração caiu. Em vez de pegar o celular, ela faz 15 minutos de caminhada rápida ao redor do quarteirão. Quando volta, os níveis de BDNF e neurotransmissores estão elevados, e ela consegue estudar com mais foco e retenção.

### Exemplo 2: Exercício antes do estudo

João tem uma sessão de estudo importante à noite. Ele faz 20 minutos de corrida leve ou bicicleta uma hora antes de começar. Durante o exercício, o BDNF aumenta. Na sessão de estudo, ele sente que a concentração está mais aguçada e que memoriza com mais facilidade.

### Exemplo 3: Rotina de exercício regular

Pedro estabeleceu uma rotina: 30 minutos de exercício aeróbico (caminhada, corrida, natação, bicicleta) três vezes por semana, sempre pela manhã. Com o tempo, ele percebe que sua capacidade de concentração durante o dia melhorou, que aprende mais rápido e que memoriza com mais facilidade.

---

## Erros comuns

### "Só exercício intenso funciona"

Exercícios de intensidade moderada (o equivalente a uma caminhada rápida, onde você ainda consegue conversar) já produzem benefícios cognitivos significativos. Não é necessário correr uma maratona.

### "Alongamento é suficiente"

Alongamento tem benefícios para a flexibilidade e recuperação muscular, mas não produz o mesmo aumento de BDNF, fluxo sanguíneo cerebral e neurotransmissores que o exercício aeróbico.

### "Melhor estudar do que fazer exercício"

Falso. O tempo gasto em exercício não é tempo perdido de estudo — é investimento na sua capacidade de aprender. Trinta minutos de exercício podem melhorar a eficiência das próximas 2 horas de estudo.

### "Os benefícios são só de longo prazo"

Benefícios agudos (imediatos) são tão reais quanto os crônicos. Uma única sessão de exercício melhora a cognição nas horas seguintes.

---

## Limitações

- **Intensidade importa**: exercício muito leve pode não produzir benefícios significativos; exercício extenuante pode prejudicar temporariamente a cognição devido à fadiga.
- **Momento do dia**: algumas pessoas têm melhor desempenho cognitivo após exercício matinal, outras à tarde. Descubra seu melhor horário.
- **Consistência**: os benefícios crônicos (como aumento do hipocampo) exigem exercício regular por meses. Não espere resultados com uma única sessão (embora os benefícios agudos apareçam imediatamente).
- **Lesões e limitações físicas**: nem todas as pessoas podem praticar exercícios aeróbicos. Nestes casos, consulte um profissional de saúde para alternativas.

---

## Como aplicar

1. **Faça uma pausa ativa**: a cada 1-2 horas de estudo, faça 10-15 minutos de exercício aeróbico moderado (caminhada, polichinelos, subir escadas).
2. **Exercite-se antes de estudar**: 20 minutos de exercício aeróbico antes de uma sessão de estudo melhoram a concentração e a retenção.
3. **Mantenha uma rotina regular**: 30 minutos de exercício aeróbico 3-5 vezes por semana produzem benefícios cumulativos para a cognição.
4. **Combine exercício com Active Recall**: após o exercício (quando o BDNF está elevado), pratique Active Recall do conteúdo estudado para maximizar a consolidação.
5. **Escolha atividades que você goste**: a consistência é mais importante que a intensidade. Caminhada, corrida, natação, dança, bicicleta — qualquer exercício aeróbico funciona.

---

## Principais ideias

1. O exercício aeróbico aumenta o BDNF (fator neurotrófico derivado do cérebro), que estimula a neurogênese e fortalece as sinapses.
2. Uma única sessão de exercício melhora a atenção e a memória por horas — a "janela de oportunidade" para o estudo.
3. O exercício regular aumenta o volume do hipocampo, a região central da memória.
4. Exercício de intensidade moderada (caminhada rápida) já produz benefícios significativos; não é necessário extenuação.
5. Trinta minutos de exercício não são tempo perdido — são investimento na capacidade de aprender.
6. Os efeitos são cumulativos: quanto mais consistente a rotina, maiores os benefícios cognitivos.

## Referências

- Cotman, C. W., & Berchtold, N. C. (2002). Exercise: A behavioral intervention to enhance brain health and plasticity. *Trends in Neurosciences*, 25(6), 295–301. https://doi.org/10.1016/S0166-2236(02)02143-4
- Erickson, K. I., Voss, M. W., Prakash, R. S., Basak, C., Szabo, A., Chaddock, L., ... & Kramer, A. F. (2011). Exercise training increases size of hippocampus and improves memory. *Proceedings of the National Academy of Sciences*, 108(7), 3017–3022. https://doi.org/10.1073/pnas.1015950108
- Fedewa, A. L., & Ahn, S. (2011). The effects of physical activity and physical fitness on children's achievement and cognitive outcomes. *Research Quarterly for Exercise and Sport*, 82(3), 521–535. https://doi.org/10.1080/02701367.2011.10599785
- Hillman, C. H., Erickson, K. I., & Kramer, A. F. (2008). Be smart, exercise your heart: Exercise effects on brain and cognition. *Nature Reviews Neuroscience*, 9(1), 58–65. https://doi.org/10.1038/nrn2298
- Ratey, J. J., & Hagerman, E. (2008). *Spark: The revolutionary new science of exercise and the brain*. Little, Brown Spark.
`;

const ambienteContent = `
Você senta para estudar. A mesa está limpa. O celular está no silêncio. A luz é adequada. A temperatura é agradável. Você começa a ler e percebe que o foco vem naturalmente — não há luta para começar, não há resistência.

Agora imagine o oposto: você senta em uma mesa bagunçada, com o celular vibrando ao lado, em um ambiente barulhento e mal iluminado. Você tenta se concentrar, mas o ambiente parece conspirar contra você.

A diferença entre os dois cenários não é sua força de vontade. É o **ambiente físico**. A ciência mostra que fatores ambientais que parecem sutis — iluminação, temperatura, ruído, organização, disposição dos móveis — têm efeitos profundos na capacidade de aprender.

---

## O que é

Ambiente de estudo físico é o conjunto de condições espaciais, sensoriais e ergonômicas no local onde você estuda. Inclui:

- **Iluminação**: tipo, intensidade e direção da luz.
- **Temperatura e ventilação**: conforto térmico e qualidade do ar.
- **Ruído e silêncio**: sons ambientes, música, isolamento acústico.
- **Organização e limpeza**: disposição dos materiais, ausência de desordem.
- **Ergonomia**: postura, altura da mesa e cadeira, posição da tela.
- **Privacidade e demarcação**: até que ponto o espaço é dedicado exclusivamente ao estudo.

Diferente de técnicas cognitivas, o ambiente atua de forma indireta, mas não menos importante: ele pode facilitar ou dificultar a entrada no estado de foco, aumentar ou diminuir a carga cognitiva, e sinalizar ou não ao cérebro que é hora de estudar.

---

## Como funciona

### A teoria dos gatilhos ambientais

Como discutido no capítulo sobre hábitos, o ambiente funciona como um **gatilho contextual** para o comportamento. Se você estuda sempre no mesmo local, na mesma mesa, com os mesmos materiais, seu cérebro associa aquele ambiente ao estudo. Com o tempo, o simples ato de sentar naquela mesa dispara automaticamente o modo focado.

Wood (2016) demonstrou que contextos estáveis são um dos preditores mais fortes da formação de hábitos. Quanto mais consistente o ambiente, mais rápido o comportamento se automatiza.

### Carga cognitiva ambiental

O ambiente também afeta a **carga cognitiva**. Um ambiente bagunçado, barulhento ou visualmente poluído compete pela sua atenção. Cada objeto fora do lugar, cada notificação visual, cada som inesperado consome uma fração da sua memória de trabalho — recursos que poderiam estar sendo usados para aprender.

Sweller (1988) chamou esse tipo de consumo desnecessário de **carga cognitiva extrínseca**. Minimizar a desordem ambiental é uma forma de liberar recursos mentais para o que realmente importa.

### O efeito da luz na cognição

A luz regula o ritmo circadiano através da supressão ou liberação de melatonina. Luz azul (como a de telas) pela manhã ajuda a manter o estado de alerta; luz amarelada à noite prepara o cérebro para o sono. A exposição a luz natural durante o dia está associada a melhor humor e desempenho cognitivo.

Chellappa e colaboradores (2011) mostraram que a exposição à luz azul durante tarefas cognitivas melhora o estado de alerta e a velocidade de processamento, enquanto a luz quente e amarelada promove relaxamento.

---

## O que a ciência descobriu

### Desordem e atenção

McMains e Kastner (2011) investigaram como a desordem visual afeta a atenção. Usando ressonância magnética funcional, descobriram que ambientes visualmente poluídos (com muitos objetos, cores, estímulos) aumentam a competição neural pela atenção, reduzindo a capacidade de focar no que é relevante.

Um estudo aplicado confirmou: estudantes que estudavam em mesas organizadas e livres de distrações tinham desempenho superior em testes de compreensão de leitura (Fisher et al., 2014).

### Ruído e desempenho cognitivo

O ruído ambiental tem efeitos complexos na cognição. Ruídos imprevisíveis (conversas ao fundo, batidas, buzinas) são mais prejudiciais do que ruídos contínuos e previsíveis (como um ventilador ou ar-condicionado). Isso ocorre porque ruídos imprevisíveis ativam o sistema de alerta do cérebro, desviando recursos da tarefa principal (Szalma & Hancock, 2011).

O chamado **efeito do ruído irrelevante** mostra que sons com variação acústica — especialmente a fala — interferem na memória de trabalho verbal, mesmo quando você não está prestando atenção neles (Banbury et al., 2001).

### Temperatura e conforto térmico

Seu cérebro gasta energia para manter a temperatura corporal. Ambientes muito frios ou muito quentes desviam recursos da cognição para a termorregulação. A faixa ideal para desempenho cognitivo está entre 21°C e 25°C (Lan et al., 2011). Abaixo de 18°C ou acima de 30°C, o desempenho cai significativamente.

### A importância da luz natural

Um estudo conduzido em escolas americanas mostrou que estudantes em salas de aula com mais luz natural tiveram notas 10-25% maiores do que estudantes em salas com iluminação artificial predominante (Heschong Mahone Group, 1999).

---

## Exemplos práticos

### Exemplo 1: o espaço de estudo dedicado

Maria transformou um canto do quarto em seu "espaço de estudo". A mesa tem apenas o necessário: notebook, caderno, caneta, um copo de água. O celular fica em outro cômodo. Quando ela senta ali, o cérebro sabe automaticamente que é hora de estudar. Não há negociação, não há resistência.

### Exemplo 2: A regra dos 30 segundos

João organiza sua mesa antes de começar a estudar. Ele sabe que cada objeto fora do lugar é uma distração potencial. Sua regra: "se leva mais de 30 segundos para encontrar o que preciso, o ambiente está mal organizado". Ele mantém os materiais de uso frequente ao alcance e guarda o que não está usando.

### Exemplo 3: Controle de ruído com fones

Pedro estuda em casa, onde há ruído de televisão e conversas. Ele usa fones com cancelamento de ruído ativo. Quando precisa de silêncio total, usa protetores auriculares. Quando o silêncio absoluto é incômodo, usa som ambiente ou ruído branco (como o som de chuva ou de um ventilador).

---

## Erros comuns

### "Posso estudar em qualquer lugar"

Tecnicamente, você pode. Mas não é eficiente. A qualidade do ambiente afeta diretamente a qualidade do estudo. Estudar na cama, no sofá ou em locais com trânsito de pessoas prejudica o foco e a consolidação.

### "Ambiente silencioso é sempre melhor"

Para algumas pessoas, o silêncio absoluto é desconfortável e até contraproducente. Sons ambientes suaves (chuva, vento, música instrumental) podem melhorar o foco para quem tem dificuldade com silêncio total.

### "Organização é frescura"

Desorganização não é uma questão estética — é uma questão cognitiva. O custo de procurar materiais, o desgaste visual da bagunça e a competição pela atenção são reais e mensuráveis.

### "Meu quarto já serve como espaço de estudo"

O ideal é que o espaço de estudo seja **exclusivo** ou, pelo menos, claramente demarcado. Se você estuda no mesmo lugar onde dorme, come ou assiste TV, seu cérebro não associa aquele local a foco.

---

## Limitações

- **Nem sempre é possível ter um espaço dedicado**: quem mora em espaços pequenos ou compartilhados pode ter limitações. Nesses casos, use demarcadores simbólicos (como acender uma luminária específica só para estudar).
- **Preferências individuais**: algumas pessoas funcionam melhor com ruído de fundo, outras com silêncio absoluto. Conheça seu perfil.
- **Custo**: móveis ergonômicos, iluminação adequada, fones com cancelamento de ruído — tudo isso custa dinheiro. Invista dentro das suas possibilidades, priorizando o essencial.
- **Ambiente não substitui técnica**: você pode ter o espaço de estudo mais bem projetado do mundo, mas se não usar Active Recall e Repetição Espaçada, o aprendizado será limitado.

---

## Como aplicar

1. **Escolha um local fixo de estudo**: mesmo que seja um canto da mesa da sala. A consistência do local fortalece o gatilho ambiental.
2. **Mantenha a mesa organizada**: apenas o material da sessão atual deve estar visível. Guarde o resto.
3. **Elimine distrações visuais e sonoras**: celular em outro cômodo, notificações desligadas, fones se necessário.
4. **Ajuste a iluminação**: prefira luz natural durante o dia. Use luz branca/azulada para estudo e evite luz muito fraca.
5. **Controle a temperatura**: mantenha entre 21°C e 25°C. Ventile o ambiente antes de começar.
6. **Invista em ergonomia básica**: cadeira que apoie as costas, mesa na altura correta, tela na altura dos olhos.
7. **Crie um ritual de início**: antes de estudar, organize a mesa, pegue o material, ajuste a iluminação. Esse ritual sinaliza ao cérebro que o estudo vai começar.

---

## Principais ideias

1. O ambiente físico funciona como gatilho contextual para o hábito de estudo.
2. Desordem visual aumenta a carga cognitiva e reduz a capacidade de focar.
3. Ruídos imprevisíveis (especialmente a fala) prejudicam a memória de trabalho verbal.
4. A temperatura ideal para o estudo está entre 21°C e 25°C.
5. Luz natural durante o dia melhora o humor e o desempenho cognitivo.
6. Um espaço dedicado e consistente é mais importante do que um espaço perfeito.

## Referências

- Banbury, S. P., Macken, W. J., Tremblay, S., & Jones, D. M. (2001). Auditory distraction and short-term memory: Phenomena and practical implications. *Human Factors*, 43(1), 12–29. https://doi.org/10.1518/001872001775992462
- Chellappa, S. L., Steiner, R., Blattner, P., Oelhafen, P., Götz, T., & Cajochen, C. (2011). Non-visual effects of light on melatonin, alertness and cognitive performance. *PLoS ONE*, 6(1), e16429. https://doi.org/10.1371/journal.pone.0016429
- Fisher, A. V., Godwin, K. E., & Seltman, H. (2014). Visual environment, attention allocation, and learning in young children. *Psychological Science*, 25(7), 1362–1370. https://doi.org/10.1177/0956797614533801
- Heschong Mahone Group. (1999). Daylighting in schools: An investigation into the relationship between daylighting and human performance. Report for the California Energy Commission.
- Lan, L., Lian, Z., & Pan, L. (2011). The effects of air temperature on office workers' well-being, workload and productivity. *Building and Environment*, 46(8), 1581–1588. https://doi.org/10.1016/j.buildenv.2011.01.021
- McMains, S., & Kastner, S. (2011). Interactions of top-down and bottom-up mechanisms in human visual cortex. *Journal of Neuroscience*, 31(2), 587–597. https://doi.org/10.1523/JNEUROSCI.3766-10.2011
- Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science*, 12(2), 257–285. https://doi.org/10.1207/s15516709cog1202_4
- Szalma, J. L., & Hancock, P. A. (2011). Noise effects on human performance: A meta-analytic synthesis. *Psychological Bulletin*, 137(4), 682–707. https://doi.org/10.1037/a0023987
- Wood, W. (2016). The psychology of habit. *Annual Review of Psychology*, 67, 17.1–17.26. https://doi.org/10.1146/annurev-psych-122414-033417
`;

const ansiedadeContent = `
Faltam cinco minutos para a prova. Você está sentado na sala, com a folha de questões virada para baixo à sua frente. Seu coração acelera. Suas mãos suam. Sua mente começa a disparar pensamentos: "não estudei o suficiente", "vou esquecer tudo", "todo mundo está mais preparado do que eu".

O sinal toca. Você vira a prova. A primeira questão é sobre um tópico que você estudou — e sua mente fica em branco. Você sabe que sabe, mas não consegue acessar. O pânico aumenta.

Essa experiência tem nome: **ansiedade de prova**. E não é apenas "nervosismo normal". Para muitos estudantes, é uma barreira real que prejudica o desempenho independentemente do preparo.

---

## O que é

A ansiedade de prova é uma resposta emocional negativa diante de situações de avaliação. Ela combina sintomas físicos (taquicardia, sudorese, tremores, náusea), cognitivos (pensamentos catastróficos, dificuldade de concentração, sensação de "branco") e comportamentais (evitação, procrastinação, fuga).

É importante distinguir a ansiedade normal — que pode até melhorar o desempenho ao aumentar o estado de alerta — da ansiedade patológica, que prejudica o desempenho. O ponto ideal de ansiedade, descrito pela **Lei de Yerkes-Dodson** (1908), é uma curva em U invertido: ansiedade muito baixa produz desinteresse; ansiedade moderada produz foco ideal; ansiedade muito alta produz paralisia.

---

## Como funciona

### O sequestro do córtex pré-frontal

Quando você percebe uma ameaça (e uma prova pode ser percebida como tal), o cérebro ativa a **amígdala**, o centro de processamento do medo. A amígdala dispara a resposta de luta-ou-fuga: libera cortisol e adrenalina, acelera o coração, redireciona sangue para os músculos.

O problema é que essa resposta, útil para ameaças físicas, prejudica o desempenho cognitivo. O córtex pré-frontal — responsável pela memória de trabalho, raciocínio e recuperação da memória — é parcialmente desativado durante a resposta de estresse. É por isso que você "dá branco": a informação está no cérebro, mas as vias de acesso estão temporariamente bloqueadas (Arnsten, 2009).

### Pensamentos catastróficos e o ciclo vicioso

A ansiedade de prova frequentemente se autoalimenta. Você sente o coração acelerar e pensa "estou muito nervoso, vou mal". Esse pensamento aumenta a ansiedade, que piora o desempenho, que confirma o pensamento. É o chamado **ciclo vicioso da ansiedade**.

### Memória dependente de contexto

A memória é dependente de contexto: você lembra melhor no mesmo ambiente onde aprendeu. Como as provas são quase sempre em ambientes diferentes daqueles onde você estudou, há uma quebra de contexto que pode prejudicar a recuperação. A ansiedade amplifica esse efeito ao estreitar o foco atencional.

---

## O que a ciência descobriu

### A meta-análise de Seipp (1991)

Seipp conduziu uma das primeiras meta-análises abrangentes sobre ansiedade de prova e desempenho acadêmico, envolvendo mais de 36.000 participantes. A conclusão: a correlação entre ansiedade de prova e desempenho é moderada e negativa — quanto maior a ansiedade, menor o desempenho. A relação é mais forte para testes de alta complexidade cognitiva.

### Intervenções de reavaliação cognitiva

Jamieson e colaboradores (2010) testaram uma intervenção simples e poderosa: antes de uma prova, pediram que estudantes escrevessem sobre seus sentimentos de ansiedade durante alguns minutos. O simples ato de nomear e reavaliar a ansiedade — interpretar a aceleração do coração como "energia para o desafio" em vez de "estou em perigo" — melhorou significativamente o desempenho.

### A técnica de escrever antes da prova

Um estudo de Ramirez e Beilock (2011) mostrou que estudantes que escreviam sobre suas preocupações por 10 minutos antes de uma prova tinham desempenho significativamente superior ao grupo controle. A escrita funcionou como uma "descarga" da preocupação, liberando a memória de trabalho para se concentrar na prova.

### Efeitos de intervenções de mindfulness

Bellinger e colaboradores (2015) mostraram que um treinamento breve de mindfulness (10 minutos por dia durante duas semanas) reduziu significativamente a ansiedade de prova e melhorou o desempenho. Os efeitos foram mediados pela redução da divagação mental durante a prova.

### Preparação e autoeficácia

A fonte mais poderosa de redução da ansiedade de prova é a **preparação adequada**. Quando você sabe que estudou com técnicas eficazes (Active Recall, Repetição Espaçada), sua confiança na própria capacidade aumenta, e a ansiedade diminui naturalmente (Schunk & Pajares, 2002).

---

## Exemplos práticos

### Exemplo 1: A técnica dos 10 minutos antes da prova

Maria chega à prova 15 minutos antes. Senta-se, respira fundo, e pega um papel. Durante 10 minutos, ela escreve tudo que está preocupando: "vou esquecer a fórmula", "a segunda questão é difícil", "não dormi bem". Depois, rasga o papel. Ao entrar na sala, sua mente está mais livre.

### Exemplo 2: Reavaliação da ansiedade

João sente o coração acelerar no início da prova. Em vez de pensar "estou nervoso, vou mal", ele pensa "meu coração está acelerado porque meu corpo está se preparando para um desafio. Isso é energia que vou usar para focar". Ele transforma o sinal de ameaça em sinal de ativação.

### Exemplo 3: Simulado realista

Pedro tem ansiedade severa de prova. Uma semana antes, ele faz um simulado nas mesmas condições da prova real: mesmo tempo, mesmo tipo de questão, sentado em uma mesa igual, com silêncio. A exposição gradual reduz o medo do ambiente de prova e aumenta a familiaridade.

---

## Erros comuns

### "Ansiedade de prova significa que não estudei o suficiente"

Não necessariamente. Muitos estudantes bem preparados têm ansiedade de prova. A ansiedade não é um termômetro de preparo — é uma resposta emocional que pode ser tratada independentemente.

### "Respirar fundo resolve tudo"

Respiração profunda ajuda a ativar o sistema parassimpático e reduzir a ativação fisiológica, mas não substitui estratégias cognitivas como reavaliação e preparação.

### "Basta ignorar a ansiedade"

Ignorar a ansiedade geralmente a piora. Aceitar e reavaliar é mais eficaz do que suprimir.

### "Ansiedade é sinal de fraqueza"

Ansiedade de prova é uma resposta biológica e cognitiva normal. Pessoas de alto desempenho também sentem ansiedade — a diferença é como elas a interpretam.

---

## Limitações

- **Ansiedade clínica**: se a ansiedade de prova é incapacitante e persistente, pode ser um transtorno de ansiedade que requer acompanhamento profissional. Técnicas de estudo ajudam, mas não substituem terapia.
- **Intervenções de curto prazo**: escrever antes da prova e reavaliar a ansiedade funcionam, mas os efeitos são maiores quando combinados com preparação consistente ao longo do semestre.
- **Nem toda ansiedade é prejudicial**: ansiedade moderada pode melhorar o desempenho. O objetivo não é eliminar a ansiedade, mas mantê-la em níveis funcionais.

---

## Como aplicar

1. **Prepare-se com técnicas eficazes**: estudar com Active Recall e Repetição Espaçada é a melhor defesa contra a ansiedade de prova. A confiança vem do preparo.
2. **Reavalie a ansiedade**: antes da prova, lembre-se: aceleração do coração, suor e tensão são sinais de que seu corpo está se preparando para um desafio, não de que algo está errado.
3. **Escreva antes da prova**: gaste 5 a 10 minutos escrevendo sobre suas preocupações. A escrita reduz a carga da memória de trabalho.
4. **Pratique mindfulness**: 5 a 10 minutos de respiração consciente por dia reduzem a ansiedade geral e melhoram o foco.
5. **Faça simulados realistas**: exponha-se gradualmente às condições da prova para reduzir o medo do ambiente.
6. **Durma bem na véspera**: uma boa noite de sono regula as emoções e melhora o acesso à memória.
7. **Chegue cedo**: chegar com antecedência reduz o estresse de imprevistos e permite que você se acomode com calma.

---

## Principais ideias

1. Ansiedade de prova não é falta de preparo — é uma resposta emocional que pode ser gerenciada.
2. A ansiedade excessiva desativa o córtex pré-frontal, prejudicando a memória de trabalho e a recuperação.
3. O ciclo vicioso da ansiedade (pensamento catastrófico → mais ansiedade → pior desempenho) pode ser interrompido com reavaliação cognitiva.
4. Escrever sobre as preocupações antes da prova libera a memória de trabalho e melhora o desempenho.
5. A preparação consistente com técnicas baseadas em evidências é a melhor proteção contra a ansiedade.
6. Ansiedade moderada é normal e pode até melhorar o desempenho; o objetivo não é eliminá-la, mas mantê-la em níveis funcionais.

## Referências

- Arnsten, A. F. T. (2009). Stress signalling pathways that impair prefrontal cortex structure and function. *Nature Reviews Neuroscience*, 10(6), 410–422. https://doi.org/10.1038/nrn2648
- Bellinger, D. B., DeCaro, M. S., & Ralston, P. A. S. (2015). Mindfulness, anxiety, and high-stakes mathematics performance. *Mindfulness*, 6(4), 732–741. https://doi.org/10.1007/s12671-014-0318-8
- Jamieson, J. P., Nock, M. K., & Mendes, W. B. (2010). Mind over matter: Reappraising arousal improves cardiovascular and cognitive responses to stress. *Journal of Experimental Psychology: General*, 139(3), 417–433. https://doi.org/10.1037/a0020391
- Ramirez, G., & Beilock, S. L. (2011). Writing about testing worries boosts exam performance in the classroom. *Science*, 331(6014), 211–213. https://doi.org/10.1126/science.1199427
- Schunk, D. H., & Pajares, F. (2002). The development of academic self-efficacy. In A. Wigfield & J. S. Eccles (Eds.), *Development of achievement motivation* (pp. 15–31). Academic Press.
- Seipp, B. (1991). Anxiety and academic performance: A meta-analysis of findings. *Anxiety Research*, 4(1), 27–41. https://doi.org/10.1080/08917779108248762
- Yerkes, R. M., & Dodson, J. D. (1908). The relation of strength of stimulus to rapidity of habit-formation. *Journal of Comparative Neurology and Psychology*, 18(5), 459–482. https://doi.org/10.1002/cne.920180503
`;

const grupoContent = `
Você está tentando entender um conceito difícil de estatística — digamos, o teorema central do limite. Você leu o capítulo, assistiu à videoaula, fez exercícios. Ainda não clicou.

Você encontra um colega que também está estudando o mesmo tópico e tentam entender juntos. Você explica o que entendeu até agora — mesmo que seja pouco. Seu colega faz perguntas. Você tenta responder. Em algum momento, na tentativa de explicar, algo se encaixa. A luz acende.

Essa experiência é familiar para quem já estudou em grupo. E a ciência confirma: aprender com outras pessoas não é apenas mais agradável — é mais eficaz.

---

## O que é

Aprendizagem em grupo é qualquer situação em que duas ou mais pessoas aprendem juntas, interagindo ativamente para construir conhecimento. Ela pode assumir várias formas:

**Estudo colaborativo**: os membros do grupo trabalham juntos para resolver problemas, discutir conceitos e esclarecer dúvidas. Todos contribuem e todos aprendem.

**Estudo cooperativo**: cada membro é responsável por uma parte do conteúdo e ensina aos demais. A aprendizagem depende da contribuição de cada um.

**Tutoria entre pares**: um estudante mais avançado ensina um colega (ou grupo) que está com dificuldades.

**Grupos de discussão**: os membros debatem um tópico, questionam, argumentam e constroem entendimento conjunto.

---

## Como funciona

### O efeito do ensino

Uma das descobertas mais robustas da ciência da aprendizagem é que **ensinar é uma das formas mais eficazes de aprender**. Quando você explica um conceito para outra pessoa, você precisa organizar o conhecimento, identificar lacunas, simplificar sem distorcer e responder a perguntas inesperadas.

Chi e colaboradores (1994) mostraram que estudantes que explicam o conteúdo para outros têm desempenho significativamente superior em testes de compreensão e transferência, comparados a estudantes que apenas estudam sozinhos. O ato de ensinar força o cérebro a processar a informação em um nível mais profundo.

### O conflito cognitivo produtivo

Quando duas pessoas com perspectivas diferentes discutem um conceito, surge o que os psicólogos chamam de **conflito cognitivo**. Você é forçado a confrontar suas próprias crenças, considerar alternativas e defender suas ideias. Esse processo de dissonância e resolução é um motor poderoso de aprendizado (Piaget, 1977).

Doise e Mugny (1984) demonstraram que crianças que resolvem problemas em pares com diferentes níveis de compreensão aprendem mais do que crianças que resolvem individualmente, mesmo quando o parceiro não é um "especialista".

### A zona de desenvolvimento proximal

Vygotsky (1978) propôs o conceito de **zona de desenvolvimento proximal** (ZDP): a distância entre o que uma pessoa consegue fazer sozinha e o que consegue fazer com ajuda. Em um grupo de estudo, colegas mais avançados funcionam como "andaimes" que ajudam os outros a alcançar o que não conseguiriam sozinhos.

O grupo também expõe você a estratégias que não consideraria sozinho. Ver como um colega resolve um problema ou aborda um conceito amplia seu repertório de estratégias de estudo.

### Motivação e responsabilidade

Estudar em grupo cria **responsabilidade mútua**. Saber que outras pessoas contam com você — que você precisa ter lido o material para a discussão — aumenta a probabilidade de você realmente estudar. É mais difícil procrastinar quando você sabe que vai encontrar o grupo às 19h.

Além disso, o grupo pode celebrar conquistas juntos, o que fortalece a sensação de competência e pertencimento — duas necessidades básicas da motivação intrínseca (Ryan & Deci, 2000).

---

## O que a ciência descobriu

### Meta-análise de Johnson e Johnson (1989)

Em uma das revisões mais abrangentes sobre o tema, David e Roger Johnson analisaram centenas de estudos comparando aprendizagem cooperativa com aprendizagem individual. As conclusões foram claras:

- A aprendizagem cooperativa produz resultados acadêmicos superiores à aprendizagem individual ou competitiva.
- Os efeitos são consistentes em diferentes disciplinas, níveis de ensino e tipos de tarefa.
- Além do desempenho acadêmico, a aprendizagem cooperativa melhora as relações interpessoais e a autoestima.

### O estudo de Springer, Stanne e Donovan (1999)

Esta meta-análise focou especificamente no ensino superior de ciências, tecnologia, engenharia e matemática (STEM). Os resultados mostraram que estudantes em ambientes de aprendizagem cooperativa tinham:

- Maior desempenho acadêmico (tamanho de efeito médio).
- Maior persistência nos cursos.
- Atitudes mais positivas em relação à disciplina.

### Efeitos da tutoria entre pares

Cohen e colaboradores (1982) revisaram dezenas de estudos sobre tutoria entre pares e encontraram efeitos positivos tanto para tutores quanto para tutorados. Os tutores se beneficiam particularmente, pois o ato de ensinar consolida e aprofunda o conhecimento.

### Aprendizagem em grupo online

Com o crescimento do ensino remoto, pesquisas recentes investigaram a eficácia da aprendizagem em grupo online. Uma meta-análise de Chen e colaboradores (2018) mostrou que grupos de estudo online podem ser tão eficazes quanto presenciais, desde que haja estrutura clara, comunicação síncrona e objetivos definidos.

---

## Exemplos práticos

### Exemplo 1: Grupo de estudo estruturado

Quatro estudantes de medicina formam um grupo de estudo para a prova de fisiologia. Cada semana, um membro é responsável por preparar e apresentar um tópico. Os outros três fazem perguntas, pedem esclarecimentos e tomam notas. Após a apresentação, resolvem questões juntos.

Regras do grupo:
- Todos leem o material antes da reunião.
- A apresentação dura no máximo 20 minutos.
- As perguntas são incentivadas e respeitadas.
- Ao final, cada um explica o tópico com suas próprias palavras.

### Exemplo 2: Estudo em pares com perguntas recíprocas

Dois amigos estão estudando para uma prova de história. Um faz perguntas ao outro sobre o período estudado. Quem responde não pode consultar o material. Quem pergunta pode pedir aprofundamento. Depois de 15 minutos, invertem os papéis.

Essa técnica combina Active Recall (responder sem consultar), ensino (explicar o conteúdo) e metacognição (identificar o que não sabe).

### Exemplo 3: Grupo de discussão online

Sete estudantes de programação criam um grupo no Discord para estudar algoritmos. Toda terça-feira, um membro compartilha um problema e os outros tentam resolver. Depois, discutem as soluções, comparam abordagens e aprendem uns com os outros. O grupo também compartilha recursos, dicas e motivam uns aos outros.

---

## Erros comuns

### "Grupo de estudo é conversa fiada"

Sem estrutura, um grupo de estudo pode virar um bate-papo improdutivo. A diferença entre um grupo eficaz e um grupo improdutivo é a presença de objetivos claros, papéis definidos e responsabilidade individual.

### "Melhor estudar sozinho, grupo distrai"

Grupo pode distrair se mal administrado. Mas um grupo bem estruturado é mais eficaz do que estudo individual para a maioria das pessoas. O segredo é combinar momentos de estudo individual (preparação) com momentos de interação grupal (discussão, ensino).

### "Só funciona para matérias de humanas"

Aprendizagem cooperativa é tão eficaz em STEM quanto em humanas. As meta-análises de Johnson & Johnson (1989) e Springer et al. (1999) mostram efeitos consistentes em todas as áreas.

### "Preciso dominar o assunto antes de ensinar"

Você não precisa ser especialista para ensinar. Explicar o que você sabe — mesmo que seja pouco — já produz benefícios. O ato de organizar e verbalizar o conhecimento revela lacunas e fortalece a compreensão.

---

## Limitações

- **Depende da preparação individual**: se ninguém leu o material antes, o grupo perde a eficácia. Cada membro precisa vir preparado.
- **Desequilíbrio de participação**: membros mais extrovertidos ou mais preparados podem dominar a discussão, enquanto outros ficam passivos. É preciso estrutura para garantir participação equilibrada.
- **Conflitos interpessoais**: diferenças de personalidade, ritmo e compromisso podem gerar atritos. Grupos funcionam melhor quando há normas claras de convivência.
- **Logística**: coordenar horários, locais e formatos pode ser desafiador, especialmente em grupos grandes.
- **Não substitui o estudo individual**: o grupo complementa, mas não substitui, o estudo individual com Active Recall, Repetição Espaçada e outras técnicas.

---

## Como aplicar

1. **Escolha membros comprometidos**: o grupo funciona quando todos têm objetivos compatíveis e disposição para contribuir.
2. **Defina uma estrutura clara**: dia, horário, local, duração e formato da sessão. Não deixe na improvisação.
3. **Estude antes de ir para o grupo**: a preparação individual é essencial. Se ninguém leu, o grupo não avança.
4. **Use a técnica do ensino**: cada membro ensina uma parte do conteúdo. Ensinar é a forma mais poderosa de aprender.
5. **Inclua momentos de Active Recall**: depois da discussão, testem uns aos outros com perguntas sem consultar o material.
6. **Avalie o funcionamento do grupo**: periodicamente, pergunte "estamos aprendendo? o que podemos melhorar?"
7. **Mantenha o grupo pequeno**: 3 a 5 pessoas é o tamanho ideal. Grupos maiores perdem eficiência.

---

## Principais ideias

1. Ensinar é uma das formas mais eficazes de aprender — organize grupos onde cada um ensina uma parte.
2. O conflito cognitivo — confrontar perspectivas diferentes — aprofunda a compreensão.
3. A zona de desenvolvimento proximal mostra que colegas mais avançados funcionam como "andaimes" para os demais.
4. A responsabilidade mútua do grupo reduz a procrastinação e aumenta a motivação.
5. Grupos pequenos (3-5 pessoas) com estrutura clara e preparação individual são os mais eficazes.
6. Aprendizagem em grupo não substitui o estudo individual — ela o complementa e potencializa.

## Referências

- Chen, G., Wang, Q., & Xu, J. (2018). A meta-analysis of the effects of online cooperative learning on academic achievement. *Educational Technology Research and Development*, 66(5), 1089–1111. https://doi.org/10.1007/s11423-018-9590-1
- Chi, M. T. H., de Leeuw, N., Chiu, M. H., & LaVancher, C. (1994). Eliciting self-explanations improves understanding. *Cognitive Science*, 18(3), 439–477. https://doi.org/10.1207/s15516709cog1803_3
- Cohen, P. A., Kulik, J. A., & Kulik, C. C. (1982). Educational outcomes of tutoring: A meta-analysis of findings. *American Educational Research Journal*, 19(2), 237–248. https://doi.org/10.3102/00028312019002237
- Doise, W., & Mugny, G. (1984). *The social development of the intellect*. Pergamon Press.
- Johnson, D. W., & Johnson, R. T. (1989). *Cooperation and competition: Theory and research*. Interaction Book Company.
- Piaget, J. (1977). *The development of thought: Equilibration of cognitive structures*. Viking.
- Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. *American Psychologist*, 55(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68
- Springer, L., Stanne, M. E., & Donovan, S. S. (1999). Effects of small-group learning on undergraduates in science, mathematics, engineering, and technology. *Review of Educational Research*, 69(1), 21–51. https://doi.org/10.3102/00346543069001021
- Vygotsky, L. S. (1978). *Mind in society: The development of higher psychological processes*. Harvard University Press.
`;

async function main() {
  const admin = await prisma.user.findUnique({ where: { email: "admin@evidencia.com" } });
  if (!admin) {
    console.log("Admin not found. Run seed first.");
    process.exit(1);
  }

  // Create categories
  const catIds: Record<string, string> = {};
  for (const cat of newCategories) {
    const created = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, description: cat.description },
      create: { name: cat.name, slug: cat.slug, description: cat.description },
    });
    catIds[cat.slug] = created.id;
  }

  console.log("Categories created/updated.");

  // Helper to get category id
  const c = (slug: string) => ({ connect: { id: catIds[slug] } });

  // Article 1: Hábitos e Rotina de Estudo
  if (catIds["habitos"]) {
    await prisma.article.upsert({
      where: { slug: "habitos-e-rotina-de-estudo" },
      update: { content: habitoContent },
      create: {
        title: "Hábitos e Rotina de Estudo: Como Transformar o Estudo em um Comportamento Automático",
        slug: "habitos-e-rotina-de-estudo",
        content: habitoContent,
        excerpt: "Cerca de 40% das nossas ações diárias são hábitos. Transformar o estudo em um hábito é a chave para aprender sem depender de força de vontade.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-13"),
        readingTime: 15,
        categories: c("habitos"),
      },
    });
    console.log("Article 'habitos-e-rotina-de-estudo' created/updated.");
  }

  // Article 2: Leitura Técnica (SQ3R / PQ4R)
  if (catIds["leitura-tecnica"]) {
    await prisma.article.upsert({
      where: { slug: "leitura-tecnica-sq3r-pq4r" },
      update: { content: leituraTecnicaContent },
      create: {
        title: "Leitura Técnica: SQ3R e PQ4R — Métodos Científicos para Ler e Aprender",
        slug: "leitura-tecnica-sq3r-pq4r",
        content: leituraTecnicaContent,
        excerpt: "Ler um texto técnico não é como ler um romance. Métodos estruturados como SQ3R e PQ4R transformam a leitura passiva em aprendizado ativo e profundo.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-14"),
        readingTime: 14,
        categories: c("leitura-tecnica"),
      },
    });
    console.log("Article 'leitura-tecnica-sq3r-pq4r' created/updated.");
  }

  // Article 3: Mnemônicos e Palácio da Memória
  if (catIds["mnemonicos"]) {
    await prisma.article.upsert({
      where: { slug: "mnemonicos-e-palacio-da-memoria" },
      update: { content: mnemonicoContent },
      create: {
        title: "Mnemônicos e o Palácio da Memória: Técnicas Milenares de Memorização",
        slug: "mnemonicos-e-palacio-da-memoria",
        content: mnemonicoContent,
        excerpt: "Oráculos gregos usavam o método dos loci para decorar discursos inteiros. Hoje a ciência confirma: mnemônicos são uma das ferramentas mais poderosas de memorização.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-15"),
        readingTime: 14,
        categories: c("mnemonicos"),
      },
    });
    console.log("Article 'mnemonicos-e-palacio-da-memoria' created/updated.");
  }

  // Article 4: Exercício Físico e Cognição
  if (catIds["exercicio-cognicao"]) {
    await prisma.article.upsert({
      where: { slug: "exercicio-fisico-e-cognicao" },
      update: { content: exercicioContent },
      create: {
        title: "Exercício Físico e Cognição: Como o Movimento Melhora o Aprendizado",
        slug: "exercicio-fisico-e-cognicao",
        content: exercicioContent,
        excerpt: "O exercício aeróbico aumenta o BDNF, estimula a neurogênese e melhora a memória. Uma única sessão de exercício cria uma janela de oportunidade para o estudo.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-16"),
        readingTime: 13,
        categories: c("exercicio-cognicao"),
      },
    });
    console.log("Article 'exercicio-fisico-e-cognicao' created/updated.");
  }

  // Article 5: Ambiente de Estudo Físico
  if (catIds["ambiente-estudo"]) {
    await prisma.article.upsert({
      where: { slug: "ambiente-de-estudo-fisico" },
      update: { content: ambienteContent },
      create: {
        title: "Ambiente de Estudo Físico: Como o Espaço Afeta a Aprendizagem",
        slug: "ambiente-de-estudo-fisico",
        content: ambienteContent,
        excerpt: "Iluminação, temperatura, ruído e organização do espaço têm efeitos profundos na capacidade de aprender. Pequenas mudanças no ambiente geram grandes ganhos de foco.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-17"),
        readingTime: 14,
        categories: c("ambiente-estudo"),
      },
    });
    console.log("Article 'ambiente-de-estudo-fisico' created/updated.");
  }

  // Article 6: Ansiedade de Prova
  if (catIds["ansiedade-provas"]) {
    await prisma.article.upsert({
      where: { slug: "ansiedade-de-prova" },
      update: { content: ansiedadeContent },
      create: {
        title: "Ansiedade de Prova: Por Que a Mente Dá Branco e Como Superar",
        slug: "ansiedade-de-prova",
        content: ansiedadeContent,
        excerpt: "Ansiedade excessiva desativa o córtex pré-frontal e bloqueia a memória. Entenda o mecanismo e aprenda técnicas baseadas em evidências para manter a calma e o foco.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-18"),
        readingTime: 13,
        categories: c("ansiedade-provas"),
      },
    });
    console.log("Article 'ansiedade-de-prova' created/updated.");
  }

  // Article 7: Aprendizagem em Grupo
  if (catIds["aprendizagem-grupo"]) {
    await prisma.article.upsert({
      where: { slug: "aprendizagem-em-grupo" },
      update: { content: grupoContent },
      create: {
        title: "Aprendizagem em Grupo: Por Que Estudar com Outras Pessoas é Mais Eficaz",
        slug: "aprendizagem-em-grupo",
        content: grupoContent,
        excerpt: "Ensinar é uma das formas mais poderosas de aprender. Grupos de estudo bem estruturados superam o estudo individual em praticamente todos os indicadores.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-19"),
        readingTime: 14,
        categories: c("aprendizagem-grupo"),
      },
    });
    console.log("Article 'aprendizagem-em-grupo' created/updated.");
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const motivoContent = `
Por que algumas pessoas parecem aprender tudo com facilidade, enquanto outras — igualmente inteligentes — travam, procrastinam e desistem? A resposta não está no QI, no talento ou na sorte. Está em uma pergunta anterior, que quase ninguém faz: **por que aprender?**

Antes de mergulharmos em técnicas de estudo, antes de falarmos sobre memória, atenção ou qualquer mecanismo cognitivo, precisamos enfrentar a questão fundamental: o que nos move a aprender? Sem responder a isso, todo o resto é irrelevante. Você pode ter as melhores ferramentas do mundo, mas se não houver motivo para usá-las, elas ficarão guardadas.

Este capítulo abre o livro não por acaso. A motivação não é um "extra" na aprendizagem — ela é a condição de possibilidade de todo o resto.

---

## Por que algumas pessoas aprendem e outras não?

Imagine dois estudantes no primeiro ano da faculdade. Os dois têm o mesmo QI, a mesma nota no vestibular, a mesma condição socioeconômica. O primeiro estuda com regularidade, busca entender além do que a prova pede, faz perguntas em aula. O segundo estuda na véspera, decora o mínimo necessário, e mal lembra o que estudou depois da prova.

O que explica a diferença?

Não é disciplina. Não é força de vontade. Não é "dom". É **motivação** — mas não do jeito que você imagina.

Motivação não é algo que você tem ou não tem. É algo que você pode cultivar, e que depende de condições específicas. A ciência mostra que a motivação para aprender não é um traço de personalidade, mas o resultado de necessidades psicológicas básicas sendo satisfeitas (Ryan & Deci, 2000).

---

## O que a ciência descobriu sobre motivação

### Autonomia, competência e pertencimento

Edward Deci e Richard Ryan passaram décadas desenvolvendo a **Teoria da Autodeterminação** (Self-Determination Theory — SDT), uma das teorias mais bem estabelecidas sobre motivação humana. Segundo eles, a motivação genuína — aquela que sustenta o aprendizado de longo prazo — depende de três necessidades básicas:

A **autonomia** é a sensação de que você escolhe o que faz. Não que você faça tudo que quer — mas que suas ações são suas, não impostas. Um estudante que escolheu o curso que faz porque realmente se interessa tem autonomia. Um que faz o curso porque os pais exigiram não tem.

A **competência** é a sensação de que você é capaz de aprender e melhorar. Não de que você já sabe tudo — mas de que, com esforço, você consegue progredir. Um estudante que enfrenta desafios no seu nível de habilidade sente competência. Um que enfrenta desafios muito acima da sua capacidade sente frustração.

O **pertencimento** (relatedness) é a sensação de conexão com outras pessoas. Aprendemos melhor quando nos sentimos parte de uma comunidade, quando compartilhamos descobertas, quando ensinamos e aprendemos com outros.

Quando essas três necessidades são satisfeitas, a motivação flui naturalmente. Quando alguma delas é frustrada, a motivação definha — mesmo que a pessoa seja inteligente e dedicada.

### Motivação intrínseca e extrínseca

A SDT também distingue entre diferentes tipos de motivação. A **motivação intrínseca** é fazer algo porque a atividade em si é interessante ou prazerosa. Você estuda porque gosta de aprender. A **motivação extrínseca** é fazer algo por consequências externas — nota, salário, aprovação.

A motivação intrínseca é mais poderosa para o aprendizado de longo prazo (Ryan & Deci, 2000). Estudantes intrinsecamente motivados persistem mais, lembram melhor e compreendem mais profundamente.

Mas isso não significa que a motivação extrínseca seja inútil. O problema é quando ela substitui a intrínseca — o chamado **efeito de superjustificação** (Lepper, Greene & Nisbett, 1973). Se você começa a estudar porque ama e alguém te oferece uma recompensa externa, sua motivação intrínseca pode diminuir. O aprendizado vira um meio para um fim, não um fim em si mesmo.

### Mentalidade de crescimento

Carol Dweck (2006) mostrou que a forma como você enxerga sua própria inteligência afeta profundamente sua motivação para aprender.

Pessoas com **mentalidade fixa** acreditam que a inteligência é um traço inato e imutável. Para elas, errar é sinal de incapacidade. Desafios são ameaças. Esforço é para quem não é talentoso. Resultado: evitam desafios, desistem facilmente e não aprendem com os erros.

Pessoas com **mentalidade de crescimento** acreditam que a inteligência pode ser desenvolvida com esforço e estratégia. Para elas, errar é parte do processo. Desafios são oportunidades. Esforço é o que faz o cérebro crescer. Resultado: abraçam desafios, persistem diante de obstáculos e aprendem mais.

Dweck e colaboradores demonstraram esses efeitos em dezenas de estudos, envolvendo desde crianças do ensino fundamental até estudantes universitários. Uma meta-análise confirmou que intervenções de mentalidade de crescimento produzem efeitos positivos, especialmente em estudantes com baixo desempenho (Sisk et al., 2018).

É importante notar, porém, que a mentalidade de crescimento não é uma solução mágica. Ela funciona quando combinada com estratégias de estudo eficazes e um ambiente que apoie o desenvolvimento. Dizer "você pode aprender qualquer coisa" sem dar as ferramentas para isso é contraproducente.

### Curiosidade e dopamina

A curiosidade não é apenas um estado emocional agradável — é um mecanismo biológico de aprendizagem. Quando encontramos algo novo ou inesperado, o cérebro libera dopamina, um neurotransmissor associado à recompensa e à motivação (Gruber, Gelman & Ranganath, 2014).

A dopamina cria um ciclo virtuoso: curiosidade → exploração → descoberta → prazer → mais curiosidade. É por isso que aprender algo novo pode ser viciante no bom sentido. Estudantes curiosos não precisam de força de vontade para estudar — eles estudam porque querem saber.

O problema é que o sistema educacional frequentemente mata a curiosidade ao priorizar memorização mecânica e avaliações padronizadas. Quando o aprendizado vira uma obrigação, a dopamina para de fluir.

---

## Exemplos práticos

### Como cultivar a motivação intrínseca

**Autonomia**: mesmo em um curso obrigatório, você pode criar escolhas. Defina seus próprios objetivos de aprendizado além do currículo. Escolha a ordem dos tópicos de estudo. Decida como vai estudar (leitura, vídeo, exercícios). Pequenas escolhas restauram a sensação de controle.

**Competência**: comece com desafios no seu nível. Se você é iniciante em programação, não tente construir um aplicativo completo no primeiro dia. Resolva problemas pequenos e aumente gradualmente a dificuldade. Cada pequena vitória alimenta a sensação de progresso.

**Pertencimento**: estude com outras pessoas. Participe de grupos, fóruns, comunidades. Explique o que aprendeu para alguém. Ensinar é uma das formas mais poderosas de aprender — e ainda conecta você a outros.

### Reescrevendo a narrativa

Se você está preso em uma mentalidade fixa ("não sou bom em matemática"), tente reformular: "não sou bom em matemática *ainda*". Essa simples palavra — "ainda" — abre a possibilidade de mudança (Dweck, 2006).

---

## Erros comuns

### "Motivação vem antes da ação"

Na maioria das vezes, é o contrário: a ação vem antes da motivação. Você não espera sentir vontade de estudar para começar. Você começa a estudar — mesmo sem vontade — e a motivação aparece durante o processo. É o que os psicólogos chamam de **ativação comportamental**.

### "Só motivação intrínseca importa"

A motivação extrínseca também pode ser útil, especialmente para tarefas que não são intrinsecamente interessantes. O segredo é *internalizar* a motivação extrínseca — ou seja, conectá-la a seus valores pessoais. "Preciso passar nesta matéria" vira "quero passar nesta matéria porque ela é importante para meu objetivo de me tornar engenheiro".

### "Pessoas motivadas nunca procrastinam"

Motivação não elimina procrastinação. Mesmo pessoas altamente motivadas procrastinam em tarefas específicas. A diferença é que pessoas com boa autorregulação reconhecem a procrastinação e usam estratégias para superá-la — como veremos no capítulo sobre tempo e motivação.

---

## Limitações

A motivação é necessária, mas não suficiente para aprender. Você pode estar altamente motivado e ainda assim falhar se não tiver estratégias de estudo eficazes, se não dormir o suficiente, se estiver sobrecarregado. A motivação abre a porta, mas são os mecanismos cognitivos que fazem o aprendizado acontecer.

Além disso, fatores estruturais — desigualdade socioeconômica, falta de acesso à educação de qualidade, discriminação — afetam profundamente a motivação. Não se trata apenas de "querer aprender", mas de ter as condições para isso.

---

## Como aplicar

1. **Conecte o conteúdo a seus valores**: pergunte-se "por que isso importa para mim?" Se não conseguir responder, busque ativamente uma conexão.
2. **Crie desafios no seu nível**: ajuste a dificuldade para que esteja sempre na zona de desafio moderado — nem tão fácil que entedia, nem tão difícil que frustra.
3. **Comemore pequenas vitórias**: cada conceito compreendido, cada problema resolvido, cada página entendida é progresso. Reconheça isso.
4. **Cultive a curiosidade**: antes de estudar um tópico, escreva três perguntas que você gostaria de responder. Depois, busque as respostas.
5. **Adote a linguagem do crescimento**: troque "não consigo" por "não consigo ainda". Troque "não sou bom nisso" por "posso melhorar com prática".
6. **Prepare o ambiente para ação**: a motivação segue a ação, não o contrário. Organize seu ambiente para tornar o início do estudo o mais fácil possível.

---

## Principais ideias

1. A motivação para aprender não é um traço fixo — depende de três necessidades básicas: autonomia, competência e pertencimento.
2. A motivação intrínseca (aprender pelo prazer de aprender) é mais sustentável que a extrínseca, mas ambas podem coexistir.
3. A mentalidade de crescimento — a crença de que a inteligência pode ser desenvolvida — melhora a persistência e o aprendizado.
4. A curiosidade aciona o sistema de dopamina, criando um ciclo virtuoso de aprendizado.
5. A ação vem antes da motivação, não depois. Começar é a parte mais importante.
6. Motivação sem estratégia não basta — os próximos capítulos vão construir as ferramentas cognitivas.

## Referências

- Deci, E. L., & Ryan, R. M. (2000). The "what" and "why" of goal pursuits: Human needs and the self-determination of behavior. *Psychological Inquiry*, 11(4), 227–268. https://doi.org/10.1207/S15327965PLI1104_01
- Dweck, C. S. (2006). *Mindset: The new psychology of success*. Random House.
- Gruber, M. J., Gelman, B. D., & Ranganath, C. (2014). States of curiosity modulate hippocampus-dependent learning via the dopaminergic circuit. *Neuron*, 84(2), 486–496. https://doi.org/10.1016/j.neuron.2014.08.060
- Lepper, M. R., Greene, D., & Nisbett, R. E. (1973). Undermining children's intrinsic interest with extrinsic reward: A test of the "overjustification" hypothesis. *Journal of Personality and Social Psychology*, 28(1), 129–137. https://doi.org/10.1037/h0035519
- Ryan, R. M., & Deci, E. L. (2017). *Self-determination theory: Basic psychological needs in motivation, development, and wellness*. Guilford Press.
- Sisk, V. F., Burgoyne, A. P., Sun, J., Butler, J. L., & Macnamara, B. N. (2018). To what extent and under which circumstances are growth mind-sets important to academic achievement? Two meta-analyses. *Psychological Science*, 29(4), 549–571. https://doi.org/10.1177/0956797617739704
`;

const procrastinationContent = `
Você senta para estudar. Abre o livro. Olha para a primeira página. Então, sem nenhuma decisão consciente, você abre o Instagram. Vinte minutos depois, você percebe o que fez, sente culpa, e volta ao livro. Lê um parágrafo. Seu celular vibra. Você olha. Não era nada importante. Mas a interrupção quebrou seu foco. Você decide que merece uma pausa de cinco minutos. Quarenta minutos depois, você ainda está vendo vídeos.

Soa familiar?

A procrastinação é um dos maiores obstáculos à aprendizagem. Não porque as pessoas sejam preguiçosas, mas porque a procrastinação é um fenômeno emocional, não um problema de força de vontade. Entender isso é o primeiro passo para superá-la.

---

## Por que procrastinamos?

A visão tradicional da procrastinação é moral: "procrastinar é preguiça". A pesquisa científica mostra algo completamente diferente.

Pesquisas conduzidas por Timothy Pychyl e seus colaboradores (Pychyl & Flett, 2012) revelaram que a procrastinação é, essencialmente, uma **falha na regulação emocional**. Quando você enfrenta uma tarefa que gera desconforto — tédio, ansiedade, frustração, insegurança — seu cérebro busca alívio imediato. A distração (redes sociais, TV, qualquer coisa) fornece esse alívio. A procrastinação não é fuga do trabalho — é fuga do *desconforto emocional* associado ao trabalho.

Esta descoberta é crucial porque muda completamente a estratégia de combate à procrastinação. Não se trata de "ter mais disciplina" ou "força de vontade". Trata-se de lidar com a emoção desconfortável antes que ela desencadeie a fuga.

---

## O que a ciência descobriu

### O viés do presente

O economista comportamental George Loewenstein (1996) mostrou que os seres humanos têm um **viés do presente** (present bias): valorizamos recompensas imediatas muito mais do que recompensas futuras, mesmo quando as futuras são objetivamente maiores.

Estudar hoje produz benefícios futuros (nota boa, aprendizado, carreira), mas custa desconforto presente. Navegar nas redes sociais produz prazer presente, mas custa benefícios futuros. O cérebro não faz uma análise racional de custo-benefício — ele simplesmente escolhe o prazer presente.

### A regra dos 5 segundos

Um dos achados mais práticos da pesquisa em procrastinação é que o momento crítico é o **início**. Se você conseguir começar uma tarefa, a probabilidade de continuar é muito alta. O problema não é continuar — é começar.

Mel Robbins popularizou a "regra dos 5 segundos": quando sentir o impulso de fazer algo, você tem 5 segundos para agir antes que o cérebro encontre desculpas para não fazer. O número exato não é científico, mas o princípio é: o início é o momento mais difícil, e qualquer coisa que reduza a barreira de entrada ajuda.

### Intenções de implementação

Peter Gollwitzer (1999) demonstrou que **intenções de implementação** — planos específicos do tipo "se-então" — aumentam drasticamente a probabilidade de executar uma ação. Em vez de "vou estudar amanhã", formule "se forem 19h, então vou sentar na escrivaninha e abrir o livro no capítulo 3".

Estudos mostram que intenções de implementação podem mais que dobrar as taxas de execução de comportamentos (Gollwitzer & Sheeran, 2006). A razão é que o plano "se-então" delega o controle da ação a gatilhos ambientais, em vez de depender da força de vontade.

### O papel do ambiente

Wendy Wood e colaboradores (Wood & Rünger, 2016) mostraram que grande parte do nosso comportamento é guiado por **hábitos** — respostas automáticas a contextos específicos. O ambiente funciona como um gatilho: se você sempre estuda no mesmo lugar, na mesma hora, com os mesmos materiais, o ambiente se torna o ponto de partida automático do estudo.

O oposto também é verdadeiro. Se seu ambiente de estudo é o mesmo onde você assiste Netflix e come, seu cérebro associa aquele lugar a distração, não a foco.

---

## Exemplos práticos

### A regra dos 2 minutos

Se uma tarefa leva menos de 2 minutos, faça-a imediatamente (Allen, 2001). Isso não se aplica diretamente ao estudo (que raramente leva 2 minutos), mas o princípio pode ser adaptado: comprometa-se a estudar por apenas 2 minutos. Na maioria das vezes, você continuará depois.

### O método Pomodoro

Já mencionado no capítulo sobre atenção, o Pomodoro é particularmente eficaz contra a procrastinação porque reduz o custo emocional de começar. Vinte e cinco minutos é um período curto o suficiente para não parecer ameaçador. E a pausa ao final funciona como recompensa imediata.

### A técnica do "não quebrar a corrente"

Jerry Seinfeld teria usado um calendário e um marcador vermelho: cada dia que ele escrevia piadas, fazia um X no calendário. O objetivo era não quebrar a corrente de X's. A técnica funciona porque transforma o foco da tarefa em si para a consistência do hábito.

### Design do ambiente

Se você quer estudar mais, torne o estudo a opção mais fácil disponível:
- Deixe o livro e o caderno abertos sobre a mesa
- Coloque o celular em outro cômodo
- Use bloqueadores de sites durante o horário de estudo
- Prepare o material na noite anterior

---

## Erros comuns

### "É preciso esperar a motivação chegar"

A motivação raramente chega antes da ação. Como vimos no capítulo anterior, a ação geralmente precede a motivação. Esperar "sentir vontade" de estudar é uma armadilha. Comece, mesmo sem vontade, e a motivação pode aparecer durante o processo.

### "Procrastinação é preguiça"

Procrastinação não é preguiça. Preguiça é não querer fazer algo. Procrastinação é *querer* fazer, mas não conseguir começar por causa do desconforto emocional. São fenômenos diferentes, com soluções diferentes.

### "Depois de procrastinar, compensar com sessões de estudo maratona"

Tentar compensar a procrastinação com longas sessões de estudo geralmente piora a situação. Elas aumentam o desconforto associado ao estudo, reforçando o ciclo de procrastinação. É melhor estudar um pouco todos os dias do que passar 8 horas no fim de semana.

---

## Limitações

A procrastinação às vezes é um sinal legítimo de que algo está errado. Se você procrastina sistematicamente em uma disciplina, pode ser um sinal de que o conteúdo está muito além do seu nível, que o ensino é inadequado, ou que você está no curso errado.

Procrastinação crônica também pode estar associada a condições como TDAH, ansiedade ou depressão. Nesses casos, técnicas de estudo ajudam, mas não substituem acompanhamento profissional.

---

## Como aplicar

1. **Use a regra dos 2 minutos adaptada**: comprometa-se a estudar por apenas 2 minutos. Depois, decida se continua.
2. **Crie intenções de implementação**: "Se [situação], então [ação]". Exemplo: "Se forem 19h, então vou abrir o livro e estudar por 25 minutos."
3. **Reduza a barreira de entrada**: prepare o ambiente na noite anterior — livro aberto, caderno na mesa, caneta pronta.
4. **Aumente a barreira para distrações**: coloque o celular em outro cômodo. Use bloqueadores de sites. Estude em um local silencioso.
5. **Use o Pomodoro**: 25 minutos de foco, 5 de pausa. Repita. Depois de 4 ciclos, faça uma pausa maior.
6. **Perdoe-se**: pesquisas mostram que estudantes que se perdoam por procrastinar têm menor probabilidade de procrastinar no futuro (Wohl et al., 2010). A culpa alimenta a procrastinação; o perdão a interrompe.
7. **Monitore seu progresso**: acompanhe quantos Pomodoros você completa por dia ou semana. O simples ato de medir melhora o desempenho.

---

## Principais ideias

1. Procrastinação não é preguiça — é uma falha na regulação emocional diante do desconforto.
2. O viés do presente faz com que valorizemos recompensas imediatas em detrimento das futuras.
3. Começar é a parte mais difícil. Reduzir a barreira de entrada é a estratégia mais eficaz.
4. Intenções de implementação ("se-então") automatizam a decisão de começar.
5. O ambiente é um gatilho poderoso para o comportamento. Organize-o a seu favor.
6. Perdoe-se pela procrastinação passada e concentre-se no que pode fazer agora.

## Referências

- Allen, D. (2001). *Getting things done: The art of stress-free productivity*. Penguin.
- Gollwitzer, P. M. (1999). Implementation intentions: Strong effects of simple plans. *American Psychologist*, 54(7), 493–503. https://doi.org/10.1037/0003-066X.54.7.493
- Gollwitzer, P. M., & Sheeran, P. (2006). Implementation intentions and goal achievement: A meta-analysis of effects and processes. *Advances in Experimental Social Psychology*, 38, 69–119. https://doi.org/10.1016/S0065-2601(06)38002-1
- Loewenstein, G. (1996). Out of control: Visceral influences on behavior. *Organizational Behavior and Human Decision Processes*, 65(3), 272–292. https://doi.org/10.1006/obhd.1996.0028
- Pychyl, T. A., & Flett, G. L. (2012). Procrastination and self-regulatory failure: An introduction to the special issue. *Journal of Rational-Emotive & Cognitive-Behavior Therapy*, 30(4), 203–212. https://doi.org/10.1007/s10942-012-0149-5
- Wohl, M. J., Pychyl, T. A., & Bennett, S. H. (2010). I forgive myself, now I can study: How self-forgiveness for procrastinating can reduce future procrastination. *Personality and Individual Differences*, 48(7), 803–808. https://doi.org/10.1016/j.paid.2010.01.029
- Wood, W., & Rünger, D. (2016). Psychology of habit. *Annual Review of Psychology*, 67, 289–314. https://doi.org/10.1146/annurev-psych-122414-033417
`;

const significadoContent = `
O que significa "entender" alguma coisa?

Pense em um conceito que você domina bem — pode ser um hobby, uma área profissional, um esporte. Agora pense em um conceito que você estudou mas nunca entendeu de verdade. Qual é a diferença entre os dois?

No primeiro caso, você não apenas *sabe* — você *vê* como as partes se conectam, como o conceito se relaciona com outros, quando e como aplicá-lo. No segundo caso, você talvez consiga repetir a definição, mas não consegue usá-la. As partes estão soltas.

Essa diferença é o que separa a **aprendizagem significativa** da **memorização mecânica**. E entender como o cérebro constrói significado é a chave para tornar todo o processo de estudo mais eficaz.

---

## O que são esquemas mentais?

O psicólogo britânico Frederic Bartlett, na década de 1930, foi um dos primeiros a propor que nosso conhecimento não é armazenado como uma coleção de fatos isolados, mas como **esquemas** — estruturas organizadas de conhecimento que nos permitem interpretar o mundo.

Um esquema é como uma pasta no computador mental. Quando você aprende algo novo, seu cérebro não cria um arquivo novo do zero. Ele tenta encaixar a nova informação em uma pasta existente, modificando a pasta se necessário.

Por exemplo, quando uma criança aprende o que é um "cachorro", ela cria um esquema: "animal de quatro patas, peludo, late". Quando ela vê um gato pela primeira vez, tenta encaixá-lo no esquema "cachorro" — mas não encaixa perfeitamente (não late, mia). O cérebro então cria um novo esquema, "gato", a partir da diferenciação do esquema anterior.

Esse processo de assimilação (encaixar novo conhecimento em esquemas existentes) e acomodação (modificar ou criar novos esquemas) foi descrito por Jean Piaget e continua sendo uma das ideias mais influentes da psicologia cognitiva.

---

## Como o cérebro constrói significado

### Conhecimento prévio e aprendizagem significativa

David Ausubel (1968) formulou a **teoria da aprendizagem significativa**: a aprendizagem ocorre quando uma nova informação se conecta a conceitos relevantes já existentes na estrutura cognitiva do estudante.

A famosa frase de Ausubel resume a ideia: "O fator mais importante que influencia a aprendizagem é o que o aluno já sabe. Descubra isso e ensine de acordo."

Isso significa que aprender algo novo é, essencialmente, um ato de **reorganização** do que você já sabe. Se você não tem conhecimentos prévios relevantes — ou se o novo conteúdo não consegue se conectar a eles — a aprendizagem será superficial e facilmente esquecida.

### Carga cognitiva: o gargalo da aprendizagem

John Sweller desenvolveu a **Teoria da Carga Cognitiva** (Cognitive Load Theory), que se tornou uma das frameworks mais influentes para entender como projetar instrução e estudo.

A ideia central é que nossa **memória de trabalho** tem capacidade muito limitada. Você só consegue manter cerca de 4 a 7 elementos conscientes por vez (Miller, 1956; Cowan, 2001). Qualquer informação que ultrapasse esse limite é perdida.

Sweller distingue três tipos de carga cognitiva:

A **carga intrínseca** é a dificuldade inerente ao conteúdo. Equações diferenciais são mais complexas que somar números. Essa carga não pode ser eliminada — é parte do que significa aprender aquele conteúdo.

A **carga extrínseca** é a dificuldade desnecessária criada pela forma como o conteúdo é apresentado. Letra ilegível, instruções confusas, informações irrelevantes, diagramas mal projetados. Essa carga pode — e deve — ser minimizada.

A **carga germânica** é o esforço mental dedicado a construir esquemas e automatizar conhecimento. É a carga *produtiva* — o trabalho que efetivamente gera aprendizado.

O segredo do estudo eficaz, segundo esta teoria, é: **minimize a carga extrínseca, gerencie a carga intrínseca e maximize a carga germânica**.

### O duplo canal: verbal e visual

Allan Paivio (1986) e Richard Mayer (2009) mostraram que o cérebro processa informações verbais (palavras escritas ou faladas) e visuais (imagens, diagramas, gráficos) em canais separados.

Quando você recebe informação pelos dois canais simultaneamente, sua capacidade de processamento aumenta — você pode usar parte da memória de trabalho para processar o texto e outra parte para processar a imagem. Isso é o **princípio da multimodalidade** (Mayer, 2009).

O problema é que a maioria dos estudantes estuda apenas com texto. Ler páginas e mais páginas sem nenhum suporte visual desperdiça metade do potencial de processamento do cérebro.

---

## O que a ciência descobriu

### Exemplos resolvidos vs. problemas para resolver

Uma das descobertas mais contraintuitivas da Teoria da Carga Cognitiva é sobre **exemplos resolvidos** (worked examples). Sweller e Cooper (1985) mostraram que estudantes que estudam exemplos resolvidos — problemas já solucionados com a explicação passo a passo — aprendem mais do que estudantes que tentam resolver problemas equivalentes sozinhos.

Isso parece contradizer o que vimos sobre Active Recall e prática ativa. A chave está no nível de conhecimento prévio. Para iniciantes, exemplos resolvidos são mais eficazes porque reduzem a carga cognitiva e permitem que o estudante se concentre em construir o esquema mental. Para estudantes mais avançados, a prática ativa se torna mais eficaz — o chamado **efeito de expertise reversa** (Kalyuga et al., 2003).

### Autoexplicação

Chi e colaboradores (1989) descobriram que estudantes que explicam a si mesmos o que estão aprendendo — seja verbalmente ou por escrito — compreendem mais profundamente. O ato de se autoexplicar força o cérebro a estabelecer conexões entre o novo conteúdo e o conhecimento existente, identificando lacunas e inconsistências.

### O papel dos organizadores prévios

Ausubel (1968) propôs o uso de **organizadores prévios** — materiais introdutórios apresentados antes do conteúdo principal, que fornecem uma "ponte" entre o que o estudante já sabe e o que está prestes a aprender. Um organizador prévio não é um resumo; é uma estrutura conceitual que prepara o terreno.

---

## Exemplos práticos

### Construindo esquemas na prática

Quando você estuda um tópico novo, siga este ciclo:
1. **Ative conhecimentos prévios**: antes de ler, pergunte-se "o que já sei sobre isso?"
2. **Busque a estrutura**: identifique os conceitos principais e como se relacionam.
3. **Use múltiplas representações**: leia, desenhe diagramas, explique em voz alta.
4. **Conecte o novo ao familiar**: encontre analogias com coisas que você já conhece.

### O poder das analogias

Uma boa analogia é uma ponte entre um conceito desconhecido e um conhecido. Por exemplo, comparar a memória de trabalho a uma mesa de trabalho — você só pode colocar algumas coisas sobre ela de cada vez. Se tentar colocar muita coisa, tudo cai.

### Exemplos resolvidos

Antes de tentar resolver problemas sozinho, estude exemplos resolvidos cuidadosamente. Cubra a solução e tente reproduzi-la passo a passo. Depois, resolva problemas similares sem ajuda.

---

## Erros comuns

### "Entender é conseguir repetir a definição"

Repetir a definição com suas próprias palavras é um bom começo, mas não é suficiente para garantir compreensão. A verdadeira compreensão envolve saber *quando* e *por que* aplicar o conceito, e como ele se relaciona com outros.

### "Estudar mais horas significa aprender mais"

Não se a carga cognitiva não estiver sendo gerenciada. Estudar por horas com um material mal projetado — cheio de informações irrelevantes, sem estrutura clara, sem exemplos — produz muito pouco aprendizado.

### "Aprendizagem significativa é só para matérias teóricas"

Aprendizagem significativa se aplica a qualquer domínio. Um cirurgião não apenas memoriza procedimentos — ele constrói esquemas que integram anatomia, fisiologia, técnica cirúrgica e experiência prévia.

---

## Limitações

Conhecimento prévio é uma faca de dois gumes. Se seu conhecimento prévio for incorreto (um **conceito alternativo** ou misconception), ele pode atrapalhar a aprendizagem do conteúdo correto. Nesse caso, identificar e confrontar o erro é o primeiro passo.

Além disso, a Teoria da Carga Cognitiva é bem estabelecida para conteúdos bem estruturados (como matemática e ciências), mas sua aplicação a domínios menos estruturados (como história ou literatura) é mais complexa.

---

## Como aplicar

1. **Ative conhecimentos prévios**: antes de cada sessão de estudo, gaste 2 minutos escrevendo o que você já sabe sobre o tópico.
2. **Use organizadores prévios**: comece com uma visão geral do tópico — um mapa conceitual simples, uma analogia, uma pergunta orientadora.
3. **Estude exemplos resolvidos**: especialmente em áreas procedimentais (matemática, programação), comece com exemplos passo a passo.
4. **Multiplique as representações**: não estude apenas com texto. Desenhe diagramas, crie mapas conceituais, explique em voz alta.
5. **Use analogias deliberadamente**: ao encontrar um conceito difícil, pergunte-se "isso é parecido com o quê?"
6. **Pratique a autoexplicação**: ao final de cada seção, feche o livro e explique o conteúdo para si mesmo.

---

## Principais ideias

1. O conhecimento é organizado em esquemas mentais — estruturas que conectam conceitos relacionados.
2. A aprendizagem significativa ocorre quando a nova informação se conecta a conhecimentos prévios relevantes.
3. A memória de trabalho é limitada. Gerenciar a carga cognitiva é essencial para aprender.
4. Use o duplo canal (verbal + visual) para maximizar o processamento disponível.
5. Exemplos resolvidos são mais eficazes para iniciantes; prática ativa para avançados.
6. Autoexplicação e analogias são ferramentas poderosas para construir significado.

## Referências

- Ausubel, D. P. (1968). *Educational psychology: A cognitive view*. Holt, Rinehart and Winston.
- Bartlett, F. C. (1932). *Remembering: A study in experimental and social psychology*. Cambridge University Press.
- Chi, M. T. H., Bassok, M., Lewis, M. W., Reimann, P., & Glaser, R. (1989). Self-explanations: How students study and use examples in learning to solve problems. *Cognitive Science*, 13(2), 145–182. https://doi.org/10.1207/s15516709cog1302_1
- Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. *Educational Psychologist*, 38(1), 23–31. https://doi.org/10.1207/S15326985EP3801_4
- Mayer, R. E. (2009). *Multimedia learning* (2nd ed.). Cambridge University Press.
- Miller, G. A. (1956). The magical number seven, plus or minus two: Some limits on our capacity for processing information. *Psychological Review*, 63(2), 81–97. https://doi.org/10.1037/h0043158
- Paivio, A. (1986). *Mental representations: A dual coding approach*. Oxford University Press.
- Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science*, 12(2), 257–285. https://doi.org/10.1207/s15516709cog1202_4
- Sweller, J., & Cooper, G. A. (1985). The use of worked examples as a substitute for problem solving in learning algebra. *Cognition and Instruction*, 2(1), 59–89. https://doi.org/10.1207/s1532690xci0201_3
`;

const sonoContent = `
Você passa o dia estudando. Lê, faz exercícios, revisa. Sente que aprendeu. Vai dormir. Na manhã seguinte, algumas coisas que pareciam claras na noite anterior fazem mais sentido. Outras, que estavam confusas, se encaixam. Você não estudou durante a noite — mas seu cérebro sim.

O sono não é um período de inatividade. É um dos momentos mais ativos e importantes da aprendizagem. Enquanto você dorme, seu cérebro está trabalhando: consolidando memórias, reorganizando conhecimento, limpando resíduos metabólicos, preparando-se para o dia seguinte.

Estudar sem dormir bem é como encher um balde furado. Você pode colocar horas de esforço, mas grande parte do que aprendeu vaza durante a noite.

---

## O que acontece no cérebro durante o sono

O sono não é um estado uniforme. Ele é composto por ciclos de aproximadamente 90 minutos, cada um contendo diferentes estágios.

O **sono NREM** (Non-Rapid Eye Movement) domina a primeira metade da noite. É um sono profundo, de ondas lentas, associado à consolidação de memórias declarativas — fatos, eventos, conceitos. Durante o sono NREM, o cérebro "reproduz" as experiências do dia em ritmo acelerado, transferindo informações do hipocampo (armazenamento temporário) para o córtex (armazenamento de longo prazo).

O **sono REM** (Rapid Eye Movement) domina a segunda metade da noite. É quando ocorrem a maioria dos sonhos. O sono REM está associado à consolidação de memórias procedurais — habilidades, procedimentos — e à integração emocional das experiências.

---

## Como o sono consolida a memória

### A teoria da consolidação ativa

O modelo mais aceito atualmente é o da **consolidação ativa dos sistemas** (Rasch & Born, 2013). Durante o sono NREM, o hipocampo "reproduz" as sequências neurais que foram ativadas durante o aprendizado. Essas reproduções — chamadas de **reativações** — ocorrem em ritmo acelerado e sincronizadas com oscilações lentas do córtex.

Essa sincronia permite que as informações sejam gradualmente transferidas do hipocampo (que tem capacidade limitada) para o córtex (que tem capacidade virtualmente ilimitada). É como se o hipocampo fosse uma mesa de trabalho temporária e o córtex, um arquivo permanente. Durante o sono, o conteúdo da mesa é organizado e guardado no arquivo.

### A hipótese da homeostase sináptica

Giulio Tononi e Chiara Cirelli (2014) propuseram uma função complementar do sono: a **homeostase sináptica**. Durante a vigília, as sinapses (conexões entre neurônios) ficam mais fortes à medida que aprendemos. Mas há um limite: se todas as sinapses ficarem igualmente fortes, o cérebro satura e não consegue mais aprender.

O sono NREM reduz seletivamente a força das sinapses — um "reset" que mantém o cérebro pronto para aprender no dia seguinte. As sinapses mais importantes (as que foram mais ativadas durante o aprendizado) são preservadas; as menos importantes são enfraquecidas.

O resultado líquido é que o sono não apenas consolida o que foi aprendido, mas também limpa o "ruído" e prepara o cérebro para novas aprendizagens.

---

## O que a ciência descobriu

### Estudos clássicos sobre sono e memória

Um dos experimentos mais conhecidos foi conduzido por Stickgold e colaboradores (2000). Participantes aprenderam uma tarefa de discriminação visual e foram testados após intervalos variados de sono. Aqueles que dormiram normalmente tiveram melhora significativa no desempenho — mesmo sem prática adicional. Aqueles que foram privados de sono não apresentaram melhora, mesmo após duas noites de recuperação.

### A importância do momento do sono

Ellenbogen e colaboradores (2006) mostraram que o sono melhora a memória declarativa mesmo quando ocorre várias horas após o aprendizado. O importante não é dormir imediatamente após estudar, mas dormir *antes* do teste de retenção.

Uma revisão sistemática de Diekelmann e Born (2010) confirmou que a consolidação dependente do sono ocorre tanto para memórias declarativas quanto procedurais, e que o efeito é robusto e replicável.

### Sono e criatividade

Wagner e colaboradores (2004) fizeram uma descoberta fascinante: participantes que dormiram após aprender um problema complexo tinham três vezes mais probabilidade de descobrir uma solução criativa — um "insight" — do que aqueles que permaneceram acordados. O sono não apenas consolida o que foi aprendido, mas também reorganiza o conhecimento de forma a permitir novas conexões.

### A privação de sono e o aprendizado

A privação de sono tem efeitos devastadores sobre o aprendizado. Walker (2009) mostrou que uma única noite de privação de sono reduz em até 40% a capacidade do hipocampo de formar novas memórias. É por isso que estudar a noite inteira antes de uma prova é tão contraproducente: você está tentando aprender com um cérebro que perdeu parte significativa de sua capacidade de codificação.

---

## Exemplos práticos

### A rotina de estudo ideal

1. Estude durante o dia.
2. Faça uma revisão leve antes de dormir.
3. Durma de 7 a 9 horas.
4. Na manhã seguinte, faça Active Recall do conteúdo estudado no dia anterior.

O sono entre o estudo e a recuperação fortalece a memória. A revisão matinal aproveita a consolidação que ocorreu durante a noite.

### Cochilos estratégicos

Cochilos de 20 a 90 minutos podem melhorar o aprendizado, especialmente se contiverem sono NREM. Um cochilo de 60 a 90 minutos após o estudo pode produzir benefícios de consolidação comparáveis a uma noite completa de sono (Mednick et al., 2003).

### A técnica de revisão pré-sono

Estudos mostram que revisar o conteúdo nos 30 minutos antes de dormir melhora a consolidação. O conteúdo revisado tem maior probabilidade de ser reativado durante o sono NREM.

---

## Erros comuns

### "Posso dormir pouco durante a semana e compensar no fim de semana"

A privação de sono tem efeitos cumulativos. Dormir 5 horas por noite durante a semana e 10 horas no sábado não recupera totalmente o déficit. A consolidação da memória ocorre em ciclos noturnos; memórias não consolidadas em uma noite podem ser perdidas.

### "Estudar até tarde da noite é mais produtivo"

A produtividade cai drasticamente após longos períodos de vigília. Você pode ter a sensação de que está rendendo, mas a qualidade do processamento cognitivo está comprometida. Além disso, o estudo tardio reduz o tempo de sono, prejudicando a consolidação.

### "Dormir é perda de tempo"

Dormir é investimento. Sete a nove horas de sono não são horas perdidas — são horas em que seu cérebro está ativamente consolidando o que você aprendeu. Sacrificar o sono para estudar mais é contraproducente.

---

## Limitações

- **Variação individual**: a quantidade ideal de sono varia de pessoa para pessoa. A maioria dos adultos precisa de 7 a 9 horas, mas alguns funcionam bem com 6 e outros precisam de 10.
- **Distúrbios do sono**: insônia, apneia e outros distúrbios afetam a consolidação da memória. Se você suspeita de um distúrbio do sono, procure ajuda médica.
- **O cochilo não substitui o sono noturno**: cochilos ajudam, mas não substituem os ciclos completos de sono noturno, que contêm a proporção ideal de NREM e REM.

---

## Como aplicar

1. **Durma de 7 a 9 horas por noite**: esta é a faixa ideal para a consolidação da memória. Abaixo de 6 horas, os prejuízos são significativos.
2. **Mantenha consistência**: durma e acorde nos mesmos horários, inclusive nos fins de semana. A regularidade fortalece o ciclo circadiano.
3. **Crie uma rotina pré-sono**: evite telas (celular, computador) 30 a 60 minutos antes de dormir. A luz azul suprime a melatonina, o hormônio do sono.
4. **Revise antes de dormir**: gaste 10 a 15 minutos revisando o conteúdo estudado no dia.
5. **Use cochilos estrategicamente**: cochilos de 20-30 minutos no início da tarde melhoram o estado de alerta. Cochilos de 60-90 minutos podem consolidar memórias.
6. **Evite estudar até tarde**: o ideal é parar de estudar pelo menos 1 hora antes de dormir para dar tempo ao cérebro de "desligar".
7. **Não sacrifique o sono por estudo adicional**: o benefício de uma hora extra de estudo raramente compensa o prejuízo de uma hora a menos de sono.

---

## Principais ideias

1. O sono não é um período de inatividade — é um dos momentos mais ativos da consolidação da memória.
2. Durante o sono NREM, o cérebro transfere informações do hipocampo para o córtex, transformando memórias temporárias em permanentes.
3. A homeostase sináptica durante o sono "limpa" as sinapses menos importantes, preparando o cérebro para novas aprendizagens.
4. A privação de sono reduz em até 40% a capacidade de formar novas memórias.
5. Dormir bem é tão importante quanto estudar — os dois processos são complementares e igualmente necessários.
6. Revisar o conteúdo antes de dormir e fazer Active Recall pela manhã formam a combinação ideal para a consolidação.

## Referências

- Diekelmann, S., & Born, J. (2010). The memory function of sleep. *Nature Reviews Neuroscience*, 11(2), 114–126. https://doi.org/10.1038/nrn2762
- Ellenbogen, J. M., Hubert, J. C., Stickgold, R., Dinges, D. F., & Thompson-Schill, S. L. (2006). Interfering with theories of sleep and memory: Sleep, declarative memory, and associative interference. *Current Biology*, 16(13), 1290–1294. https://doi.org/10.1016/j.cub.2006.05.024
- Mednick, S. C., Nakayama, K., & Stickgold, R. (2003). Sleep-dependent learning: A nap is as good as a night. *Nature Neuroscience*, 6(7), 697–698. https://doi.org/10.1038/nn1078
- Rasch, B., & Born, J. (2013). About sleep's role in memory. *Physiological Reviews*, 93(2), 681–766. https://doi.org/10.1152/physrev.00032.2012
- Stickgold, R., James, L., & Hobson, J. A. (2000). Visual discrimination learning requires sleep after training. *Nature Neuroscience*, 3(12), 1237–1238. https://doi.org/10.1038/81756
- Tononi, G., & Cirelli, C. (2014). Sleep and the price of plasticity: From synaptic and cellular homeostasis to memory consolidation and integration. *Neuron*, 81(1), 12–34. https://doi.org/10.1016/j.neuron.2013.12.025
- Walker, M. P. (2009). The role of slow wave sleep in memory processing. *Journal of Clinical Sleep Medicine*, 5(2 Suppl), S20–S26.
- Wagner, U., Gais, S., Haider, H., Verleger, R., & Born, J. (2004). Sleep inspires insight. *Nature*, 427(6972), 352–355. https://doi.org/10.1038/nature02223
`;

async function main() {
  const admin = await prisma.user.findUnique({ where: { email: "admin@evidencia.com" } });
  if (!admin) {
    console.log("Admin not found. Run seed first.");
    process.exit(1);
  }

  const catAprender = await prisma.category.findUnique({ where: { slug: "aprender-a-aprender" } });
  const catProd = await prisma.category.findUnique({ where: { slug: "produtividade" } });
  const catNeuro = await prisma.category.findUnique({ where: { slug: "neurociencia" } });
  const catPsi = await prisma.category.findUnique({ where: { slug: "psicologia-cognitiva" } });

  // Cap 1: Por que aprender?
  if (catAprender) {
    await prisma.article.upsert({
      where: { slug: "por-que-aprender" },
      update: { content: motivoContent },
      create: {
        title: "Por que Aprender? Motivação, Propósito e o Ponto de Partida",
        slug: "por-que-aprender",
        content: motivoContent,
        excerpt: "Antes de qualquer técnica de estudo, uma pergunta fundamental: o que nos move a aprender? Autonomia, competência, pertencimento — e por que a motivação importa mais que o QI.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-07"),
        readingTime: 14,
        categories: { connect: { id: catAprender.id } },
      },
    });
    console.log("Chapter 1 (motivation) created/updated.");
  }

  // Cap 4: Tempo e motivação (procrastinação)
  if (catProd) {
    await prisma.article.upsert({
      where: { slug: "tempo-e-motivacao-procrastinacao" },
      update: { content: procrastinationContent },
      create: {
        title: "Tempo e Motivação: Por Que Procrastinamos e Como Superar",
        slug: "tempo-e-motivacao-procrastinacao",
        content: procrastinationContent,
        excerpt: "Procrastinação não é preguiça — é uma falha na regulação emocional. Entenda o mecanismo e aprenda estratégias baseadas em evidências para começar (e continuar).",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-08"),
        readingTime: 13,
        categories: { connect: { id: catProd.id } },
      },
    });
    console.log("Chapter 4 (procrastination) created/updated.");
  }

  // Cap 5: Como o cérebro constrói significado
  if (catPsi) {
    await prisma.article.upsert({
      where: { slug: "como-o-cerebro-constroi-significado" },
      update: { content: significadoContent },
      create: {
        title: "Como o Cérebro Constrói Significado: Esquemas, Carga Cognitiva e Aprendizagem Significativa",
        slug: "como-o-cerebro-constroi-significado",
        content: significadoContent,
        excerpt: "O que significa entender algo? Esquemas mentais, teoria da carga cognitiva, duplo canal e o que a ciência diz sobre como transformar informação em conhecimento.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-09"),
        readingTime: 15,
        categories: { connect: { id: catPsi.id } },
      },
    });
    console.log("Chapter 5 (meaning) created/updated.");
  }

  // Cap 11: Sono e consolidação
  if (catNeuro) {
    await prisma.article.upsert({
      where: { slug: "sono-e-consolidacao-da-memoria" },
      update: { content: sonoContent },
      create: {
        title: "Sono e Consolidação da Memória: Por Que Dormir é Estudar",
        slug: "sono-e-consolidacao-da-memoria",
        content: sonoContent,
        excerpt: "Enquanto você dorme, seu cérebro está trabalhando — consolidando memórias, reorganizando conhecimento e se preparando para aprender mais. Entenda por que dormir bem é tão importante quanto estudar.",
        authorId: admin.id,
        status: "PUBLISHED",
        publishedAt: new Date("2026-07-10"),
        readingTime: 14,
        categories: { connect: { id: catNeuro.id } },
      },
    });
    console.log("Chapter 11 (sleep) created/updated.");
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

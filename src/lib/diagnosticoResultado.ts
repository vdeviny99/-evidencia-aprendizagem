export type ConstructKey =
  | "planejamento"
  | "gestaoTempo"
  | "metacognicao"
  | "buscaAjuda"
  | "aprendizagemAtiva"
  | "revisaoEstrategica"
  | "motivacao";

export type GroupKey = "planejamento" | "metacognicao" | "estrategiasAtivas";

export type MatrixId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type DiagnosticResult = {
  constructs: Record<ConstructKey, number>;
  groups: Record<GroupKey, number>;
  groupStatus: Record<GroupKey, boolean>;
  matrixId: MatrixId;
  styleName: string;
  styleDescription: string;
  interpretation: string[];
};

const cutoff = 2.8;

const itemConstructs: Record<number, ConstructKey> = {
  1: "planejamento",
  2: "metacognicao",
  3: "gestaoTempo",
  4: "buscaAjuda",
  5: "aprendizagemAtiva",
  6: "revisaoEstrategica",
  7: "motivacao",
  8: "planejamento",
  9: "metacognicao",
  10: "gestaoTempo",
  11: "buscaAjuda",
  12: "aprendizagemAtiva",
  13: "revisaoEstrategica",
  14: "motivacao",
  15: "planejamento",
  16: "metacognicao",
  17: "gestaoTempo",
  18: "buscaAjuda",
  19: "aprendizagemAtiva",
  20: "revisaoEstrategica",
  21: "motivacao",
  22: "planejamento",
  23: "metacognicao",
  24: "gestaoTempo",
  25: "aprendizagemAtiva",
  26: "revisaoEstrategica",
  27: "motivacao",
  28: "planejamento",
  29: "metacognicao",
  30: "aprendizagemAtiva",
  31: "revisaoEstrategica",
  32: "motivacao",
  33: "motivacao",
};

const invertedItems = new Set([21, 23, 24, 27, 28, 30, 31]);

export const matrixConfig: Record<MatrixId, { name: string; description: string; interpretation: string[] }> = {
  1: {
    name: "Cuca",
    description: "Você tende a aprender melhor quando combina planejamento, reflexão sobre o próprio estudo e estratégias ativas de aprendizagem.",
    interpretation: [
      "Pelos seus resultados, você tem alguns hábitos importantes que ajudam na hora de estudar. Sabe da importância do planejamento e possivelmente o aplica, monitora os próprios pensamentos enquanto aprende e parece utilizar estratégias de aprendizagem para praticar e revisar o conteúdo estudado. A análise sugere que você tem bons recursos, mas não garante que você os aplica de forma eficaz.",
      "O próximo passo é se observar e refletir se você tem usado seu conhecimento sobre como estudar bem a seu favor. Tente pensar na qualidade do seu planejamento, se não perde muito tempo na hora de se organizar ou se tem uma rotina puxada demais. Reflita se você usa bem seus momentos foco e descanso, alternando entre eles para sempre ter disposição mental nos estudos e não forçar demais/ficar travado.",
      "Você apresenta bons hábitos de forma geral. Aprender a aprender melhor é um processo e leva tempo, continue praticando e ao longo do tempo ficará ainda melhor. Bons estudos!",
    ],
  },
  2: {
    name: "Saci",
    description: "Você parece refletir sobre o próprio aprendizado e usar estratégias ativas, mas pode se beneficiar de mais planejamento e organização.",
    interpretation: [
      "Seus resultados sugerem que você consegue monitorar seu momento de aprendizado e verificar se está dando certo ou não. Também demonstra utilizar estratégias ativas de aprendizagem e sabe da importância dos momentos de revisão. Por outro lado, planejar as sessões de estudo e encaixa-las na sua rotina parece ser uma dificuldade.",
      "A dificuldade com planejamento pode vir de áreas diferentes, tente observar o tempo disponível que você tem para realizar as tarefas de sua rotina, se a procrastinação é um desafio ou se outras responsabilidades acabam entrando na frente do momento de estudo.",
      "Pensar o planejamento em etapas também ajuda, pense em um pré-planejamento, decida por quanto tempo vai estudar, o que vai estudar e como. Na etapa 2, apenas siga seu plano, estude pelo tempo determinado e tente permanecer assim sem distrações. Na etapa 3, avalie o que funcionou e o que não funcionou. O tempo de foco foi o suficiente? Teve alguma distração importante que possa ser evitada da próxima vez? Sua estratégia de estudo te ajudou?",
      "Você apresenta bons hábitos de estudo de forma geral. Ao estruturar melhor como costuma se planejar, terá avanços importantes. Aprender a aprender melhor é um processo e leva tempo, continue praticando e ao longo do tempo ficará ainda melhor. Bons estudos!",
    ],
  },
  3: {
    name: "Curupira",
    description: "Você tende a se organizar e praticar estratégias de estudo, mas pode precisar observar melhor como aprende e quando pedir ajuda.",
    interpretation: [
      "Seus resultados sugerem que você costuma se organizar e sabe da importância de um bom planejamento. Também demonstra utilizar estratégias ativas de aprendizagem e sabe da importância dos momentos de revisão. Por outro lado, apresenta dificuldades em monitorar o próprio pensamento e em verificar se suas estratégias de estudo são realmente eficazes.",
      "Dificuldades em perceber bem o que sabe sobre a matéria e se sentir perdido na hora do estudo pode vir de áreas diferentes. Vamos separar em 3 etapas, antes de estudar, durante o estudo e depois do estudo. Na etapa 1, pergunte a si mesmo, o que exatamente você precisa aprender hoje? O que você já sabe sobre isso? Qual parte parece mais difícil?",
      "Na etapa 2, durante o estudo, pare e pergunte: “Eu consigo explicar isso sem olhar?”, “eu estou entendendo ou só estou olhando pro material?” e “preciso mudar de estratégia?”. Na etapa 3, depois do estudo, cheque algumas coisas: você consegue resolver questões sobre o assunto? O que ainda está confuso? O que você deveria revisar? Qual foi seu principal erro?",
      "Aqui estão algumas ideias que podem te ajudar. Você apresenta bons hábitos de estudo de maneira geral. Aprender a aprender melhor é um processo e leva tempo, continue praticando e ao longo do tempo ficará ainda melhor. Bons estudos!",
    ],
  },
  4: {
    name: "Boitatá",
    description: "Você tende a planejar e refletir sobre o estudo, mas pode precisar transformar mais o conteúdo em prática ativa.",
    interpretation: [
      "Seus resultados sugerem que você costuma se organizar e sabe da importância de um bom planejamento. Também demonstra conseguir monitorar seu momento de aprendizado e verificar se suas estratégias estão dando certo ou não. Por outro lado, apresenta dificuldades em utilizar estratégias ativas de aprendizagem alinhadas com momento de revisão estratégicos.",
      "Como os resultados sugerem boa organização e monitoramento dos próprios processos no momento de foco, um próximo passo possível é alinhar, no planejamento, momentos de estudo em que você vai testar seu próprio conhecimento do assunto. Ou seja, ao se planejar, organize também um momento em que irá tentar lembrar de cabeça o que anotou, como se fosse uma prova. Tente explicar para pessoas próximas o que aprendeu ou o que está fazendo. Aplicativos como Anki, Quizlet, podem te ajudar a anotar o conteúdo estudado para revisões posteriores.",
      "O importante aqui é que não utilize métodos passivos de estudo, como releitura ou apenas rever o assunto. Busque tentar relembrar o que estudou e depois conferir se estava certo, mas apenas cole quando realmente não lembrar. Ao utilizar estratégias como essas, pode acontecer de ser mais difícil no começo, mas com certeza trará mais resultados a longo-prazo. Não desista!",
    ],
  },
  5: {
    name: "Caipora",
    description: "Você tende a ter alguma organização, mas pode precisar fortalecer reflexão sobre o aprendizado e estratégias ativas.",
    interpretation: [
      "Seus resultados sugerem que você costuma se organizar e sabe da importância de um bom planejamento. Por outro lado, apresenta dificuldades em monitorar seu momento de aprendizado e verificar se suas estratégias estão dando certo ou não. Além de não ter o hábito de utilizar estratégias ativas de aprendizagem alinhas à momentos estratégicos de revisão.",
      "O próximo passo aqui é usar do seu ponto forte de organização para que possa melhorar as outras áreas. Ao se organizar, divida o planejamento em 3 etapas, antes do estudo, durante o estudo e após o estudo.",
      "Na etapa 1, pergunte a si mesmo “O que exatamente eu tenho que aprender?”, “O que já sei sobre isso?”. “Qual estratégia eu deveria utilizar para aprender X assunto?”. Na etapa 2, durante o estudo, pare e pergunte: “Eu estou entendo o assunto ou só reconhecendo?”, “Eu consigo explicar esse assunto sem colar?”, “minha estratégia de estudo está alinhada com meus objetivos?”.",
      "Já na etapa 3, após a sessão de estudo, tente responder perguntas como: o que ainda está confuso? Como posso resolver os próximos problemas? O que eu devo revisar para as próximas vezes? Desta forma, conseguirá ter uma noção maior das suas dificuldades na hora de estudar e possivelmente achar respostas.",
      "Por último, planeje revisões sobre o assunto. Organize também um momento em que irá tentar lembrar de cabeça o que anotou, como se fosse uma prova. Tente explicar para pessoas próximas o que aprendeu ou o que está fazendo. Aplicativos como Anki, Quizlet, podem te ajudar a anotar o conteúdo estudado para revisões posteriores.",
      "O importante aqui é que não utilize métodos passivos de estudo, como releitura ou apenas rever o assunto. Busque tentar relembrar o que estudou e depois conferir se estava certo, mas apenas cole quando realmente não lembrar. Ao utilizar estratégias como essas, pode acontecer de ser mais difícil no começo, mas com certeza trará mais resultados a longo-prazo. Não desista!",
    ],
  },
  6: {
    name: "Iara",
    description: "Você tende a refletir sobre o aprendizado, mas pode precisar de mais planejamento e prática ativa para avançar.",
    interpretation: [
      "Seus resultados sugerem que você costuma monitorar seu momento de aprendizado e verificar se suas estratégias estão dando certo ou não. Por outro lado, apresenta dificuldades na parte de se planejar e cumprir as tarefas propostas. Além de não utilizar estratégias ativas de aprendizagem alinhadas à momentos de revisão.",
      "O próximo passo é utilizar da sua capacidade de perceber suas dificuldades no momento de estudo para que possa alinhar com estratégias de planejamento e revisão.",
      "A dificuldade com planejamento pode vir de áreas diferentes, tente observar o tempo disponível que você tem para realizar as tarefas de sua rotina, se a procrastinação é um desafio ou se outras responsabilidades acabam entrando na frente do momento de estudo.",
      "Pensar o planejamento em etapas pode ajudar, pense em um pré-planejamento, decida por quanto tempo vai estudar, o que vai estudar e como. Na etapa 2, apenas siga seu plano, estude pelo tempo determinado e tente permanecer assim sem distrações. Na etapa 3, avalie o que funcionou e o que não funcionou. O tempo de foco foi o suficiente? Teve alguma distração importante que possa ser evitada da próxima vez? Sua estratégia de estudo te ajudou?",
      "Por último, ao se planejar, organize também um momento em que irá tentar lembrar de cabeça o que anotou, como se fosse uma prova. Tente explicar para pessoas próximas o que aprendeu ou o que está fazendo. Aplicativos como Anki, Quizlet, podem te ajudar a anotar o conteúdo estudado para revisões posteriores.",
      "O importante aqui é que não utilize métodos passivos de estudo, como releitura ou apenas rever o assunto. Busque tentar relembrar o que estudou e depois conferir se estava certo, mas apenas cole quando realmente não lembrar. Ao utilizar estratégias como essas, pode acontecer de ser mais difícil no começo, mas com certeza trará mais resultados a longo-prazo. Não desista!",
    ],
  },
  7: {
    name: "Boto",
    description: "Você tende a aprender fazendo, mas pode precisar de mais planejamento e reflexão sobre o próprio processo.",
    interpretation: [
      "Seus resultados sugerem que você costuma aplicar estratégias ativas de aprendizagem alinhadas à momentos de revisão. Por outro lado, apresenta dificuldades em se planejar e monitorar seu próprio aprendizado de forma que te ajude a escolher as estratégias mais eficazes de aprender.",
      "Dificuldades em perceber bem o que sabe sobre a matéria e se sentir perdido na hora do estudo pode vir de áreas diferentes, assim como as dificuldades em se planejar podem ter varias razões, como procrastinação, rotina cheia demais, pouco tempo disponível, entre outros. Desta forma, vamos organizar um plano que consiste em 3 etapas, antes de estudar, durante o estudo e depois do estudo.",
      "Na etapa 1, pergunte a si mesmo, o que exatamente você precisa aprender hoje? O que você já sabe sobre isso? Qual parte parece mais difícil? Quanto tempo ira durar seu foco? Quando irá descansar?",
      "Na etapa 2, durante o estudo, pare e pergunte: “Eu consigo explicar isso sem olhar?”, “eu estou entendendo ou só estou olhando pro material?” e “preciso mudar de estratégia?”. Para além de se perceber durante a sessão de estudos, tente segui-la com o mínimo de distrações possível.",
      "Na etapa 3, depois do estudo, cheque algumas coisas: você consegue resolver questões sobre o assunto? O que ainda está confuso? O que você deveria revisar? Qual foi seu principal erro? Qual estratégia ativa irá utilizar para relembrar melhor depois?",
      "O importante aqui é que não utilize métodos passivos de estudo, como releitura ou apenas rever o assunto. Busque tentar relembrar o que estudou e depois conferir se estava certo, mas apenas cole quando realmente não lembrar. Ao utilizar estratégias como essas, pode acontecer de ser mais difícil no começo, mas com certeza trará mais resultados a longo-prazo. Não desista!",
    ],
  },
  8: {
    name: "Uirapuru",
    description: "Você pode estar em um momento de construção de rotina, precisando fortalecer planejamento, reflexão e estratégias ativas.",
    interpretation: [
      "Os resultados do diagnóstico sugerem que os hábitos de estudo avaliados aparecem com pouca frequência na sua rotina de estudos. Você apresenta dificuldades na parte de planejamento e no monitoramento dos seus próprios pensamentos e processos durante o estudo, além de não utilizar estratégias ativas de aprendizagem. A seção de boas práticas de estudo te ajudará bastante.",
      "Para melhorar nossa relação com a aprendizagem, vamos começar por planejamento e metacognição. Vamos testar uma forma de se organizar aqui, será em 3 etapas, antes do estudo, durante o estudo e após o estudo.",
      "Na etapa 1, pergunte a si mesmo, o que exatamente você precisa aprender hoje? O que você já sabe sobre isso? Qual parte parece mais difícil? Quanto tempo irá durar seu foco? Quando irá descansar? Como irá estudar? A ideia aqui é deixar claro o que você tem que fazer e como irá fazer, seu plano antes de executar o plano.",
      "Na etapa 2, durante o estudo, pare e pergunte: “Eu consigo explicar isso sem colar?”, “eu estou entendendo ou só estou olhando pro material?” e “preciso mudar de estratégia?”. Para além de se perceber durante a sessão de estudos, tente segui-la com o mínimo de distrações possível.",
      "Na etapa 3, depois do estudo, cheque algumas coisas: você consegue resolver questões sobre o assunto? O que ainda está confuso? O que você deveria revisar? Qual foi seu principal erro? Qual estratégia ativa irá utilizar para relembrar melhor depois? Quais você acha que são seus próximos passos?",
      "Aqui estão algumas ideias que podem te ajudar. Ao se permitir testar estratégias novas, também aprenderá como estudar melhor! Aprender a aprender de maneira eficaz é um processo e leva tempo, continue praticando e ao longo do tempo ficará ainda melhor. Bons estudos!",
    ],
  },
};

function average(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function correctedScore(itemId: number, value: number) {
  return invertedItems.has(itemId) ? 4 - value : value;
}

function getMatrixId(planejamentoOk: boolean, metacognicaoOk: boolean, estrategiasOk: boolean): MatrixId {
  if (planejamentoOk && metacognicaoOk && estrategiasOk) return 1;
  if (!planejamentoOk && metacognicaoOk && estrategiasOk) return 2;
  if (planejamentoOk && !metacognicaoOk && estrategiasOk) return 3;
  if (planejamentoOk && metacognicaoOk && !estrategiasOk) return 4;
  if (planejamentoOk && !metacognicaoOk && !estrategiasOk) return 5;
  if (!planejamentoOk && metacognicaoOk && !estrategiasOk) return 6;
  if (!planejamentoOk && !metacognicaoOk && estrategiasOk) return 7;
  return 8;
}

export function scoreToPercent(score: number) {
  return Math.round((score / 4) * 100);
}

export function calculateDiagnosticResult(answers: Record<number, number>): DiagnosticResult {
  const scoresByConstruct: Record<ConstructKey, number[]> = {
    planejamento: [],
    gestaoTempo: [],
    metacognicao: [],
    buscaAjuda: [],
    aprendizagemAtiva: [],
    revisaoEstrategica: [],
    motivacao: [],
  };

  Object.entries(itemConstructs).forEach(([itemIdText, construct]) => {
    const itemId = Number(itemIdText);
    const value = answers[itemId];
    if (typeof value === "number") {
      scoresByConstruct[construct].push(correctedScore(itemId, value));
    }
  });

  const constructs = Object.fromEntries(
    Object.entries(scoresByConstruct).map(([construct, scores]) => [construct, scores.length ? average(scores) : 0]),
  ) as Record<ConstructKey, number>;

  const groups = {
    planejamento: average([constructs.planejamento, constructs.gestaoTempo]),
    metacognicao: average([constructs.metacognicao, constructs.buscaAjuda, constructs.motivacao]),
    estrategiasAtivas: average([constructs.aprendizagemAtiva, constructs.revisaoEstrategica]),
  };

  const groupStatus = {
    planejamento: groups.planejamento >= cutoff,
    metacognicao: groups.metacognicao >= cutoff,
    estrategiasAtivas: groups.estrategiasAtivas >= cutoff,
  };

  const matrixId = getMatrixId(groupStatus.planejamento, groupStatus.metacognicao, groupStatus.estrategiasAtivas);
  const matrix = matrixConfig[matrixId];

  return {
    constructs,
    groups,
    groupStatus,
    matrixId,
    styleName: matrix.name,
    styleDescription: matrix.description,
    interpretation: matrix.interpretation,
  };
}

export const learningGuides = [
  { id: "cuca", name: "Cuca", quote: "Toda boa magia começa com preparo.", realm: "Jardim das ideias", color: "#6f5baa", pale: "#eee6fa", ink: "#493976" },
  { id: "saci", name: "Saci", quote: "O vento aprende enquanto se move.", realm: "Vale dos ventos", color: "#b95032", pale: "#fce9de", ink: "#873b25" },
  { id: "curupira", name: "Curupira", quote: "Quem lê as pegadas encontra o caminho.", realm: "Trilha das descobertas", color: "#327259", pale: "#dfefe4", ink: "#24513f" },
  { id: "boitata", name: "Boitatá", quote: "A luz aparece quando o passo começa.", realm: "Clareira de luz", color: "#a46815", pale: "#fff1cf", ink: "#785013" },
  { id: "caipora", name: "Caipora", quote: "A floresta ensina no seu próprio ritmo.", realm: "Floresta dos caminhos", color: "#557448", pale: "#e8edda", ink: "#3c5432" },
  { id: "iara", name: "Iara", quote: "Mergulhar também é uma forma de entender.", realm: "Rio da reflexão", color: "#277c83", pale: "#ddf0ed", ink: "#215b60" },
  { id: "boto", name: "Boto", quote: "Aprender também acontece no encontro.", realm: "Encontro das águas", color: "#a54e75", pale: "#f7e4ed", ink: "#7b3655" },
  { id: "uirapuru", name: "Uirapuru", quote: "Antes do canto, vem a escuta.", realm: "Bosque da escuta", color: "#3e729a", pale: "#e2edf7", ink: "#305775" },
] as const;

export type LearningGuide = (typeof learningGuides)[number];

// Guides mark journey chapters, never predicted outcomes or scoring dimensions.
export function guideForQuestion(index: number) {
  return learningGuides[Math.min(7, Math.floor(index / 4))];
}

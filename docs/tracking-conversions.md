# Mapa de tracking e conversões da EdukaCuca

Escopo: candidato NEL-542, branch `review/nel-542-ze-validation`. Conferido no código em 2026-10-12. Este mapa descreve o que está implementado e separa as próximas instrumentações. Não confirma recebimento nos gerenciadores de anúncios nem altera configurações de campanhas.

**Conversão principal recomendada para o gratuito:** um diagnóstico válido salvo pelo servidor. **Conversões secundárias:** clique para WhatsApp e mensagem de contato salva. Clique em CTA, início da jornada e visualização do resultado são etapas de navegação; pagamento só pode ser contado depois de confirmação financeira.

## 1. O que existe hoje

| Ponto da experiência | Evento ou registro atual | Gatilho exato | Destino | Consentimento no código | Significado e limite |
| --- | --- | --- | --- | --- | --- |
| CTA gratuito, em qualquer página | `diagnostic_free_click` | Clique em link cuja pathname é `/diagnostico/captura` | `/api/site-event` → `SiteEvent`; contador no admin | Listener próprio sem verificação de consentimento | Intenção de começar. Pode repetir; não representa cadastro nem conclusão. |
| WhatsApp da EdukaCuca, em qualquer página | `whatsapp_click` | Clique em link `wa.me` cujo caminho contém o número configurado | `/api/site-event` → `SiteEvent`; contador no admin | Listener próprio sem verificação de consentimento | Clique de saída. Não confirma conversa, envio de comprovante ou venda. |
| Página `/aulas` | Meta `PageView` | Rota `/aulas` e escolha de marketing aceita | Pixel Meta no navegador | Gated pela escolha local Meta/Google | Visualização da página; guard por pathname, não conversão de lead. |
| WhatsApp em `/aulas` | Meta `Contact`, `content_name=aulas_whatsapp` | Clique no WhatsApp após aceitação de marketing nessa rota | Pixel Meta | Escolha aceita e `/aulas` | Evento publicitário de clique. Não significa contato respondido. |
| Mesmo WhatsApp em `/aulas` | Google Ads `conversion` | Mesmo clique aceito | Google Ads, `send_to=Ads ID/label` configurados | Wrapper exige escolha aceita e `/aulas` | A mesma ação do `Contact`, registrada em outra plataforma. Não somar as plataformas como dois leads. |
| Tag Google global | `gtag('config', Ads ID)` | Layout após interação, fora do wrapper de `/aulas` | Tag Google Ads | Carregamento global sem gate equivalente | Gap existente: não é possível garantir ausência de inicialização antes da escolha. Não existe `G-...` de GA4 configurado neste código. |
| Envio gratuito confirmado pelo servidor | `DiagnosticSubmission`, `plan=free`; evento `diagnostic_free_completed` | POST `/api/diagnostico` válido, depois de salvar submissão | Banco; evento próprio; admin conta submissões `plan=free` | API exige `consent=true`; cliente envia literal `true` após fluxo de termos | Diagnóstico salvo. Evento é best effort; erro no evento não desfaz a submissão. Não garante envio de e-mail ou abertura do resultado. |
| Envio pago confirmado pelo servidor | `DiagnosticSubmission`, `plan=paid`; `diagnostic_paid_completed` | Mesmo POST com plano pago | Banco; evento próprio; admin conta submissões `plan=paid` | Mesmo consentimento obrigatório | Diagnóstico do plano pago salvo. **Não é pagamento confirmado.** Path do evento é fixado como `/diagnostico/completo/captura`, embora as respostas sejam dadas em `/diagnostico/teste`. |
| Formulário `/contato` | `ContactMessage` | POST `/api/contato` válido, salvo, retorno 201 | Banco | Sem gate adicional de marketing nessa API | Mensagem recebida. Não há evento Meta/Google nem `SiteEvent` de sucesso deste formulário. Contador de mensagens não lidas muda quando mensagens são lidas. |
| Visitas gerais | Vercel Analytics | Componente global nas execuções sem flag de preview local | Vercel Analytics | Sem condição ligada à escolha de marketing no componente raiz | Analytics de navegação; não comprova diagnóstico salvo ou compra. Aceitação no dashboard não foi verificada. |

Fonte dos contadores: o admin conta cliques em `SiteEvent`, diagnósticos em `DiagnosticSubmission` e mensagens não lidas em `ContactMessage`. Não há funil por pessoa/sessão ou atribuição de campanha nessas consultas.

## 2. Jornada e pontos ainda não instrumentados

Os nomes abaixo são uma proposta de contrato, **não eventos já ativos**. Sua implementação precisa manter a diferença entre microevento e conversão.

| Etapa | Evento proposto | Quando disparar | Papel |
| --- | --- | --- | --- |
| Explorar estilos | `learning_style_explored` | Seleção explícita de personagem no atlas | Engajamento editorial, não inferência de perfil. |
| Cadastro gratuito aceito | `diagnostic_capture_completed` | Validação e gravação local bem-sucedidas | Etapa do funil; ainda não é lead salvo no servidor. |
| Começar jornada | `diagnostic_started` | Clique em começar, uma vez por tentativa | Denominador para conclusão. |
| Retomar | `diagnostic_resumed` | Retomada explícita de rascunho válido | Saúde da experiência. |
| Capítulo | `diagnostic_chapter_reached` | Primeira chegada a cada capítulo por tentativa | Identificar trechos com abandono, sem transmitir respostas. |
| Falha de envio | `diagnostic_submit_failed` | Falha controlada depois de tentar enviar | Confiabilidade; categoria de erro, sem texto bruto ou dados pessoais. |
| Diagnóstico salvo | `diagnostic_free_completed` existente | Confirmação no servidor, uma vez por tentativa | Conversão principal do gratuito; falta idempotência. |
| Resultado real aberto | `diagnostic_result_viewed` | Resultado calculado de respostas completas, sem preview sintético | Entrega percebida; diferente de submissão salva. |
| Impressão/PDF solicitado | `diagnostic_report_requested` | Clique explícito de imprimir/baixar | Intenção de exportar, não prova de download bem-sucedido. |
| Checkout/compra | `payment_confirmed` | Confirmação financeira confiável, vinculada à operação | Conversão de receita; não existe no fluxo atual. |
| Curso, mentoria e palestra | `offer_cta_clicked`, `offer=course/mentoring/talk` | CTA explícito da oferta | Interesse por oferta; não compra. |

O código atual não tem evento por pergunta, início, capítulo, retomada, resultado aberto ou PDF solicitado. O `attemptId` do rascunho gratuito é somente local; não deduplica banco, pixel ou notificações. Prévia `?matriz=1` a `8` nunca deve produzir conversão real de diagnóstico.

## 3. Consentimentos separados

| Escolha | Estado atual | Trabalho restante |
| --- | --- | --- |
| Termos/privacidade para diagnóstico | Checkbox obrigatório na captura gratuita; API guarda horário e versão do consentimento obrigatório | Vincular de forma verificável à tentativa; reconciliar com a captura paga. |
| Uso educacional das respostas | Checkbox opcional sem estado enviado/persistido | Guardar escolha, versão e finalidade; não inferir aceitação pelo envio. |
| Conteúdos por e-mail/WhatsApp | Checkbox opcional sem estado enviado/persistido | Guardar opt-in separado; não confundir com termos ou advertising consent. |
| Medição de anúncios | Escolha local em `MarketingTracking`, banner por padrão em `/aulas`, preferências reabertas pelo footer | Centralizar ciclo da tag global e decisão; definir escopo fora de `/aulas`; registrar revisão com produto. |
| Eventos próprios e Vercel | Sem gate equivalente nos componentes globais | Definir política de medição e escopo aplicável antes de expandir o funil. |

O wrapper solicita armazenamento publicitário e ad user data concedidos, personalização negada e analytics storage negado após aceitar. A escolha de marketing usa chaves versionadas de localStorage e não é um registro durável de consentimento por submissão. A preferência de movimento da interface é independente dessas escolhas.

## 4. Dados e atribuição

**Atual:** cliques próprios enviam apenas `type` e `path`; `SiteEvent` guarda ID, tipo, caminho e horário. Conclusões próprias guardam tipo e caminho. Não há UTM, click IDs, sessão, tentativa vinculada, placement do CTA ou referência à submissão no evento. O formulário de diagnóstico tem dados de contato e respostas próprios; esses campos não aparecem nos payloads publicitários escritos pelo componente de tracking.

**Contrato recomendado para próxima implementação:** nome/versão do evento, versão do instrumento, ID opaco de tentativa, plano, pathname sem query, placement fixo do CTA, horário, origem permitida e snapshot das escolhas aplicáveis. Capturar UTMs/click IDs somente quando o escopo de consentimento permitir, com validação e retenção definidas. Não enviar nome, e-mail, telefone, idade, objetivos livres, respostas, pontuações ou perfil calculado em URLs ou eventos de anúncios. Não reutilizar o perfil educativo como segmentação publicitária.

O evento primário deve ter ID de deduplicação gerado na tentativa e confirmado pelo servidor. A mesma tentativa não deve criar segunda submissão, segunda notificação ou segunda conversão após retry. Medidas por navegador continuam sujeitas a bloqueadores e perda de conexão.

## 5. Leitura das métricas

- **Intenção de diagnóstico:** contagem de `diagnostic_free_click`; não é taxa de início nem usuários únicos.
- **Diagnósticos salvos:** submissões gratuitas válidas no período. Hoje retries podem duplicar, então não assumir únicos.
- **Conclusão da jornada:** tentativas distintas salvas / tentativas distintas iniciadas. Ainda não calculável com o tracking atual.
- **Entrega percebida:** resultados reais abertos / diagnósticos salvos. Ainda não calculável.
- **Interesse no WhatsApp:** cliques de saída. Confirmar conversa/lead qualificado na operação comercial, fora do clique.
- **Receita:** pagamentos confirmados. Contagem de plano pago não substitui confirmação financeira.
- **Atribuição:** usar a mesma janela temporal, timezone e regra de deduplicação. Não somar Meta, Google e eventos próprios para obter total de pessoas. Dashboards de plataformas e conversões primárias/secundárias ainda precisam de validação de configuração.

## 6. Aceitação e modos de revisão

1. Preview local `EDUKACUCA_LOCAL_PREVIEW=1`: todos os componentes globais de tracking e analytics ficam desligados. Isso não simula o POST de diagnóstico; scripts de browser interceptam as APIs separadamente.
2. Preview hospedado Vercel: a flag local não é garantida. Por padrão, a configuração normal do layout se aplica. Prévia sintética não gera POST de diagnóstico, mas pode continuar gerando analytics de navegação.
3. Validar sem escolha, rejeição, aceitação, revogação e reload, capturando pedidos de rede. Corrigir a inicialização global antes de declarar o comportamento de consentimento aprovado.
4. Em `/aulas`, validar um `Contact` Meta e uma chamada de conversão Google por clique aceito; no banco, um `whatsapp_click` pela mesma ação. Estes três registros representam uma ação.
5. Em outra rota, validar clique próprio de WhatsApp e ausência dos eventos publicitários do wrapper restrito a `/aulas`.
6. Diagnóstico: falha de API não registra conclusão no servidor; sucesso salva submissão. Retry e concorrência precisam de teste depois de adicionar idempotência. E-mail pode falhar independentemente do sucesso do banco.
7. Contato: 201 confirma registro; clique de enviar, validação inválida e erro de servidor não são conversão recebida.
8. Prévia sintética, navegação para resultado sem respostas, visita à tela de comprovante e clique em WhatsApp não confirmam compra.
9. Para o futuro funil, testar início, retomada, capítulos, resultado, bloqueio de storage e abandono com payloads sem dados pessoais.
10. Conferir ingestão com testes controlados nos destinos autorizados. Não houve inspeção das contas Meta/Google/Vercel nem envio real de conversões nesta tarefa de mapeamento.

## Fontes de implementação

- [Layout, tag global e flag local](../src/app/layout.tsx)
- [Escolha de marketing, PageView, Contact e conversão Google](../src/components/MarketingTracking.tsx)
- [Cliques próprios](../src/components/SiteEventTracking.tsx)
- [Validação e persistência de cliques](../src/app/api/site-event/route.ts)
- [Submissão e eventos de conclusão](../src/app/api/diagnostico/route.ts)
- [Contato salvo](../src/app/api/contato/route.ts)
- [Schema e campos disponíveis](../prisma/schema.prisma)
- [Contadores do admin](../src/app/admin/page.tsx)
- [Captura e escolhas opcionais](../src/app/diagnostico/captura/page.tsx)
- [Rascunho por tentativa](../src/lib/learningJourneyDraft.ts)

Relacionado: [guia de validação do Zé](ze-validation.md) e [documentação da jornada](learning-journey.md).

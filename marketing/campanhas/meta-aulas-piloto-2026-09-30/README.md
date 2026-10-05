# Meta | piloto de aulas da EdukaCuca | v1

Status em 30/09/2026: **rascunho de campanha**. Nenhum anúncio foi criado ou ativado na Meta. Não há orçamento aprovado para este canal.

## Objetivo e base confirmada

Apresentar as aulas particulares de inglês online da EdukaCuca e levar pessoas interessadas à página [Aulas](https://edukacuca.com.br/aulas), onde podem chamar Vinicius pelo WhatsApp. A página estava acessível com HTTP 200 em 30/09/2026. Ela descreve aulas ao vivo, adaptadas ao objetivo e ritmo do aluno, e oferece uma conversa inicial e uma aula experimental. O WhatsApp publicado é `(11) 92659-9367`.

O Pixel `edukacuca-site` (`2180875479476314`) está instalado somente na página `/aulas`, condicionado à escolha de publicidade do visitante. A Meta já recebeu eventos de teste `PageView` e `Contact`. `Contact` é disparado no clique para WhatsApp; **não confirma que a pessoa enviou uma mensagem, marcou aula ou virou aluno**. Ainda não há histórico de conversões reais suficiente para escolher otimização por lead com confiança.

## Dois conceitos para um primeiro teste

| Conceito | O que testa | Imagem existente | Texto principal proposto | Título proposto | Chamada |
| --- | --- | --- | --- | --- | --- |
| Objetivo próprio | Interesse em aulas ligadas a uma meta pessoal | `../../instagram/seu-ingles-tem-um-motivo-2026-09-30/poster-publish.jpg` | `Seu inglês tem um motivo. Nas aulas particulares online da EdukaCuca, Vinicius adapta a prática ao que você quer aprender e ao seu ritmo. Conheça como funcionam as aulas.` | `Inglês para o seu objetivo` | `Saiba mais` |
| Conversa que continua | Interesse em praticar conversação sem travar por uma palavra | `../../instagram/conversa-sem-pausa-2026-09-30/poster-publish.jpg` | `Faltou uma palavra na conversa? Dá para explicar de outro jeito e seguir falando. Pratique inglês em aulas particulares online com Vinicius, com atividades ajustadas ao seu objetivo.` | `Pratique inglês na conversa` | `Saiba mais` |

Ambas as imagens são artes originais já publicadas organicamente em `@edukacuca`, sem fotografia de Vinicius, depoimentos, credenciais ou promessa de fluência. A primeira mostra um percurso de objetivos; a segunda usa uma fita em forma de balões de conversa. São abordagens visuais e de mensagem distintas. Os textos pagos acima são **propostas**, ainda não publicados.

## Destinos e medida

| Conceito | URL proposta |
| --- | --- |
| Objetivo próprio | `https://edukacuca.com.br/aulas?utm_source=meta&utm_medium=paid_social&utm_campaign=edukacuca_aulas_piloto&utm_content=objetivo` |
| Conversa que continua | `https://edukacuca.com.br/aulas?utm_source=meta&utm_medium=paid_social&utm_campaign=edukacuca_aulas_piloto&utm_content=conversa` |

Registrar separadamente: impressões e gasto na conta de anúncios, visitas à página, `PageView` consentidos, cliques `Contact` consentidos e conversas reais informadas por Vinicius. A URL do WhatsApp no site é direta e não carrega os parâmetros UTM. Por isso, `Contact` serve como sinal de intenção, não como contagem de conversas ou atribuição final de clientes.

Sem histórico confiável de leads aceitos, a primeira configuração deve priorizar validar entrega e tráfego qualificado para `/aulas`, com o objetivo e evento exatos escolhidos no Ads Manager após a conta existir. Não há previsão de custo por lead nem benchmark de conta madura neste rascunho.

## Inventário de criativos

| Conceito | Arquivo | Tamanho | SHA-256 | Origem |
| --- | --- | --- | --- | --- |
| Objetivo próprio | `../../instagram/seu-ingles-tem-um-motivo-2026-09-30/poster-publish.jpg` | 1122 x 1402, JPEG | `e6e48226d4e460f37bd2294f7d4b1ef36c5f369075c5c76b71a0c1257e825b65` | [Post orgânico](https://www.instagram.com/p/Dd6IAjuHCK7/) |
| Conversa que continua | `../../instagram/conversa-sem-pausa-2026-09-30/poster-publish.jpg` | 1122 x 1402, JPEG | `5ee2d7f02a6746a33387344774007710ff2bed3d3e1417f940d559846f41af89` | [Post orgânico](https://www.instagram.com/p/Dd5-asznFn4/) |

O uso pago, o corte, as zonas de segurança, o texto visível e eventuais ajustes automáticos precisam ser conferidos nas prévias reais dos posicionamentos escolhidos. Estas peças estão prontas para inspeção no feed; não há adaptação aprovada para Stories ou Reels. A [documentação de Reels da Meta](https://www.facebook.com/business/ads/facebook-instagram-reels-ads) descreve requisitos próprios para conteúdo vertical e áreas seguras, que não foram verificados para estas imagens.

## Dependências para montar e lançar

1. João escolheu **Nellia** como proprietária permanente da conta dedicada EdukaCuca na decisão `68` do vitoria-gate, em 30/09. No portfólio Nellia Software, a conta `EdukaCuca | Nellia` foi preparada para revisão com moeda `BRL`, fuso `America/Sao_Paulo` e uso `Minha empresa`. A Meta avisa que a conta não poderá ser removida do portfólio depois de criada e exige aceite dos Termos Comerciais e Políticas de Publicidade em nome da Nellia Software, aplicáveis às atividades de todas as contas de anúncios do portfólio. **Criação e aceite ainda precisam de aprovação específica de João.** Nenhuma conta foi criada nem houve aceite.
2. Identificar a conta Meta de Vinicius antes de conceder acesso ao `@edukacuca`. O nome de um usuário listado na empresa não prova qual login ele usa. Pedir somente o e-mail do login, nunca senha ou código.
3. Depois da criação, ligar a conta dedicada Nellia ao Pixel `edukacuca-site`, à identidade de Instagram correta e ao contexto EdukaCuca do QG. O QG atualmente não tem `META_ADS_ACCOUNT_MAP` para esse contexto. Confirmar que a conta e os dados são somente da EdukaCuca; não usar Prosp ou Renenutet. A leitura `owned_pages` e `client_pages` do portfólio Nellia Software retornou apenas a Página Nellia, sem Página EdukaCuca verificável. Em 30/09, a aba **Ativos conectados** do `@edukacuca` no Business Settings da Nellia mostrou **Nenhum ativo conectado**; isso não comprova que Vinicius não tenha uma Página fora do portfólio. Conferir a identidade de Página disponível no Ads Manager e se existe uma Página EdukaCuca antes de montar anúncios; não apresentar a Página Nellia como marca da EdukaCuca.
4. No Ads Manager, escolher objetivo, público, região, posicionamentos e opção de otimização, conferir prévias e URL final das duas peças e registrar os IDs de campanha, conjunto e anúncio em um registro posterior. Uma hipótese inicial é Brasil, adultos, para aulas online; não há público aprovado neste momento.
5. Obter aprovação específica de orçamento, prazo e ativação antes de qualquer entrega paga. Após ativar, comparar gasto, cliques, eventos consentidos e conversas reais sem chamar evento de teste de lead.

Nenhuma das pendências acima impede manter o site, Pixel e posts orgânicos já publicados sob monitoramento.

# Regras Gerais

O trabalho prático é a avaliação contínua da disciplina, correspondendo às notas N1, N2 e N3. Ao longo do semestre, os grupos desenvolvem progressivamente um sistema web completo em React.js, aplicando na prática os conceitos estudados em aula: componentes, estados, hooks, roteamento, consumo de APIs RESTful e boas práticas de organização de projeto.

* Grupos de 4 a 5 integrantes, preferencialmente os mesmos do PMI (Projeto Multidisciplinar Integrador).
* **Observação:** Quando a turma é pequena, o professor definirá uma quantidade menor de integrantes nos grupos.
* A nota do trabalho é do grupo — todos os integrantes recebem a mesma pontuação.
* **Contudo:** Se for percebido que algum integrante teve baixa participação ou nenhuma, pode haver a redução de nota para a pessoa, incluindo a possibilidade de nota 0 (zero).
* O sistema deve resolver um problema real de uma empresa ou organização fictícia, com ao menos um usuário-alvo identificável.
* Pode ser a mesma ideia do PMI.
* O repositório no GitHub ou Codeberg deve estar ativo desde a Sprint 1 e ter histórico real de commits de todos os integrantes.
* O trabalho é incremental: cada sprint constrói sobre o que foi entregue na anterior.
* Na apresentação, o projeto precisa rodar no navegador com `npm run dev`. Screenshots não substituem demo ao vivo.

## Entrega do Dia de Desenvolvimento Assistido

No dia de cada Desenvolvimento Assistido, até as 22h, um integrante do grupo deve entregar no Google Classroom da turma os seguintes arquivos em formato PDF, compactados em um único arquivo ZIP.

**Conteúdo do arquivo ZIP:**
* `repositorio.pdf` — print em PDF da página principal do repositório (GitHub ou Codeberg), mostrando o README e a listagem de arquivos
* `commits.pdf` — print em PDF da página de histórico de commits (`/commits/main`), com os timestamps visíveis
* `sistema.pdf` — print em PDF de uma tela do sistema rodando no navegador
* `relatorio_sprintX.pdf` — relatório da sprint no formato PDF

**Para gerar os PDFs, basta:**
1. abrir a página no navegador
2. e usar `Ctrl+P` → Salvar como PDF.

* O nome do arquivo ZIP deve ser: `sprintX_dev_nome_sobrenome_ads31.zip`
* **O não envio até as 22h resulta na perda de 2 pontos da nota da sprint.**

## Cronograma das Sprints

| Sprint | Entrega | Data | Avaliação |
|---|---|---|---|
| Sprint 1 | Pré-Projeto: aplicativo React inicial com componentes, estados e eventos e múltiplas páginas | conforme cronograma | N1 |
| Sprint 2 | Mini aplicativo: formulários controlados e localStorage | conforme cronograma | N2 |
| Sprint 3 | Sistema integrado: React completo com consumo de API RESTful (CRUD) | conforme cronograma | N3 |

Não há entrega formal de documento — o grupo apresenta o relatório em tela e demonstra o que foi implementado. A apresentação inclui:

* Navegação pelo relatório da sprint na tela
* Demo ao vivo da aplicação React rodando no navegador (`npm run dev`)
* Navegação pelo repositório: histórico de commits, organização dos arquivos, componentes

O tempo por grupo é de até 10 minutos nas Sprints 1 e 2, e de até 15 minutos na Sprint 3. O professor fará perguntas ao final.

## Formato das Apresentações

### Sprint 1 — Pré-Projeto (N1)
Apresentação oral em até 10 minutos, individual ou em grupo de até 4 pessoas. O grupo mostra o relatório preenchido, o repositório criado e a aplicação React rodando no navegador, demonstrando pelo menos um componente com estado e evento funcionando, além de menu de navegação com pelo menos 3 páginas.

### Sprint 2 — Mini Aplicativo React (N2)
Apresentação oral em até 10 minutos no datashow. Todos os integrantes devem participar. O grupo demonstra o aplicativo rodando com as seguintes funcionalidades obrigatórias:
* Formulário controlado com `useState` (pelo menos 3 campos)
* Listagem dinâmica dos itens cadastrados
* Persistência com `localStorage` (dados permanecem após recarregar a página)
* Pelo menos 2 componentes em arquivos `.jsx` separados

A estrutura da apresentação deve cobrir: título e tema do app, organização dos componentes (mostrar no código), funcionalidades implementadas (mostrar no app rodando), persistência, e dificuldades e aprendizados.

### Sprint 3 — Sistema Integrado (N3)
Apresentação oral em até 15 minutos. Todos os integrantes devem falar, com tempo dividido igualitariamente. O grupo demonstra o sistema completo rodando em React, incluindo o consumo da API RESTful do back-end com CRUD completo. Os slides não devem ser lidos — devem ser explicados.

Estrutura sugerida para os slides da Sprint 3:
1. Capa (nome do sistema, integrantes)
2. Problema que o sistema resolve
3. Modelagem ER do banco de dados (responsabilidade da disciplina de BD)
4. Interfaces e chamadas dos serviços back-end (responsabilidade da disciplina de Back-end)
5. Componentes e páginas React do sistema
6. Demo ao vivo e breve explicação do código-fonte

## Critérios de Avaliação

### Sprint 1 — Pré-Projeto (N1)
| Critério | Peso | Pontos |
|---|---|---|
| Clareza e viabilidade da ideia proposta (Canvas) | 20% | 2,0 pts |
| Aplicação React criada com Vite e rodando no navegador | 25% | 2,5 pts |
| Componentes, estados e eventos implementados e demonstráveis | 30% | 3,0 pts |
| Repositório criado, README adequado e commits de todos os integrantes | 10% | 1,0 pts |
| Apresentação oral da ideia em sala | 15% | 1,5 pts |

### Sprint 2 — Mini Aplicativo React (N2)
| Critério | Peso | Pontos |
|---|---|---|
| Estrutura do projeto: Vite, organização em componentes, navegação entre páginas | 15% | 1,5 pts |
| Formulários e estado: inputs controlados, atualização de estado em tempo real | 20% | 2,0 pts |
| Armazenamento local: persistência de dados com localStorage | 20% | 2,0 pts |
| Listagem e renderização dinâmica dos dados cadastrados | 20% | 2,0 pts |
| Estilo e usabilidade: Bootstrap ou CSS, clareza da interface, código limpo | 15% | 1,5 pts |
| Repositório atualizado e com commits frequentes de todos os integrantes | 10% | 1,0 pts |

### Sprint 3 — Sistema Integrado (N3)
| Critério | Peso | Pontos |
|---|---|---|
| Aplicação React completa e funcionando no navegador | 25% | 2,5 pts |
| Consumo de API RESTful com CRUD completo (Create, Read, Update, Delete) | 25% | 2,5 pts |
| Qualidade do código React (organização, componentização, boas práticas) | 20% | 2,0 pts |
| Clareza da apresentação e capacidade de explicar decisões técnicas | 20% | 2,0 pts |
| Repositório atualizado e com commits frequentes de todos os integrantes | 10% | 1,0 pts |

## Templates
Faça o download dos templates de cada sprint e preencha antes da apresentação. O documento funciona como roteiro — o professor fará perguntas com base nele durante a apresentação.
* Sprint 1 — Pré-Projeto
* Sprint 2 — Relatório de Evolução
* Sprint 3 — Relatório Final

## Boas Práticas
* **Commits frequentes com mensagens claras** — um commit gigante na véspera da apresentação não demonstra processo.
* **README sempre atualizado** — o professor deve conseguir clonar o repositório, rodar `npm install` e `npm run dev` sem pedir ajuda ao grupo.
* **Componentize com critério** — não crie um componente para cada parágrafo, mas também não coloque tudo em um único arquivo. Cada componente deve ter uma responsabilidade clara.
* **Separe dados de apresentação** — lógica de negócio e chamadas à API em arquivos separados dos componentes visuais (ex: pasta `/src/services`).
* **Trate erros de rede** — o que acontece se a API não responder? O usuário precisa saber.
* **Nomes descritivos** — `ClienteForm.jsx` e `ProdutoList.jsx` são muito melhores que `Form.jsx` e `List.jsx`.

## O que o professor vai observar em todas as sprints
* Se a aplicação abre e roda corretamente com `npm run dev` sem erros no console.
* Se todos os integrantes contribuíram com commits reais no repositório.
* Se o README explica como instalar e rodar o projeto.
* Se os componentes têm responsabilidades claras e o código é legível.
* Se o grupo sabe explicar o que foi feito, por que foi feito assim e quais alternativas existiam.

## O que diferencia grupos com nota máxima
* Componentes bem separados e reutilizáveis, com props bem definidas.
* Gerenciamento de estado consistente — sem props drilling desnecessário.
* Integração real e funcional com a API do back-end, com tratamento de erros visível ao usuário.
* Todos os integrantes conseguem explicar qualquer parte do código React.
* Reflexão crítica sobre o que não saiu como planejado e como o grupo lidou com isso.
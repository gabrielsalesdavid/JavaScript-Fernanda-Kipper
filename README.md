# JavaScript: fundamentos e sintaxe

Repositório local de estudos de JavaScript e HTML. O conteúdo atual apresenta um documento HTML básico, um arquivo JavaScript com exemplos de fundamentos da linguagem e documentação de apoio em português.

## Estrutura do repositório

```text
.
|-- Docs/
|   `-- Documentações/
|       |-- Conceitos/
|       |   `-- valores-tipos-e-fluxo.md
|       `-- Fundamentos/
|           `-- sintaxe-basica.md
|-- src/
|   `-- Sintaxe Basica/
|       |-- HMTL/
|       |   `-- index.html
|       `-- JS/
|           `-- script.js
`-- .gitignore
```

O nome `HMTL` faz parte do caminho atual da pasta. Foi mantido como está para corresponder à estrutura existente.

## Conteúdo de estudo

O arquivo `src/Sintaxe Basica/JS/script.js` demonstra:

- Declaração e uso de variáveis com `let`, `const` e `var`.
- Saída com `console.log` e interpolação com template literals.
- Valores numéricos, strings, `null` e `undefined`, além do operador `typeof`.
- Comparações, multiplicação, conversões entre strings e números e avaliação de valores em condicionais.
- Funções, escopo, classes, construtor, instâncias e métodos.
- Igualdade estrita (`===`) e operador ternário.

O arquivo `src/Sintaxe Basica/HMTL/index.html` apresenta a estrutura mínima de uma página, metadados, título, cabeçalho, parágrafo e inclusão de um script externo.

## Documentação

- [Docs/Documentações/Fundamentos/sintaxe-basica.md](Docs/Documentações/Fundamentos/sintaxe-basica.md): referência dos elementos de sintaxe presentes nos exemplos.
- [Docs/Documentações/Conceitos/valores-tipos-e-fluxo.md](Docs/Documentações/Conceitos/valores-tipos-e-fluxo.md): explicação de tipos, coerção, truthiness, escopo e fluxo de execução.

Ordem sugerida: leia primeiro o guia de fundamentos e depois o documento de conceitos junto com os exemplos em `src/`.

## Execução

O repositório não possui `package.json`, dependências declaradas, scripts de build ou testes automatizados. Os exemplos podem ser explorados diretamente no navegador ou em um ambiente JavaScript como Node.js, após corrigir os problemas de execução listados abaixo.

Para abrir a página, use um navegador com `src/Sintaxe Basica/HMTL/index.html`. O caminho atual do elemento `<script>` aponta para a pasta errada; considerando a estrutura existente, ele precisa ser `../JS/script.js` para localizar o arquivo JavaScript.

Com Node.js instalado, o script pode ser executado pelo terminal a partir da raiz do repositório:

```sh
node "src/Sintaxe Basica/JS/script.js"
```

Na forma atual, essa execução para ao encontrar uma referência a uma variável não declarada. Corrija o nome indicado abaixo antes de esperar que as instruções seguintes sejam executadas.

## Observações sobre o estado atual

- O código declara `numer`, mas depois usa `numero` em `String(numero)`. Como `numero` não foi declarado, ocorre `ReferenceError` e o restante do script não executa. Os nomes precisam ser consistentes.
- `(10).toString` obtém a referência ao método, mas não o chama. Para converter o número em string, use `(10).toString()` ou `String(10)`.
- O HTML usa `src='script.js'`, mas o arquivo está na pasta irmã `JS`; o caminho relativo correto é `../JS/script.js`.
- A pasta de HTML está nomeada `HMTL`, e o texto do parágrafo também contém a grafia `HMTL`. O README preserva o nome real da pasta para que os caminhos funcionem.

O `.gitignore` exclui arquivos de log, variáveis de ambiente e diretórios comuns de dependências, build e temporários. Ele contém padrões genéricos e não implica que o repositório já tenha esses componentes.
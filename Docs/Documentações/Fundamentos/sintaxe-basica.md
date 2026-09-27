# Fundamentos de sintaxe básica

Este guia reúne a sintaxe que aparece no exemplo em [`src/Sintaxe Basica/JS/script.js`](../../../src/Sintaxe%20Basica/JS/script.js) e [`src/Sintaxe Basica/HMTL/index.html`](../../../src/Sintaxe%20Basica/HMTL/index.html). O foco é reconhecer a estrutura e entender para que serve cada construção.

## Estrutura mínima de HTML

Um documento HTML começa com `<!DOCTYPE html>`, que informa ao navegador que o documento usa HTML moderno. O elemento `<html lang="pt-br">` envolve a página e declara o idioma principal. Dentro dele, `<head>` guarda metadados, como a codificação de caracteres (`<meta charset="UTF-8">`), a configuração da viewport para telas diferentes e o título da aba. O conteúdo visível fica em `<body>`.

`<h1>` representa o título principal da página e `<p>`, um parágrafo. O elemento `<script>` inclui JavaScript externo. Seu atributo `src` é um caminho relativo ao arquivo HTML; como o HTML e o JavaScript deste projeto ficam em pastas irmãs, o caminho correspondente é `../JS/script.js`.

## Declaração de variáveis

`let`, `const` e `var` declaram identificadores, mas têm regras diferentes:

- `const` impede que a variável receba outra atribuição depois da inicialização.
- `let` permite reatribuição e tem escopo de bloco, delimitado por `{}`.
- `var` permite reatribuição e tem escopo de função, não de bloco; em código novo, prefira `let` ou `const`.

JavaScript diferencia maiúsculas de minúsculas: `numero`, `Numero` e `NUMERO` são nomes diferentes. No fluxo deste exemplo, declare as variáveis antes de usá-las; `let` e `const` não podem ser acessados antes da declaração. `var` e declarações de função têm regras de elevação diferentes. Por exemplo, `let numero = 1;` declara a variável `numero`.

## Saída no console

`console.log(valor)` escreve um valor no console do navegador ou do ambiente JavaScript. Pode receber vários argumentos, como em `console.log(typeof idade, idade)`, que mostra o tipo e o valor.

## Strings e template literals

Strings podem ser delimitadas por aspas simples ou duplas. Crases delimitam um *template literal*, que permite interpolar variáveis e expressões usando `${...}`:

```js
const nome = "Ana";
console.log(`Olá, ${nome}!`);
```

O conteúdo dentro de `${...}` é avaliado antes de ser inserido no texto. Template literals também podem ocupar várias linhas.

## Valores, operadores e conversões

O exemplo usa números, strings, `null` e `undefined`. `null` é um valor atribuído explicitamente para representar ausência; uma variável declarada sem valor recebe `undefined`.

Operadores aritméticos como `*` fazem cálculos. O JavaScript pode converter alguns valores automaticamente: por exemplo, `"2" * 2` resulta em `4`. Para converter de forma explícita, use `Number(valor)` ou `String(valor)`. O método numérico `.toString()` também converte para string, mas precisa ser chamado com parênteses; sem eles, obtém-se a referência ao método.

O operador relacional `>=` verifica se o valor à esquerda é maior ou igual ao da direita e produz um booleano (`true` ou `false`), como em `idade >= 18`.

`typeof valor` retorna uma string que indica o tipo detectado, como `"number"`, `"string"` ou `"undefined"`. Um detalhe da linguagem: `typeof null` retorna `"object"`, por compatibilidade histórica.

## Condicionais e valores verdadeiros

Uma instrução `if` executa seu bloco quando a condição é verdadeira; `else` executa o bloco alternativo:

```js
if (telefone) {
    console.log("Cadastrado.");
} else {
    console.log("Não cadastrado.");
}
```

JavaScript converte a condição para booleano. Valores como `false`, `0`, `""`, `null` e `undefined` são *falsy*; a maioria dos outros valores é *truthy*.

## Funções e classes

Uma função agrupa instruções reutilizáveis. Parâmetros recebem valores durante a chamada:

```js
function atualizarEndereco(novoEndereco) {
    enderecoVar = novoEndereco;
}
```

No exemplo, a função altera uma variável externa, portanto produz um efeito colateral. A função só executa quando chamada, por exemplo, `atualizarEndereco("Rua B")`.

Uma classe descreve uma estrutura de objetos. `constructor` inicializa cada instância, `this` aponta para a instância atual, e `new Pessoa("Ana", 30)` cria uma instância. Métodos, como `apresentar()`, definem comportamentos disponíveis nessa instância.

## Comparação e operador ternário

`===` compara valor e tipo sem conversão automática. Assim, `1 === "1"` é falso porque um operando é número e o outro é string.

O operador ternário escolhe entre duas expressões no formato `condição ? valorSeVerdadeiro : valorSeFalso`. No template literal do exemplo, a comparação falsa escolhe o texto `"Não"`.

## Comentários e blocos

`//` inicia um comentário que termina no fim da linha. Chaves `{}` delimitam blocos em funções, classes, métodos e condicionais. Indentação não altera o significado do JavaScript, mas ajuda a visualizar esses blocos.

## Pontos a corrigir no exemplo

No arquivo atual, `let numer = 1;` declara `numer`, mas a linha `String(numero)` usa `numero`, que não foi declarado. A execução lança `ReferenceError` nessa linha e as instruções seguintes deixam de executar. Use o mesmo nome nos dois lugares, por exemplo, declare `let numero = 1;`.

Também aparece `(10).toString` sem `()`. Isso referencia o método, mas não o executa. Para obter a string, use `(10).toString()` ou `String(10)`.

Além disso, o `src` do HTML aponta para `script.js` na própria pasta do HTML, enquanto o arquivo está em `../JS/script.js`. O navegador não encontrará o arquivo usando o caminho atual.

Para detalhes sobre o comportamento dos valores e desses problemas, consulte [Valores, tipos e fluxo de execução](../Conceitos/valores-tipos-e-fluxo.md).
# Valores, tipos e fluxo de execução

Este documento explica os conceitos por trás dos exemplos em [`src/Sintaxe Basica/JS/script.js`](../../../src/Sintaxe%20Basica/JS/script.js) e [`src/Sintaxe Basica/HMTL/index.html`](../../../src/Sintaxe%20Basica/HMTL/index.html). Para uma referência das construções da linguagem, consulte [Fundamentos de sintaxe básica](../Fundamentos/sintaxe-basica.md).

## Variável não é o mesmo que valor

Uma variável é um nome associado a um valor. `let` permite que esse nome seja associado a outro valor; `const` impede essa reatribuição:

```js
let idade = 33;
idade = 34;

const nome = "GSD";
// nome = "Ana"; // TypeError: não se pode reatribuir uma constante
```

Por isso, dizer que `const` torna todo o valor “imutável” é impreciso. Com objetos e arrays, a referência não pode ser reatribuída, mas o conteúdo do objeto ainda pode ser alterado. Para valores primitivos, como números e strings, uma alteração aparente é, na verdade, uma nova atribuição.

## `null` e `undefined` expressam situações diferentes

`null` normalmente indica que o código atribuiu deliberadamente “nenhum valor”. `undefined` costuma indicar que ainda não foi fornecido um valor: por exemplo, uma variável declarada sem inicialização ou uma propriedade inexistente.

No exemplo, `endereco` recebe `null`, enquanto `telefone` é declarado sem valor e, portanto, fica `undefined`. Ambos são *falsy*, então cada um faz o `if` correspondente seguir pelo `else`. Interpolados em uma string, aparecem literalmente como `null` e `undefined`.

## Conversão implícita e explícita

JavaScript é uma linguagem de tipagem dinâmica: valores têm tipos, e uma variável pode receber valores de tipos diferentes ao longo do programa. Em certas operações, a linguagem converte valores automaticamente. Por exemplo, a multiplicação numérica de `"2"` por `2` converte a string e resulta em `4`.

Essa conversão implícita depende do operador. `null * 2` resulta em `0`, enquanto concatenar uma string com `null` produz texto contendo `null`. Para deixar a intenção visível, `Number(valor)` e `String(valor)` fazem conversões explícitas. Conversões inválidas para número podem resultar em `NaN`, que significa “não é um número válido”.

O `typeof` ajuda a inspecionar valores, mas não substitui validação. Entre os resultados comuns estão `"number"`, `"string"`, `"boolean"` e `"undefined"`; por uma particularidade histórica, `typeof null` é `"object"`.

## Verdade lógica e condicionais

O `if` não exige que a condição já seja `true` ou `false`: o JavaScript avalia sua *truthiness*. `null`, `undefined`, `0`, `NaN` e a string vazia são *falsy*. Strings não vazias, inclusive `"0"`, e objetos são *truthy*.

Assim, o `if (multiplicaçãoString)` do exemplo verifica se a string não está vazia; ele não verifica se seu conteúdo representa um número válido. A multiplicação que acontece depois aplica outra regra e converte `"2"` para número.

## Igualdade estrita

`===` compara sem converter os operandos. Portanto, `1 === "1"` resulta em `false`: os valores têm representações parecidas, mas tipos distintos. Já `==` pode converter operandos antes de comparar e, por isso, costuma ser menos previsível. Prefira `===` e `!==` na maioria dos casos.

O operador ternário transforma esse resultado em uma escolha: se a condição for verdadeira, seleciona o primeiro valor; caso contrário, seleciona o segundo. Logo, a expressão do exemplo seleciona `"Não"` e o template literal incorpora esse texto à mensagem.

## Chamar uma função ou apenas referenciá-la

Em JavaScript, nomes de funções são valores. Escrever `objeto.metodo` obtém uma referência ao método; escrever `objeto.metodo()` o chama. A diferença explica a linha `(10).toString`: ela não converte o número ainda. A versão `(10).toString()` executa a conversão.

O mesmo princípio vale para funções definidas pelo programa. A declaração de `atualizarEndereco` não altera o endereço por si só; a chamada da função executa seu corpo. Como ela atribui a `enderecoVar`, modifica estado externo. Esse tipo de efeito pode tornar o fluxo mais difícil de acompanhar; retornar um novo valor é outra opção quando se deseja evitar essa dependência.

## Escopo e acesso a variáveis

Escopo determina onde um identificador pode ser usado. `let` e `const` têm escopo de bloco; `var` tem escopo de função. Uma função também pode acessar variáveis de um escopo externo, como `atualizarEndereco` faz com `enderecoVar`.

Os nomes precisam coincidir exatamente. O exemplo declara `numer`, mas usa `numero` na conversão seguinte. Como `numero` não está declarado, sua leitura lança `ReferenceError`. Em execução normal, o erro interrompe o restante daquele script. Corrigir a grafia para que declaração e uso sejam iguais é necessário antes de avaliar as linhas posteriores.

## Classes e instâncias

Uma classe descreve como criar objetos com dados e comportamentos relacionados. `new Pessoa("GSD", 33)` cria uma instância; o `constructor` guarda os argumentos em propriedades, e `this` representa a instância sendo construída. Depois, `pessoa1.apresentar()` chama o método usando os dados daquela instância.

Cada instância tem seus próprios valores de `nome` e `idade`. A classe não é a pessoa concreta, assim como a função `apresentar` não é a saída no console até que seja chamada.

## Ordem de execução e carregamento do arquivo

O navegador só executa o JavaScript externo se conseguir carregar o arquivo indicado por `src`. Como `index.html` está em `src/Sintaxe Basica/HMTL/` e `script.js` está em `src/Sintaxe Basica/JS/`, o caminho relativo entre eles é `../JS/script.js`. Com `src='script.js'`, o navegador procura o arquivo na pasta `HMTL` e a inclusão falha.

Há, portanto, dois problemas independentes no exemplo: o caminho atual impede o carregamento pelo HTML; se o arquivo JavaScript for carregado diretamente, a referência a `numero` causa erro e interrompe as instruções seguintes. Corrigir o caminho e o nome da variável permite então observar as demais demonstrações.
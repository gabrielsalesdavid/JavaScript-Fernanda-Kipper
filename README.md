# JavaScript: fundamentos e conceitos

Repositório de estudos introdutórios de JavaScript e HTML, com exemplos comentados e documentação em português. O material parte da sintaxe e avança para a interpretação de valores, tipos e fluxo de execução.

![Trilha de aprendizagem: fundamentos, conceitos e prática](Docs/Img/roteiro-de-estudos.svg)

## Roteiro de estudo

1. Leia [Fundamentos: sintaxe básica](Docs/Documenta%C3%A7%C3%B5es/Fundamentos/sintaxe-basica.md) para reconhecer a estrutura do HTML e as construções JavaScript usadas nos exemplos.
2. Em seguida, estude [Conceitos: valores, tipos e fluxo de execução](Docs/Documenta%C3%A7%C3%B5es/Conceitos/valores-tipos-e-fluxo.md), que explica o comportamento por trás dessas construções.
3. Acompanhe os exemplos em [`src/Sintaxe Basica/JS/script.js`](src/Sintaxe%20Basica/JS/script.js) e [`src/Sintaxe Basica/HMTL/index.html`](src/Sintaxe%20Basica/HMTL/index.html). Experimente alterar valores e prever o resultado antes de executar.
4. Use o console do navegador ou o Node.js para observar a saída e os erros.

## Documentação

| Documento | O que você vai encontrar |
|---|---|
| [Fundamentos — sintaxe básica](Docs/Documenta%C3%A7%C3%B5es/Fundamentos/sintaxe-basica.md) | Estrutura mínima de HTML; declaração de variáveis com `let`, `const` e `var`; console e template literals; valores, operadores e conversões; condicionais e truthiness; funções, classes, igualdade estrita, ternário, comentários e blocos. O guia também aponta os problemas concretos presentes nos exemplos. |
| [Conceitos — valores, tipos e fluxo de execução](Docs/Documenta%C3%A7%C3%B5es/Conceitos/valores-tipos-e-fluxo.md) | Diferença entre variável e valor; `null` e `undefined`; conversão implícita e explícita; truthiness; igualdade estrita; chamada versus referência a funções; escopo; classes e instâncias; ordem de execução e carregamento de scripts no navegador. |

Os documentos são complementares: **Fundamentos** apresenta a forma e a finalidade das construções; **Conceitos** explica como a linguagem as avalia e como isso afeta a execução do programa.

## Exemplos incluídos

O script demonstra:

- Variáveis, interpolação de strings e saída com `console.log`.
- Comparação numérica, `null`, `undefined`, conversão de tipos e `typeof`.
- Condicionais e avaliação de valores truthy/falsy.
- Funções, escopo, classes, instâncias, construtor e métodos.
- Igualdade estrita (`===`) e operador ternário.

A página HTML contém a estrutura mínima de um documento, metadados, um título, um parágrafo e a inclusão de um arquivo JavaScript externo.

## Estrutura do repositório

```text
.
├── Docs/
│   ├── Documentações/
│   │   ├── Conceitos/
│   │   │   └── valores-tipos-e-fluxo.md
│   │   └── Fundamentos/
│   │       └── sintaxe-basica.md
│   └── Img/
│       └── roteiro-de-estudos.svg
└── src/
    └── Sintaxe Basica/
        ├── HMTL/
        │   └── index.html
        └── JS/
            └── script.js
```

`HMTL` é a grafia atual da pasta no repositório; o caminho foi mantido para corresponder aos arquivos existentes.

## Como executar

O projeto não possui `package.json`, dependências, scripts de build ou testes automatizados. Não é necessário instalar pacotes para explorar os exemplos.

Para executar o JavaScript com Node.js, use a partir da raiz:

```sh
node "src/Sintaxe Basica/JS/script.js"
```

**Atenção:** no estado atual, o script para com `ReferenceError`: declara `numer`, mas usa `numero` na linha `String(numero)`. Corrija os nomes para que coincidam antes de esperar a execução das instruções seguintes. Além disso, `(10).toString` apenas obtém a referência ao método; use `(10).toString()` para chamá-lo e realizar a conversão.

Para abrir a página, use um navegador com `src/Sintaxe Basica/HMTL/index.html`. O `src` atual aponta para `script.js` na pasta do HTML, mas o script está na pasta irmã `JS`. Para carregá-lo, o caminho relativo deve ser `../JS/script.js`. Portanto, o JavaScript só será carregado pela página depois desse ajuste.

## Escopo

Este é um material introdutório e pequeno, voltado aos conceitos presentes nos exemplos atuais. O `.gitignore` prevê padrões comuns para dependências, logs e arquivos temporários, mas isso não significa que essas ferramentas ou componentes façam parte do projeto.

let nome = "GSD";
console.log(`Olá, ${nome}!`);

let idade = 33;
console.log(`Você tem ${idade} anos.`);

let eMaiorDeIdade = idade >= 18;
console.log(`É maior de idade? ${eMaiorDeIdade}`);

let endereco = null;
console.log(`Endereço: ${endereco}`);

console.log(`Multiplicação: ${endereco * 2}`);

if(endereco) {
    console.log("Cadastrado.");
} else {
    console.log("Não cadastrado.");
}

let telefone;
console.log(`Telefone: ${telefone}`);

if(telefone) {
    console.log("Cadastrado.");
} else {
    console.log("Não cadastrado.");
}

let multiplicaçãoString = "2";
if(multiplicaçãoString) {
    console.log(`Multiplicação com string: ${multiplicaçãoString * 2}`);
}

let numer = 1;

let numeroString = String(numero);

let stringNumero = "123";
let concact = Number(stringNumero);

let segundoNumero = (10).toString;

console.log(typeof numero, numero);
console.log(typeof numeroString, numeroString);
console.log(typeof stringNumero, stringNumero);
console.log(typeof concact, concact);

// VARIÁVEIS::

const nomeConstante = "GSD"; // Immutable, scope block.
let idadeLet = 33; // mutable, scope block
var enderecoVar = "Rua A, 123"; // mutable

function atualizarEndereco(novoEndereco) { // function to update the address
    enderecoVar = novoEndereco;
}

class Pessoa { // class definition
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("GSD", 33);
pessoa1.apresentar();

console.log(`Nome: ${nomeConstante}`);
console.log(`Idade: ${idadeLet}`);
console.log(`Endereço: ${enderecoVar}`);

console.log(`1 é igual "1": ${1 === "1" ? "Sim" : "Não"}`); // strict equality check, ternary operator
/*export*/ const nome = 'Luiz';
/*export*/ const sobrenome = 'silva';
/*export*/ const idade = '23';
const cpf = 'kskddk';

function soma(x, y){
    return x + y
}

export default class Pessoa{
    constructor(nome, sobrenome, idade, cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cpf = cpf;
    }
}

export {nome , sobrenome, idade, soma } //podemos exportar com um nome diferente 
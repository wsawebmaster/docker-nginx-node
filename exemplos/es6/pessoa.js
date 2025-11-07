var pessoa = {
    nome: 'Wagner',
    idade: 46,
    andar() {
        console.log(this.nome + ' está andando...');
    }
}

var a = 10;
var b = 5;

function soma() {
    return a + b;
}

export { pessoa, soma as sum, a, b };
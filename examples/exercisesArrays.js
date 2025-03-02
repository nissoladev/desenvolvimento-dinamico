var lista = [99, 48, 23, 11, 6];

var cidades = ['João Pessoa', 'Curitiba', 'São Paulo', 'Porto Alegre', 'Caxias do Sul', 'Ijuí'];

// 1- Calcular a média dos números contidos dentro de um array
var soma = 0;
for (var i = 0; i < lista.length; i++) {
    console.log(`A média dos valores contidos no array é: ` + ((soma+=lista[i])/lista.length));
}
var media = (soma / lista.length);
console.log(`A média dos valores finais foi: ` + media);


console.log(lista[4]); // Exibe o valor contido dentro do index correspondente.
for (var posicao = 0; posicao < lista.length; posicao++) {
    console.log(`Valor: ` + lista[posicao]);
}

// Localizar o maior valor dentro de um array de números

var z = 0;
for (let i = 0; i < lista.length; i++) {
    if (z < lista[i]){
    z = lista[i];
    }
};

console.log(`O maior valor contido no array é: ` + z);

// Qual o maior tamanho de palavra dentro do array.

let comprimentoPalavra = 0;

for (let i = 0; i < cidades.length; i++) {
    if (comprimentoPalavra <= (cidades[i].length)){
        comprimentoPalavra = cidades[i].length;
    }
}
console.log(`O comprimento da palavra digitada foi de ` + comprimentoPalavra);
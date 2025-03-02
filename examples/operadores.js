// Unários

let variavel = (2 + 3);
variavel = (4 - 5);
variavel = (4 * 5);
console.log(variavel);

// Binários
let z = 5;
z  = ++z;
console.log(z);
let x = 9;
x--;
console.log(x);

// Atribuição Simples - Operador =
let opSimples = (variavel = x);
console.log(opSimples);

// Operadores Aritméticos
// Atribuição => x = y
let a = 3;
a = x = z;
console.log(a);

//Adição => x = x + y
a = (x += z);
console.log(a);

//Subtração => x = x - y
a = (x -= z);
console.log(a);

//Multiplicação => x = x * y
a = (x *= z);
console.log(a);

//Divisão => x = x / y
a = (x /= z);
console.log(a);

//Resto (Módulo) => x = x % y
a = (x %= z);
console.log(a);

//Resto (Exponencial) => x = x ** y
a = (x **= z);
console.log(a);

// Incremento e Decremento
a++ // a + 1
console.log(a);

// Operadores de Comparação - Retornam true or false
//Igual (==)
//Não igual (!=)
//Exatamente igual (===)
//Exatamente não igual (!==)
//Maior que (>)
//Maior que ou igual a (>=)
//Menor que (<)
//Menor ou igual a (<=)


//Operadores Lógicos
// & - AND - expr1 && expr2 - Retorna TRUE caso ambas as expressões sejam verdadeiras. Caso contrário, retorna False.

// || - OR

// ! - NOT

//Operadores Condicionais - Ternários
//condicao ? valor1 : valor2
let idade = 21;
var status = (idade >= 18) ? "Adulto" : "Menor de idade";
console.log(status);

var n = 3;
n *= 10;
console.log(n);

var p = 10;
p--;
b = 20;
c = 60;

console.log(p);

console.log(!(n <= p || b != c))
var a = 5 + 3;
var b = a % 5;
var c = 5 * b ** 2;
var d = 10 - a / 2;
var e = (6 * 2) / d;
var f = (b % e) + 4 / e;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

// auto-atribuições
var n = 3;
n = n + 4; // ou
n += 4;
console.log(n);

var n1 = 251.1;
n1.toFixed(2).replace(".", ",");
n1.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
console.log(n1);

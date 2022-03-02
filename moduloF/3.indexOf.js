let num = [5, 8, 2, 9, 3];

let valor = 3;
let pos = num.indexOf(valor);

// quando o valor não é encontrado, o indexOf retornará -1
if (pos == -1) {
  console.log(`Valor não encontrado`);
} else {
  console.log(`O valor ${valor} está na posição ${pos}`);
}

let num = document.querySelector("#txtn");
let add = document.querySelector("#addnum");
let res = document.querySelector("#res");

// criando um array vazio para analisar os dados
let valores = [];

// verificando se o valor eh um numero
function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

// verificar se o numero digitado ja esta na lista
function inList(n, lista) {
  if (lista.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value)); // adicionando no vetor

    // adicionando um novo item
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado.`;

    // adicionando na lista
    add.appendChild(item);
  } else {
    alert(`Valor invalido ou ja encontrado na lista.`);
  }

  // limpando e colocando o foco no input apos um valor ser digitado
  num.value = ``;
  num.focus();

  // limpando os resultados sempre o adicionar um novo numero.
  res.innerHTML = ``;
}

function finalizar() {
  if (valores.length == 0) {
    alert(`Adicione valores.`);
  } else {
    let tot = valores.length; // total de elementos
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;

    for (let pos in valores) {
      soma += valores[pos];

      if (valores[pos] > maior) {
        maior = valores[pos];
      }

      if (valores[pos] < menor) {
        menor = valores[pos];
      }
    }

    media = (soma / tot).toFixed(2);
    res.innerHTML = ``;
    res.innerHTML += `<p>Ao todos, temos ${tot} elementos cadastrados.<\p>`;
    res.innerHTML += `<p>O maior numero cadastrado foi ${maior}.<\p>`;
    res.innerHTML += `<p>O menor numero cadastrado foi ${menor}.<\p>`;
    res.innerHTML += `<p>A soma dos numero cadastrados foi ${soma}.<\p>`;
    res.innerHTML += `<p>A media dos numero cadastrados foi ${media}.<\p>`;
  }
}

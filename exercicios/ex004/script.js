/*
function tabuada() {
  let num = document.querySelector("#txtn");
  let tab = document.querySelector("#seltab");

  if (num.value.length == 0) {
    alert("Por favor, digite um valor válido.");
  } else {
    // convertendo o num para número
    let n = Number(num.value);

    // limpando a area da tabuada
    tab.innerHTML = "";
    // looping para gerar a tabuada com o for
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
    } 
    // looping para gerar a tabuada com o while
   // let c = 1;
    //while (c <= 10) {
    //  let item = document.createElement("option");
     // item.text = `${n} x ${c} = ${n * c}`;
    //  tab.appendChild(item);
   //   c++;
   // }
}
} */

// minha resolução
function tabuada() {
  // puxando os valores digitados na tabela
  let num = document.querySelector("#txtn");
  let tab = document.querySelector("#seltab");

  // verificando se o campo número está vazio
  if (num.value.length == 0) {
    alert("Digite um número válido");
  } else {
    //convertendo o valor digitado em número para número inteiro
    let n = Number(num.value);

    // limpando o campo sempre que apertar o botão gerar tabuada
    tab.innerHTML = "";

    // percorrendo os valores para criar a tabuada
    for (let c = 1; c <= 10; c++) {
      // criando o campo option e injetando no HTML
      let item = document.createElement("option");

      // fazendo o cálculo
      item.text = `${n} x ${c} = ${n * c}`;
      tab.appendChild(item);
    }

    // criando o campo option no HTML
    tab.text = document.createElement("option");
  }
}

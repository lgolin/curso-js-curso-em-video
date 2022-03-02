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
    } /*
    // looping para gerar a tabuada com o while
    let c = 1;
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      tab.appendChild(item);
      c++;
    }*/
  }
}

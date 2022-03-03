function adicionar() {
  let num = document.querySelector("#txtn");
  let add = document.querySelector("#addnum");

  let n = Number(num.value);

  if (n.length > 100) {
    alert("digite um valor válido");
    console.log(num);
  } else {
    alert("tudo ok");
  }
}

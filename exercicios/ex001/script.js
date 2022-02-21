function carregar() {
  var msg = document.querySelector("#msg");
  var img = document.querySelector("#img");

  var horaAtual = new Date().getHours();
  msg.innerHTML = `Agora são ${horaAtual} horas.`;

  if (horaAtual < 12) {
    img.src = "./img/manha.png";
    document.body.style.background = "#AC9A8E";
    msg.innerHTML = " Bom dia!";
  } else if (horaAtual < 18) {
    img.src = "./img/tarde.png";
    document.body.style.background = "#d89d6a";
    msg.innerHTML += "<br>Boa tarde!";
  } else {
    img.src = "./img/noite.png";
    document.body.style.background = "#3b4149";
    msg.innerHTML += " Boa noite!";
  }
}

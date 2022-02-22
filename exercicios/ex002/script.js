function verificar() {
  var anoAtual = new Date().getFullYear();
  var fAno = document.querySelector("#txtano");
  var res = document.querySelector("#res");

  if (fAno.value == 0 || fAno.value > anoAtual) {
    alert("Erro! Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = anoAtual - fAno.value;
    var genero = "";

    // criando uma img e atribuindo um id
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "homem";
      if (idade <= 0 && idade >= 10) {
        // criança
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "./img/h1.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "./img/h2.png");
      } else {
        // idoso
        img.setAttribute("src", "./img/h3.png");
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade <= 0 && idade >= 10) {
        // crianca
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "./img/m1.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "./img/m2.png");
      } else {
        // idoso
        img.setAttribute("src", "./img/m3.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.
    `;
    res.appendChild(img);
  }
}

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
        img.setAttribute("src", "./img/homem-crianca.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "./img/homem-jovem.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "./img/homem-adulto.png");
      } else {
        // idoso
        img.setAttribute("src", "./img/homem-idoso.png");
      }
    } else if (fsex[1].checked) {
      genero = "mulher";
      if (idade <= 0 && idade >= 10) {
        // crianca
        img.setAttribute("src", "./img/mulher-crianca.png");
      } else if (idade < 21) {
        // jovem
        img.setAttribute("src", "./img/mulher-jovem.png");
      } else if (idade < 50) {
        // adulto
        img.setAttribute("src", "./img/mulher-adulta.png");
      } else {
        // idoso
        img.setAttribute("src", "./img/mulher-idosa.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.
    `;
    res.appendChild(img);
  }
}

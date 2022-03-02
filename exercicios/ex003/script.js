/*function contar() {
  var inicio = document.querySelector("#inicio").value;
  var fim = document.querySelector("#fim").value;
  var passo = document.querySelector("#passo").value;
  var res = document.querySelector("#res");

  if (inicio > fim) {
    for (var i = inicio; i < fim; i += passo) {
      res.innerHTML += `${i}`;
    }
  }

  if (inicio < fim) {
    for (var i = inicio; i > fim; i -= passo) {
      res.innerHTML += `${i}`;
    }
  }
}*/

function contar() {
  let ini = document.querySelector("#txti");
  let fim = document.querySelector("#txtf");
  let pas = document.querySelector("#txtp");

  if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    res.innerHTML = `Impossível contar.`;
    alert("Por favor, digite um valor válido!");
  } else {
    res.innerHTML = `Contando: <br>`;

    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(pas.value);

    if (p <= 0) {
      alert("Passo invalido! Considerando passo 1");
      p = 1;
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        // contagem crescente
        res.innerHTML += ` \u{1F449} ${c}`;
      }
    } else {
      // contagem regressiva
      for (let c = i; c > f; c -= p) {
        res.innerHTML += ` \u{1F449} ${c}`;
      }
    }

    res.innerHTML += ` \u{1F3C1} Fim.`;
  }
}

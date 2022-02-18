var diaSemana = new Date().getDay();

//console.log(diaSemana);

switch (diaSemana) {
  case 0:
    0;
    console.log("Domingo");
    break;
  case 1:
    1;
    console.log("Segunda");
    break;
  case 2:
    2;
    console.log("Terça");
    break;
  case 3:
    3;
    console.log("Quarta");
    break;
  case 4:
    4;
    console.log("Quinta");
    break;
  case 5:
    5;
    console.log("Sexta");
    break;
  case 6:
    6;
    console.log("Sábado");
    break;
  default:
    console.log("Dia Inválido.");
    break;
}

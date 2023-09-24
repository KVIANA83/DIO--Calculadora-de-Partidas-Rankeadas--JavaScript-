
function calcularNivel(vitorias, derrotas) {
  const saldoRanking = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return {saldoHanking, nivel};
}

let heroi = prompt("Digite seu nome: ");
let vitorias = prompt("Digite a quantidade de vitórias: ");
let derrotas = prompt("Digite a quantidade de derrotas: ");

const resultado = calcularNivel(vitorias, derrotas);
console.log(`O jogador ${heroi} tem um saldo de ${resultado.saldoRanking} e está no nível ${resultado.nivel}`);
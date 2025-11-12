/* atividade 4 */
let temperatura = 10;
if (temperatura > 28) {
    console.log("está calor");

} else if (temperatura < 15) {
    console.log("está frio");

} else {
    console.log("está agradável");
}
let bateria = 20;
const bateriaCompleta = 100;
console.log("iniciando carregamento...");
while (bateria < bateriaCompleta) {
    console.log("carregando...nível atual:", bateria, "%");
    bateria = bateria + 10;

}
/* atividade 1 */
console.log("carga completa");
console.log("nível final:", bateria, "%");

const media_minima = 7;
let notaAluno = 5;
if (notaAluno >= media_minima) {
    console.log("aprovado");
} else { console.log("reprovado") }

/* atividade 2*/
let nomeLanche = "x salada com tomate";
switch (nomeLanche) {
    case "x salada com tomate":
        console.log("o lanche escolhido foi x salada com tomate");
        break;
    case "x tudo":
        console.log("x tudo");
        break;
    case "x tudo":
        console.log("x salada duplo");
        break;
    default:
        console.log("x travesseiro duplo com carne moida e tomate australiano importado da malasia");
}

/* atividade 5 */

let cor = "vermelho";
switch (cor) {
    case "vermelho":
        console.log("a cor escolhida foi vermelho");
        break;s
    case "verde":
        console.log("a cor escolhida foi verde");
        break;
    case "amarelo":
        console.log("a cor escolhida foi amarelo");
        break;
    default:
        console.log("essa cor nao existe");

}
//
let contador = 5;
while (contador >=0){
    console.log(contador);
    contador = contador -1; 
}
console.log("lancar");
//
let dinheiro = 200000000;
let objetivo = 50000000000;
let porMes = 2000000;
while (dinheiro < objetivo){
    dinheiro = porMes + dinheiro;
    console.log("tenho de dinheiro guardado",dinheiro);

}
console.log("objetivo atingido");
let bateria = 20;
const bateriaCompleta = 100;
console.log("iniciando carregamento...");
while (bateria < bateriaCompleta ) {
    console.log("carregando...nível atual:", bateria, "%");
    bateria = bateria + 10;
    
}
console.log("carga completa");
console.log("nível final:", bateria, "%");
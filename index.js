// 1 Classificador de Nível de Herói
// Variaveis - Operadores - Laços de repetição - Estruturas de decisão
//Objetivo - Crie uma variável para armazenar o nome e a quantidade de XP de um herói,
//depois utilize uma estrutura de decisão p/ apresentar alguma das msgs abaixo:
//se XP for: 
//menor que 1001 = Ferro - entre 1001 e 2000 = Bronze - entre 2001 e 5000 = Prata
//entre 5001 e 7000 = Ouro - entre 7001 e 8000 = Platina - entre 8001 e 9000 = Ascendente
//entre 9001 e 10000 = Imortal - maior que 10000 = Radiante
nome = "Jhonny Cage"
const qtdXp = 50000
let msgXp
if (qtdXp < 1001) {
    msgXp = "Ferro";
} else if (qtdXp >= 1001 && qtdXp < 2001) {
    msgXp = "Bronze";
} else if (qtdXp >= 2001 && qtdXp < 5001) {
    msgXp = "Prata";
} else if (qtdXp >= 5001 && qtdXp < 7001) {
    msgXp = "Ouro";
} else if (qtdXp >= 7001 && qtdXp < 8001) {
    msgXp = "Platina";
} else if (qtdXp >= 8001 && qtdXp < 9001) {
    msgXp = "Ascendente";
} else if (qtdXp >= 9001 && qtdXp < 10001) {
    msgXp = "Imortal";
} else if (qtdXp >= 10001) {
    msgXp = "Radiante";
}
console.log("O Herói chamado " +nome+ " adquiriu um total de "+qtdXp+" pts de XP e está no nível " +msgXp+"!!!")
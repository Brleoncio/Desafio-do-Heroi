const nome = "Assasino Arcanjo"

const xpGanho = [(500), (600), (770), (985), (1170), (1240), (850), (650), (2260)]

let experiencia = 0;

for (let i = 0; i < xpGanho.length; i++){
    experiencia += xpGanho[i]; 
}

let nivel;
if(experiencia < 1000){
    nivel = "Ferro";
}else if(experiencia >= 1001 && experiencia <= 2000){
    nivel = "Bronze";
}else if(experiencia >= 2001 && experiencia <= 5000){
    nivel = "Prata";
}else if(experiencia >= 5001 && experiencia <= 7000){
    nivel = "Ouro";
}else if(experiencia >= 7001 && experiencia <= 8000){
    nivel = "Platina";
}else if(experiencia >= 8001 && experiencia <= 9000){
    nivel = "Ascendente";
}else if(experiencia >= 9001 && experiencia <= 10000){
    nivel = "Imortal";
}else if(experiencia >= 10001){
    nivel = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel + ".")
let nomeHeroi = "Dark Night"
let nivelHeroi = ""
let xp = 10002


if (xp <1000){
    nivelHeroi = "Ferro"
}
else if (xp >= 1001 && xp <= 2000){
    nivelHeroi = "Bronze"
}
else if (xp >= 2001 && xp <= 3000){
    nivelHeroi = "Prata"
}
else if (xp >= 3001 && xp <= 4000){
    nivelHeroi = "Ouro"
}
else if (xp >= 4001 && xp <= 5000){
    nivelHeroi = "Platina"
}
else if (xp >= 5001 && xp <= 7000){
    nivelHeroi = "Ascendente"
}
else if (xp >= 7001 && xp <= 10000){
    nivelHeroi = "Imortal"
}
else if (xp > 10001){
    nivelHeroi = "Radiante"
}




console.log(`O herói ${nomeHeroi} está no nível ${nivelHeroi}`);

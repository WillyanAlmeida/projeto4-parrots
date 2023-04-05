const cards = ["<div class='card'><img class='back-face face' src='/img/bobrossparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/bobrossparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/explodyparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/explodyparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/fiestaparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/fiestaparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/metalparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/metalparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/revertitparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/revertitparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/tripletsparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/tripletsparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/unicornparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>",
"<div class='card'><img class='back-face face' src='/img/unicornparrot.gif' alt=''><img class='front-face face' src='/img/back.png' alt=''></div>"]
let teste = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]

let qtdcartas = 1;
while ((qtdcartas%2)!==0 || qtdcartas<4 || qtdcartas > 14) {
    qtdcartas = prompt("digite quantidade de cartas entre 4 e 14");
}
teste1 = [];
for (i=0; teste1.length<qtdcartas;i++){
    teste1[i]=i;
}

teste1.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}
let distcartas = [];
for (i=0;i<teste1.length;i++){
    distcartas[i]=cards[teste1[i]];

}


const selectordiv = document.querySelector('.boxcards');
console.log(selectordiv);
for (i=0;i<teste1.length;i++){
    selectordiv.innerHTML = selectordiv.innerHTML + cards[teste1[i]];

}

const cards = ["<div class='card' onclick='selecionarcard(this)'><img id='1' class='back-face face' src='./img/bobrossparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='1' class='back-face face' src='./img/bobrossparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='2' class='back-face face' src='./img/explodyparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='2' class='back-face face' src='./img/explodyparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='3' class='back-face face' src='./img/fiestaparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='3' class='back-face face' src='./img/fiestaparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='4' class='back-face face' src='./img/metalparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='4' class='back-face face' src='./img/metalparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='5' class='back-face face' src='./img/revertitparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='5' class='back-face face' src='./img/revertitparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='6' class='back-face face' src='./img/tripletsparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='6' class='back-face face' src='./img/tripletsparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='7' class='back-face face' src='./img/unicornparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>",
    "<div class='card' onclick='selecionarcard(this)'><img id='7' class='back-face face' src='./img/unicornparrot.gif' alt=''><img class='front-face face' src='./img/back.png' alt=''></div>"]
//usuario digita quantidade de cartas seguindo criterio descrito no prompt
let qtdcartas = 1;
while ((qtdcartas % 2) !== 0 || qtdcartas < 4 || qtdcartas > 14) {
    qtdcartas = prompt("digite quantidade de cartas entre 4 e 14");
}
//cria uma array com a quantidade de posições informada pelo usuário
const randompositions = [];
for (i = 0; randompositions.length < qtdcartas; i++) {
    randompositions[i] = i;
}
//aplica função random na array com as possições
randompositions.sort(comparador);


function comparador() {
    return Math.random() - 0.5;
}


//gera as cartas de acordo a ordem random 
const selectordiv = document.querySelector('.boxcards');

for (i = 0; i < randompositions.length; i++) {
    selectordiv.innerHTML = selectordiv.innerHTML + cards[randompositions[i]];

}
let contclick = 0;
let x1 = 0;
let c1f, c1b, c2f, c2b, c1id, c2id;


function selecionarcard(cardselector) {

    if (x1 < 2) {
        const frente = cardselector.querySelector('.front-face');
        frente.classList.toggle('front');

        const vers = cardselector.querySelector('.back-face');
        vers.classList.toggle('back');
        if (x1 === 0) {
            c1id = vers.id;
            c1f = frente;
            c1b = vers;
            
        }
        if (x1 === 1) {
            c2id = vers.id;
            c2f = frente;
            c2b = vers;
            
        }


       
        x1++;
        if (c1id === c2id) {
            x1 = 0;
            contclick +=2;


        }
    }
    if (x1 === 2 && c1id != c2id) {
        setTimeout(nomatch, 1000);
        x1++;

    }

    function nomatch() {
        c1f.classList.toggle('front');
        c1b.classList.toggle('back');
        c2f.classList.toggle('front');
        c2b.classList.toggle('back');
        x1 = 0;
        c1id = null;
        c2id = null;
        contclick +=2;


    }
}

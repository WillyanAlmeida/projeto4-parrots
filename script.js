const cards = ["<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='1' data-test='face-up-image' class='back-face face' src='./img/bobrossparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='1' data-test='face-up-image' class='back-face face' src='./img/bobrossparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='2' data-test='face-up-image' class='back-face face' src='./img/explodyparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='2' data-test='face-up-image' class='back-face face' src='./img/explodyparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='3' data-test='face-up-image' class='back-face face' src='./img/fiestaparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='3' data-test='face-up-image' class='back-face face' src='./img/fiestaparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='4' data-test='face-up-image' class='back-face face' src='./img/metalparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='4' data-test='face-up-image' class='back-face face' src='./img/metalparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='5' data-test='face-up-image' class='back-face face' src='./img/revertitparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='5' data-test='face-up-image' class='back-face face' src='./img/revertitparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='6' data-test='face-up-image' class='back-face face' src='./img/tripletsparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='6' data-test='face-up-image' class='back-face face' src='./img/tripletsparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='7' data-test='face-up-image' class='back-face face' src='./img/unicornparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>",
    "<div class='card' data-test='card' onclick='selecionarcard(this)'><img id='7' data-test='face-up-image' class='back-face face' src='./img/unicornparrot.gif' alt=''><img class='front-face face' data-test='face-down-image'  src='./img/back.png' alt=''></div>"]
//usuario digita quantidade de cartas seguindo criterio descrito no prompt
let qtdcartas = 1;
while ((qtdcartas % 2) !== 0 || qtdcartas < 4 || qtdcartas > 14) {
    qtdcartas = prompt("digite quantidade de cartas entre 4 e 14");
}
qtdcartas1 = Number(qtdcartas);
//cria uma array com a quantidade de posições informada pelo usuário
const randompositions = [];
for (i = 0; randompositions.length < qtdcartas1; i++) {
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
let match = 0;
let x1 = 0;
let c1f, c1b, c2f, c2b, c1id, c2id;


function selecionarcard(cardselector) {

    if (x1 < 2) {
        const selectconf = cardselector.querySelector('.front');
        console.log(selectconf);

        if (selectconf === null) {
            const frente = cardselector.querySelector('.front-face');
            frente.classList.add('front');

            const vers = cardselector.querySelector('.back-face');
            vers.classList.add('back');
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
            console.log(cardselector);
            x1++;
            if (c1id === c2id) {
                x1 = 0;
                contclick += 2;
                match += 2;
                if (match === qtdcartas1) {
                    setTimeout(mens, 1000);
                }
            }
        }
        if (x1 === 2 && c1id != c2id) {
            setTimeout(nomatch, 1000);
            x1++;
        }
    }

    
}
function nomatch() {
    c1f.classList.toggle('front');
    c1b.classList.toggle('back');
    c2f.classList.toggle('front');
    c2b.classList.toggle('back');
    x1 = 0;
    c1id = null;
    c2id = null;
    contclick += 2;


}



function mens() {
    alert('Você ganhou em ' + contclick + 'jogadas!');

}

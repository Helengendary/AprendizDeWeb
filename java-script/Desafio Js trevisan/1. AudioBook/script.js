let atual = 1;
let play = false;
let audio = document.getElementById("audio-capitulo");
let bplay = document.getElementById("play-pause");

let caminho = "./books/dom-casmurro/" + atual + ".mp3";
audio.setAttribute("src", caminho);

let titulo = document.getElementById("capitulo");
titulo.innerHTML += atual;

function Proximo() {
    
    
    if (atual == 10) {
        atual = 0;
    }
    
    
    atual += 1;
    titulo.innerHTML = "Capítulo " + atual;
    caminho = "./books/dom-casmurro/" + atual + ".mp3";
    audio.setAttribute("src", caminho)

    if (play) {
        audio.play();
    }

}

function Pause(){

    if (play) {
        audio.pause();
        play = false;
        bplay.setAttribute("class", "bi-play-circle-fill");
    } else {
        audio.play();
        play = true;
        bplay.setAttribute("class", "bi-pause-circle-fill");
    }

}

function Anterior() {
    
    
    if (atual == 1) {
        atual = 11;
    }
    
    atual -= 1;
    titulo.innerHTML = "Capítulo " + atual;
    caminho = "./books/dom-casmurro/" + atual + ".mp3";
    audio.setAttribute("src", caminho)
}
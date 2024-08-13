let play = false;
let atual = 1;
let audio = document.getElementById("audio-capitulo");
let caminho = "./books/dom-casmurro/" + atual + ".mp3";
audio.setAttribute("src", caminho);


let titulo = document.getElementById("capitulo")
titulo.innerHTML += atual;

function Proximo() {
    
    
    if (atual == 10) {
        atual = 0;
    }
    
    
    atual += 1;
    titulo.innerHTML = "Capítulo " + atual;
    caminho = "./books/dom-casmurro/" + atual + ".mp3";
    audio.setAttribute("src", caminho)
}

function Pause(){

    if (play) {
        audio.pause();
        play = false;
    } else {

        audio.play();
        play = true;
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
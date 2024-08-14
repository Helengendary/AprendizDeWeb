let temaCor = document.getElementById("nome-cor-selecionada"); 
let principal = document.getElementById("imagem-visualizacao");
let miniCostas = document.getElementById("0-imagem-miniatura");
let miniLadin = document.getElementById("1-imagem-miniatura");
let miniFrente = document.getElementById("2-imagem-miniatura");
let tituloProduto = document.getElementById("titulo-produto");


let atual = 0;
let indexFoto = 1;
let tamanhoRelogio = 45

let isCheckedCor = false;
let isCheckedTam = false;
let isCheckedSize = false;


let pastaCor = "verde-cipreste"
let tituloCor = "Verde Cipreste"
let TamanhoImagem = ""

temaCor.innerHTML += tituloCor;

function trocaCor()
{
    
    for (let index = 0; isCheckedCor == false; index++) {
        
        let idCor = index + "-cor";
        let cor = document.getElementById(idCor);
        
        isCheckedCor = cor.checked;
        
        if (isCheckedCor) {
            
            atual = index
            
            if (atual == 0) {
                pastaCor = "verde-cipreste"
                tituloCor = "Verde Cipreste"
            } else if (atual == 1) {
                pastaCor = "azul-inverno"
                tituloCor = "Azul Inverno"
            } else if (atual == 2) {
                pastaCor = "meia-noite"
                tituloCor = "Meia Noite"
            } else if (atual == 3) {
                pastaCor = "estelar"
                tituloCor = "Estelar"
            } else {
                pastaCor = "rosa-claro"
                tituloCor = "Rosa Claro"
            }
            
            temaCor.innerHTML = "Cor - " + tituloCor;

            principal.setAttribute("src", "./imagens/opcoes-cores/imagens-" + pastaCor  + "/imagem-" + indexFoto + ".jpeg");
            miniCostas.setAttribute("src", "./imagens/opcoes-cores/imagens-" + pastaCor  + "/imagem-0.jpeg");
            miniLadin.setAttribute("src", "./imagens/opcoes-cores/imagens-" + pastaCor  + "/imagem-1.jpeg");
            miniFrente.setAttribute("src", "./imagens/opcoes-cores/imagens-" + pastaCor  + "/imagem-2.jpeg");

            tituloProduto.innerHTML = "Pulseira loop esportiva " + pastaCor + " para caixa de " + tamanhoRelogio + " mm"
        }
    }

    isCheckedCor = false;
}

function trocarImagem() {

    for (let index = 0; isCheckedTam == false; index++) {

        let idImagem = index + "-imagem";

        let imagem = document.getElementById(idImagem);

        isCheckedTam = imagem.checked;


        if (isCheckedTam) {
            
            indexFoto = index;

            principal.setAttribute("src", "./imagens/opcoes-cores/imagens-" + pastaCor  + "/imagem-"  + index +".jpeg");
        }
    }

    isCheckedTam = false;
}

function trocarTamanho() {

    for (let index = 0; isCheckedSize == false; index++) {

        let idTamanho = index + "-tamanho";

        let size = document.getElementById(idTamanho);

        isCheckedSize = size.checked;

        if (isCheckedSize) {

            if (index == 0) {
                tamanhoRelogio = 41;
                principal.setAttribute("style", "width:90%");
            } else {
                tamanhoRelogio = 45;
                principal.setAttribute("style", "width:100%");
            }

            tituloProduto.innerHTML = "Pulseira loop esportiva " + pastaCor + " para caixa de " + tamanhoRelogio + " mm"
        }
    }

    isCheckedSize = false;
}
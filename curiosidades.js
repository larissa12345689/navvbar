window.addEventListener("scroll", function(){
     let header = document.querySelector('#header')
     header.classList.toggle('rolagem', window.scrollY > 0)
 })


function animar(){
    const btn = document.getElementById("hamburguer")
    const menuExtra = document.getElementById("menu-extra");


    btn.classList.toggle('ativar')
    menuExtra.classList.toggle("aberto");

}



const quadro = document.getElementById("quadro");
const conteudo = document.getElementById("conteudo");
const playBtn = document.getElementById("VideoPlayBtn");

let aberto = false;

playBtn.addEventListener("click", () => {

    if (!aberto) {
        quadro.style.height = "370px";      // altura quando aberto
        conteudo.style.height = "400px";    // área rolável
        conteudo.style.opacity = 1;
        aberto = true;
    } else {
        quadro.style.height = "70px";       // volta ao normal
        conteudo.style.height = "0px";
        conteudo.style.opacity = 0;
        aberto = false;
    }

});
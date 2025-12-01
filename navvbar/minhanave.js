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




































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








// const carrosel = document.querySelector(".carrosel")
// const btnPrev = document.querySelector(".btn-prev");
// const btnNext = document.querySelector(".btn-next");

// btnNext.addEventListener("click", () => {
//     carrosel.scrollLeft += 300;
// });

// btnPrev.addEventListener("click", () => { /*A função passada é uma arrow function vazia de parâmetros */
//     carrosel.scrollLeft -= 300;
// });




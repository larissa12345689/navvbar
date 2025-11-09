window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})



function animar(){
    const btn = document.getElementById("hamburguer")
    btn.classList.toggle('ativar')

}

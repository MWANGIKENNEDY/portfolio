const menuButton=document.querySelector('.fa.fa-align-justify');
const menuLinks=document.querySelector('.links');




menuButton.addEventListener('click',function(){
    menuLinks.classList.toggle('show');
})

window.addEventListener("scroll",function(){
    var navbar=document.querySelector('nav');

    navbar.classList.toggle("sticky",window.scrollY > 0);
});
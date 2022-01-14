const menuButton=document.querySelector('.fa.fa-align-justify');
const menuLinks=document.querySelector('.links');

menuButton.addEventListener('click',function(){
    menuLinks.classList.toggle('show');
})
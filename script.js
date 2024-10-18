const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const linksContainer = document.querySelector('nav .links');


menuBtn.addEventListener('click',function(){
    linksContainer.classList.toggle("active");
})
closeBtn.addEventListener('click',function(){
    linksContainer.classList.toggle("active");
})
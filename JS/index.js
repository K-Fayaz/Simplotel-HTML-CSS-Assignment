let hamburger = document.querySelector('.hamburger');
let pageLinks = document.querySelector('.links-container')

hamburger.addEventListener('click',()=>{
    pageLinks.style.display = (pageLinks.style.display === 'none' || pageLinks.style.display === '') ? 'block' : 'none';
},false);
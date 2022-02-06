const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Updated: ${document.lastModified}`;

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
 }
 const x = document.getElementById('hamButton')
 x.onclick = toggleMenu;

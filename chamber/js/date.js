const d = new Date();
const year = d.getFullYear();

document.querySelector("#currentYear").textContent = year;
document.querySelector("#pageLastUpdated").innerHTML = `Last update: ${document.lastModified}`;


function toogleMenu(){
	document.getElementsByClassName("navigation") [0].classList.toogle("responsive");
}

const hamButton = document.querySelector('.ham');
const mainMenu = document.querySelector('.navigation');

hamButton.addEventListener('click', () =>{mainMenu.classList.toggle('responsive')}, false);

window.onresize = () => {
    if(window.innerWidth > 760){
        mainMenu.classList.remove('responsive');
    }
}

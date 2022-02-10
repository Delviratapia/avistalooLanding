/* NAVBAR */
const content = document.querySelector('#Que-es');
const secondContent = document.querySelector('#Caracteristicas');
/*Scroll to Que-es*/
function firstscroll(){
  content.scrollIntoView({behavior: 'smooth'});
}
function secondscroll(){
  secondContent.scrollIntoView({behavior: 'smooth'});
}
/*MOSTRAR MENU MOBILE*/

document.getElementById("nav-toggle").onclick = function() {
  document.getElementById("nav-content").classList.toggle("hidden");
};

/*ScrollUp*/

const scrollup = document.querySelector("#toTopButton");
scrollup.onclick = function() {
  window.scrollTo({top:0, behavior: 'smooth'});
};



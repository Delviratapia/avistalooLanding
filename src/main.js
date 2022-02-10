/* NAVBAR */
const content = document.querySelector('#Que-es').getBoundingClientRect().top;
const secondContent = document.querySelector('#Caracteristicas').getBoundingClientRect().top;
/*Scroll to Que-es*/
document.querySelector('#secondLink').onclick = function(){
  window.scrollTo(0,content - 75);
}
document.querySelector('#thirdLink').onclick = function(){
  window.scrollTo(0,secondContent);
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



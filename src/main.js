/* NAVBAR */

/*MOSTRAR MENU MOBILE*/

document.getElementById("nav-toggle").onclick = function() {
  document.getElementById("nav-content").classList.toggle("hidden");
};

/*ScrollUp*/

const scrollup = document.querySelector("#toTopButton");
scrollup.onclick = function() {
  window.scrollTo({top:0, behavior: 'smooth'});
};

/* NAVBAR */
const content = document.querySelector('#Que-es');
const secondContent = document.querySelector('#Caracteristicas');

document.querySelector('#secondLink').onclick = function() {
  content.scrollIntoView({behavior: 'smooth'});
};
document.querySelector('#thirdLink').onclick = function() {
  secondContent.scrollIntoView({behavior: 'smooth'});
};

document.getElementById("nav-toggle").onclick = function() {
  document.getElementById("nav-content").classList.toggle("hidden");
};

/*ScrollUp*/

const scrollup = document.querySelector("#toTopButton");
scrollup.onclick = function() {
  window.scrollTo({top:0, behavior: 'smooth'});
};



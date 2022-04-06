const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

const navShow = () => {
    
    burger.addEventListener('click', () => {
        if(navLinks.classList.contains('expand')){
            navLinks.classList.toggle('close');
        }
        else{
            navLinks.classList.toggle('expand');
        }
        burger.classList.toggle('toggle');  
    });
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  

navShow();
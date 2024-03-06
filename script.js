

var typed = new Typed('#element', {
    strings: ['Frontend Developer.', 'Web Developer.'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    loop: true
  });





window.addEventListener("scroll",function(){
  var nav = document.querySelector("nav")
  nav.classList.toggle("sticky",window.scrollY > 0);

})


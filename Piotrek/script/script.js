// Parllax

let moon = document.getElementById('moon')
let btn = document.getElementById('btn')
let rocks = document.getElementById('rocks');
let bridge = document.getElementById('bridge');
let wizard = document.getElementById('wizard');
let sky = document.getElementById('sky');
let boss = document.getElementById('boss');
let h1 = document.querySelector('h1');



window.addEventListener('scroll', function(){
    let value = this.window.scrollY;
    h1.style.opacity = value * -1;
    boss.style.top = value * -0.6 + 'px';
    rocks.style.top = value * 0.3 + 'px'; 
    bridge.style.top = value * 0.3 + 'px'; 
    wizard.style.top = value * 0.3 + 'px'; 
    moon.style.top = value * 0.3 + 'px'; 
    sky.style.top = value * 0.3 + 'px'; 
    btn.style.marginTop = value + 'px';
})

// Smooth

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 28000, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  // Audio

  function play() {
    let audio = document.getElementById("audioPlayer");
    audio.play();
    let btn = document.querySelector('#btn');
    btn.classList.add('active');
    let hear = document.querySelector('.hear');
    hear.classList.add('active');
  };

  // FadeIn



  function fadeIn() {
    let sun = document.querySelector('#sun');
    sun.classList.add('active');

    let pw = document.querySelector('#pw');
    pw.classList.add('active');

    let h1 = document.querySelector('.h1');
    h1.classList.add('active');

    let hypers = document.querySelector('.hypers');
    hypers.classList.add("active")

    let mute = document.querySelector('#mute');
    mute.classList.add("active");

    let circle = document.querySelector('.circle')
    circle.classList.add('active');

    let h2 = document.querySelector('h2');
    h2.classList.add('active');
    let p = document.querySelector('p');
    p.classList.add('active');

    let read = document.querySelector('.read');
    read.classList.add('active');

    let header = document.querySelector('header')
    header.classList.add('active');
  };

  function menu(){
    let menu = document.querySelector('.menu');
    menu.classList.add('active');
  }

  function start(){
    setTimeout(fadeIn, 29000);
    setTimeout(menu, 35000);
  };


  

  // mute
  function mute() {
    let audio = document.getElementById("audioPlayer");
    audio.pause();
  };

  // FadeOut 

  function fadeOut(){
    let hypers = document.querySelector('.hypers');
    hypers.classList.remove("active");

    let mute = document.querySelector('#mute');
    mute.classList.remove("active");

    let sun = document.querySelector('#sun');
    sun.classList.remove('active');
  }


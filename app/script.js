const swiper = new Swiper('.swiper', {
   
    
  loop: true,
  freeMode: true,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
    stopOnLastSlide: true,
  },
  freeMode: true,
  speed: 2500,
  freeModeMomentum: false,
  
  
  
  
      breakpoints: {
        
        // when window width is >= 480px
        480: {
          slidesPerView: 1.5,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        // when window width is >= 800px
        800: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        // when window width is >= 960px
        960: {
          slidesPerView: 3.5,
          spaceBetween: 60
        },
        // when window width is >= 11200px
        1280: {
          slidesPerView: 3.5,
          spaceBetween: 60
        },
        // when window width is >= 11200px
        1400: {
          slidesPerView: 4.5,
          spaceBetween: 60
        }
      }
  });

 // Get the button
let mybutton = document.getElementsByName("top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "flex";
    mybutton.style.justifyContent = "center";
    mybutton.style.alignItems = "center";
  } else {
    mybutton.style.display = "none";
    mybutton.style.justifyContent = "center";
    mybutton.style.alignItems = "center";
  }
}

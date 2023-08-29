// hero videoplayer-------
let videolayer = document.querySelector('.videolayer');
let Uplay = document.querySelector('#Uplay');
videolayer.addEventListener('click', ()=>{
  setTimeout(() => {
    videolayer.classList.add('anim');
    setTimeout(() => {
      videolayer.style.display = 'none';
    }, 2000);
  }, 1000);
  Uplay.src += '?autoplay=1';
});

// our work--------
var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swipBtn',
        prevEl: '.swipBtn2',
    },
    breakpoints: {
        420: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
    },
});

// testimonial------------
var swiper = new Swiper('.mySwiper1', {
    slidesPerView: 1,
    spaceBetween: 0,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
    },
    breakpoints: {
        420: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
    },
});


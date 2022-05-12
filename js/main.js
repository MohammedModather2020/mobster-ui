$(function () {
  'use strict';
  // ------------------------------------------------------------------------->
  // trigger swiper scroll
  new Swiper('.clients-swiper', {
    slidesPerView: 6,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });
  // -------------------------------------------------------------------------->
  // trigger menu mobile
  var i = document.querySelector('.burger-container'),
    a = document.querySelector('.header');
  i.onclick = function () {
    a.classList.toggle('menu-opened');
  };
});

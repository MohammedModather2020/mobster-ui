$(function () {
  'use strict';
  // Add Smooth Scroll
  // $('html , body').animate({ scrollTop: 0 }, 400);
  // -------------------------------------------------------------------------->
  var scrollButton = $('#scroll-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      scrollButton.show();
      $('.navbar-header .container').css({ backgroundColor: '#F0EEF5',borderRadius:'1rem' });
    } else {
      scrollButton.hide();
      $('.navbar-header .container').css({ backgroundColor: 'unset',borderRadius:'0' });
    }
  });
  // click button as scroll to top
  scrollButton.on('click', function () {
    $('html ,body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
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

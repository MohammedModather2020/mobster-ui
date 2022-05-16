$(function () {
  'use strict';
  // Add Smooth Scroll
  // $('html , body').animate({ scrollTop: 0 }, 400);
  // -------------------------------------------------------------------------->
  var scrollButton = $('#scroll-top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      scrollButton.show();
      if ($('.navbar-header .container').parent().hasClass('home')) {
        $('.navbar-header .container').css({
          backgroundColor: '#3D58F3',
          borderRadius: '1rem',
        });
      } else {
        $('.navbar-header .container').css({
          backgroundColor: '#0d6efd',
          borderRadius: '1rem',
        });
      }
    } else {
      scrollButton.hide();
      $('.navbar-header .container').css({
        backgroundColor: 'unset',
        borderRadius: '0',
      });
    }
  });
  // click button as scroll to top
  scrollButton.on('click', function () {
    $('html ,body').animate(
      {
        scrollTop: 0,
      },
      100
    );
  });
  // ------------------------------------------------------------------------->
  // trigger swiper scroll
  if ($('.clients .clients-swiper').hasClass('clients-swiper')) {
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
  }
  // -------------------------------------------------------------------------->
  // trigger menu mobile
  var i = document.querySelector('.burger-container'),
    a = document.querySelector('.header');
  i.onclick = function () {
    a.classList.toggle('menu-opened');
  };
  // -------------------------------------------------------------------------->
  // trigger aos animate
  AOS.init();
});

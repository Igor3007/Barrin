import "./import/modules";
import "./import/components";
import svgPolyfill from "../../node_modules/svg4everybody/dist/svg4everybody.js";
import Swiper, {
  Pagination,
  Navigation,
  Thumbs,
  Autoplay,
} from 'swiper';
import 'jquery.inputmask/dist/jquery.inputmask.bundle';

import $ from 'jquery';
import './import/jquery.fancybox.min';

svgPolyfill();

$(document).ready(function () {



  /* tabs */
  
  const __$ = document.querySelector.bind(document);
  const __$$ = document.querySelectorAll.bind(document);

  const tabs = __$$(".firstblock-tab__nav ul li");
  const panes = __$$(".firstblock-tab__item");

  const tabActive = __$(".firstblock-tab__nav ul li.active");
  const line = __$(".firstblock-tab__nav .line");

  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";

  tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function (e) {
      e.preventDefault()
      __$(".firstblock-tab__nav ul li.active").classList.remove("active");
      __$(".firstblock-tab__item").classList.remove("active"); 
      $(".firstblock-tab__item").removeClass("active"); //пересмотреть

      line.style.left = this.offsetLeft + "px";
      line.style.width = this.offsetWidth + "px";

      this.classList.add("active");
      pane.classList.add("active");
    };
  });

  //tabs2

  const tabs2 = __$$(".infrastructure-tab__nav ul li");
  const panes2 = __$$(".infrastructure-tab__item");

  const tabActive2 = __$(".infrastructure-tab__nav ul li.active");
  const line2 = __$(".infrastructure-tab__nav .line");

  line2.style.left = tabActive2.offsetLeft + "px";
  line2.style.width = tabActive2.offsetWidth + "px";

  tabs2.forEach((tab2, index) => {
    const pane2 = panes2[index];

    tab2.onclick = function (e) {
      e.preventDefault()
      __$(".infrastructure-tab__nav ul li.active").classList.remove("active");
      __$(".infrastructure-tab__item").classList.remove("active");
      $(".infrastructure-tab__item").removeClass("active"); //пересмотреть


      line2.style.left = this.offsetLeft + "px";
      line2.style.width = this.offsetWidth + "px";

      this.classList.add("active");
      pane2.classList.add("active");
    };
  });

    //скролл плавный
    $('.infrastructure-tab__nav li').on('click', function() {

      var $page = $('html, body');
      var $heightHeader = $('.header-top').height();

        $page.animate({
            scrollTop: $('.infrastructure__content').offset().top - $heightHeader
        }, 0);
        return false;
    });

//.about__gallery .swiper-container
Swiper.use([Pagination, Navigation]);
var swiper2 = new Swiper('.about__gallery .swiper-container', {

  slidesPerView: 2,
  spaceBetween: 40,
  navigation: {
    nextEl: '.swiper-about-nav__next',
    prevEl: '.swiper-about-nav__prev',
  },

  pagination: {
    el: '.swiper-about-nav__dots',
    clickable: true,
  }

});

//.infrastructure-item__right .swiper-container
Swiper.use([Pagination, Navigation]);
var swiper2 = new Swiper('.infrastructure-item__right .swiper-container', {

  slidesPerView: 1,
  spaceBetween: 1,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-infrastructure-nav__next',
    prevEl: '.swiper-infrastructure-nav__prev',
  },

  pagination: {
    el: '.swiper-infrastructure-nav__dots',
    clickable: true,
  }

});

//.sale-department__slider .swiper-container
Swiper.use([Pagination, Navigation]);
var swiper2 = new Swiper('.sale-department__slider .swiper-container', {

  slidesPerView: 3,
  spaceBetween: 40,
  observer: true,
  loop: true,
  observeParents: true,
  navigation: {
    nextEl: '.swiper-sale-nav__next',
    prevEl: '.swiper-sale-nav__prev',
  },

   

});

//.gallery-jk__slider .swiper-container
Swiper.use([Pagination, Navigation]);
var swiper2 = new Swiper('.gallery-jk__slider .swiper-container', {

  slidesPerView: 1.2,
  spaceBetween: 40,
  observer: true,
  loop: true,
  centeredSlides: 'auto',
  observeParents: true,
  navigation: {
    nextEl: '.swiper-gallery-nav__next',
    prevEl: '.swiper-gallery-nav__prev',
  },

  pagination: {
    el: '.swiper-gallery-dots',
    clickable: true,
  }

});


});
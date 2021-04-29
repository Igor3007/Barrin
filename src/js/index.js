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

    tab.onclick = function () {
      __$(".firstblock-tab__nav ul li.active").classList.remove("active");
      __$(".firstblock-tab__item").classList.remove("active");

      line.style.left = this.offsetLeft + "px";
      line.style.width = this.offsetWidth + "px";

      this.classList.add("active");
      pane.classList.add("active");
    };
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


});
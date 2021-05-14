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

import $, { map } from 'jquery';
import './import/jquery.fancybox.min';

svgPolyfill();

$(document).ready(function () {

  //mobile menu

  $('.burger').on('click', function () {
    $(this).toggleClass('open')
    $('.mobile-menu').toggleClass('open')
    $('html').toggleClass('hidden')
  });

  $('.mobile-menu__close svg').on('click', function () {
    $('.burger').toggleClass('open')
    $('.mobile-menu').toggleClass('open')
    $('html').toggleClass('hidden')
  });

  //закрыть при клике вне
  $(document).on('click', function (e) {
    var div = $(".burger, .mobile-menu"); //класс элемента вне которого клик
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      //закрыть popup
      if ($('.burger').hasClass('open')) {
        $('.burger').trigger('click')
      }

    }
  });

  //mask
  $('input[type="tel"]').inputmask("+7999-999-99-99");
  

  //tabs2

  if(document.querySelector('.line')){
    
  

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

  /* tabs 2 */

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


  }



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
  }, 

  breakpoints: {
    0: {
      spaceBetween: 15,
      slidesPerView: 1.2,
    },
    359: {
      spaceBetween: 15,
      slidesPerView: 1.6,
    },
    580: {
      spaceBetween: 15,
      slidesPerView: 2,
    },
    767: {
      spaceBetween: 15,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 15,
      slidesPerView: 2,
    },
    1280: {
      spaceBetween: 40,
      slidesPerView: 2,
    },
  },

  

});

//.about__gallery-details .swiper-container
Swiper.use([Pagination, Navigation]);
var swiper2 = new Swiper('.about__gallery-details .swiper-container', {

  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-about-nav__next',
    prevEl: '.swiper-about-nav__prev',
  },

  pagination: {
    el: '.swiper-about-nav__dots',
    clickable: true,
  }, 

  breakpoints: {
    0: {
      spaceBetween: 15,
      slidesPerView: 1.2,
    },
    359: {
      spaceBetween: 15,
      slidesPerView: 1.6,
    },
    580: {
      spaceBetween: 15,
      slidesPerView: 2,
    },
    767: {
      spaceBetween: 15,
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 0,
      slidesPerView: 1, 
    },
    1280: {
      spaceBetween: 0,
      slidesPerView: 1,
    },
  },

  

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

  breakpoints: {
    0: {
      spaceBetween: 5,
      slidesPerView: 1,
    },
    480: {
      spaceBetween: 5,
    },
    
    580: {
      spaceBetween: 15,
    },
    767: {
      spaceBetween: 15,
    },
    1024: {
      spaceBetween: 15,
    },
    1280: {
      spaceBetween: 40,
    },
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
  },

  breakpoints: {
    0: {
      spaceBetween: 15,
    },
    580: {
      spaceBetween: 40,
    },
    
  },

});


});

ymaps.ready(function () {

  try {

    var point = mapSetting.mapPointCoordinats.split(',');

    var myMap = new ymaps.Map('map-container', {
        center: point,
        zoom: 10,
        controls: []
      }, {
        suppressMapOpenBlock: true
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ), 

      myPlacemark = new ymaps.Placemark(point, {
        hintContent: mapSetting.mapHintContent,
        balloonContent: mapSetting.mapBaloonContent
      }, {
        iconLayout: 'default#image',
        iconImageHref: '/img/svg/ic_pen.svg',
        iconImageSize: [60, 60],
        iconImageOffset: [-30, -60]
      });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add('zoomControl');
    myMap.controls.add('fullscreenControl');

  } catch {

    console.error('Нет координат для карты');

  }


});
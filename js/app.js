function hideOnScroll(name,name_active){
  // name - имя скрываемого блока 
  // name_active
  let prevScrollPos = window.pageYOffset;
  let blockName = document.querySelector('.'+name)

    window.onscroll = function(){
    let currentScrollPos = window.pageYOffset;

     if(prevScrollPos > currentScrollPos){
        blockName.classList.add(name_active)
     }
     if(currentScrollPos < 50 || prevScrollPos < currentScrollPos){
      blockName.classList.remove(name_active)
     }
     prevScrollPos = currentScrollPos;
   }
}
hideOnScroll('menu','menu-active');

function preloader(name){
  window.addEventListener('load',function(){
    let element = document.querySelector('.'+name);
    element.classList.add('preloader__hide')
  })
}
preloader('preloader')
function burger(){
  let burgerBtn = document.querySelector('.mobile__menu-btn')
  let burgerNav = document.querySelector('.mobile__menu')
  let bodyWrap = document.querySelector('.wrapper')
  let contactBtn = document.querySelector('.menu-contact-btn')
  contactBtn.addEventListener('click',function(){
    bodyWrap.classList.toggle('ov-hiden')
    burgerBtn.classList.toggle('mobile___menu-btn-active')
    burgerNav.classList.toggle('mobile__menu-active')
  })
  burgerBtn.addEventListener('click',function(){
    bodyWrap.classList.toggle('ov-hiden')
    burgerBtn.classList.toggle('mobile___menu-btn-active')
    burgerNav.classList.toggle('mobile__menu-active')

  })
}
burger()
function touchHover(){
  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
  };
      let body=document.querySelector('body');
  if(isMobile.any()){
      body.classList.add('touch');
      let arrow=document.querySelectorAll('.submenu-arrow');
    for(i=0; i<arrow.length; i++){
        let thisLink=arrow[i].previousElementSibling;
        let subMenu=arrow[i].nextElementSibling;
        let thisArrow=arrow[i];
  
        thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function(){
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    }
  }else{
    body.classList.add('mouse');
  }
}
touchHover()
                                // SWIPER 
var swiper = new Swiper('.header', {
  speed: 600,
  parallax: true,
  loop: true,
  pagination: {
    el: '.slider__nav',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  effect: 'cube',
  cubeEffect: {
    slideShadows: false,
    shadow: false,
    shadowOffset: 30,
    shadowScale: 0.6
  }
});
var swiper = new Swiper('.projects__body', {
  slidesPerView: 'auto',
  loop: true,
  speed: 600,
  parallax: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 20,
    stretch: 50,
    slideShadows: false,

  }
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  
  thumbs: {
    swiper: galleryThumbs
  }
});


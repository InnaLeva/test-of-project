import Swiper from 'swiper/bundle';
// import 'swiper/swiper-bundle.css';

const swiper = new Swiper('.swiper', {
// const swiper = new Swiper('.swiper-projects', {
  direction: 'horizontal',
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
  // on: {
  //   slideChange: btnDisable,
  // },
});

// export function btnDisable() {
//   const btnNext = document.querySelector('.custom-button-next');
//   const btnPrev = document.querySelector('.custom-button-prev');
//   const totalSlideAmount = swiper.slides.length;
//   const activeSlideIndex = swiper.activeIndex;

//   if (activeSlideIndex === totalSlideAmount - 1) {
//     btnNext.disabled = true;
//     btnNext.classList.add('nav-button-disabled');
//   } else {
//     btnNext.disabled = false;
//     btnNext.classList.remove('nav-button-disabled');
//   }

//   if (activeSlideIndex === 0) {
//     btnPrev.disabled = true;
//     btnPrev.classList.add('nav-button-disabled');
//   } else {
//     btnPrev.disabled = false;
//     btnPrev.classList.remove('nav-button-disabled');
//   }
// }

// btnDisable();


// const reviewSection = document.querySelector('.section-reviews')
//  const swiperStyles = Array.from(document.styleSheets)
// if (reviewSection) {
//   swiperStyles.find(sheet => sheet.href && sheet.href.includes('reviews-slider')  )
// }
// if (swiperStyles) {
//   swiperStyles.disabled = true;
// }
// swiper-button-prev swiper-button-disabled
// swiper-initialized swiper-horizontal swiper-backface-hidden

// .swiper-button-prev
// .swiper-button-next
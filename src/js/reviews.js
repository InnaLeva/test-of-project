import axios from 'axios';
import Swiper from 'swiper';

let totalReviews = 0;
let currentSlideIndex = 0;

export async function fetchReviews(start = 0, perView = 4) {
  try {
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
    const reviews = response.data;
    totalReviews = reviews.length;

    if (totalReviews === 0) {
      renderPlaceholder('Not found');
    } else {
      const limitedReviews = reviews.slice(start, start + perView);
      renderReviews(limitedReviews);
      updateNavigationState(perView);
    }
  } catch (error) {
    showErrorPopup('Failed to load reviews. Please try again.');
  }
}

function renderReviews(reviews) {
  // const swiperWrapper = document.querySelector('.swiper-wrapper');
  const swiperWrapper = document.querySelector('.swiper-wrapper.swiper-rew');
  swiperWrapper.innerHTML = '';
  reviews.forEach(review => {
    const slide = document.createElement('li');
    slide.classList.add('swiper-slide', 'review-item');
    slide.innerHTML = `
      <div class="review-item-content">
        <img class="image-reviews" src="${review.avatar_url}" alt="${review.author}">
        <b class="name-reviews">${review.author}</b>
        <p class="text-reviews">${review.review}</p>
      </div>`;
    swiperWrapper.appendChild(slide);
  });

  swiper.update();
}

function renderPlaceholder(message) {
  // const swiperWrapper = document.querySelector('.swiper-wrapper');
  const swiperWrapper = document.querySelector('.swiper-wrapper.swiper-rew');
  const placeholder = document.createElement('li');
  placeholder.classList.add('swiper-slide', 'review-item');
  placeholder.textContent = message;
  swiperWrapper.appendChild(placeholder);
}

function showErrorPopup(message) {
  const popup = document.querySelector('.error-popup');
  popup.textContent = message;
  popup.classList.add('active');
  setTimeout(() => {
    popup.classList.remove('active');
  }, 3000);
}

function updateNavigationState(perView) {
  const prevButton = document.querySelector('.swiper-button-prev');
  const nextButton = document.querySelector('.swiper-button-next');

  if (currentSlideIndex === 0) {
    prevButton.classList.add('swiper-button-disabled');
  } else {
    prevButton.classList.remove('swiper-button-disabled');
  }

  if (currentSlideIndex + perView >= totalReviews) {
    nextButton.classList.add('swiper-button-disabled');
  } else {
    nextButton.classList.remove('swiper-button-disabled');
  }
}

export const swiper = new Swiper('.reviews-slider', {
  slidesPerView: 4,
  spaceBetween: 16,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  longSwipesMs: 300,
  longSwipesRatio: 0.5,
  threshold: 10,
  resistance: true,
  resistanceRatio: 0.85,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
  on: {
    slideChange: () => updateNavigationState(swiper.params.slidesPerView),
  },
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  const perView = swiper.params.slidesPerView;
  if (currentSlideIndex + perView < totalReviews) {
    currentSlideIndex += 1;
    fetchReviews(currentSlideIndex, perView);
  }
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
  const perView = swiper.params.slidesPerView;
  if (currentSlideIndex > 0) {
    currentSlideIndex -= 1;
    fetchReviews(currentSlideIndex, perView);
  }
});

const perView = swiper.params.slidesPerView;
fetchReviews(currentSlideIndex, perView);

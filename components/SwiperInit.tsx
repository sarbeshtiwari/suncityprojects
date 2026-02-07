'use client';

import { useEffect } from 'react';

const SwiperInit: React.FC = () => {
  useEffect(() => {
    const initSwipers = () => {
      if (typeof window !== 'undefined' && (window as any).Swiper) {
        const Swiper = (window as any).Swiper;
        const projectSliders = document.querySelectorAll('.project-slider');
        projectSliders.forEach(function(slider: any, index: number) {
          new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            speed: 2000,
            navigation: {
              nextEl: slider.querySelector('.swiper-button-next'),
              prevEl: slider.querySelector('.swiper-button-prev'),
            },
          });
        });

        const blogSliders = document.querySelectorAll('.blogs-slider');
        blogSliders.forEach(function(slider: any, index: number) {
          new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            speed: 2000,
            autoplay: {delay: 2500 + index * 500, disableOnInteraction: false},
            navigation: {
              nextEl: slider.querySelector('.swiper-button-next'),
              prevEl: slider.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
              576: { slidesPerView: 2, spaceBetween: 15 },
              992: { slidesPerView: 3, spaceBetween: 15 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
              1800: { slidesPerView: 5, spaceBetween: 30 },
            },
          });
        });
      }
    };

    initSwipers();

    const timer = setTimeout(initSwipers, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default SwiperInit;

'use client';

import { useEffect } from 'react';

export default function ProjectScripts() {
	useEffect(() => {
		const initAccordion = () => {
			// Ensure FAQ accordion exists and isn't already initialized
			const accordionList = document.querySelector('.accordion-list') as HTMLElement | null;
			if (!accordionList) {
				// Try again shortly if FAQs render after data load
				setTimeout(initAccordion, 200);
				return;
			}

			// Avoid double-binding
			if (accordionList.getAttribute('data-accordion-initialized') === 'true') {
				return;
			}
			accordionList.setAttribute('data-accordion-initialized', 'true');

			// Hide all answers initially
			document.querySelectorAll('.accordion-list > li .answer').forEach((ans: any) => {
				(ans as HTMLElement).style.display = 'none';
			});

			// Delegate clicks to list to avoid multiple listeners on items
			accordionList.addEventListener('click', (e: any) => {
				const li = (e.target as HTMLElement).closest('li');
				if (!li || !accordionList.contains(li)) return;

				const isActive = li.classList.contains('active');
				// Close any open
				accordionList.querySelectorAll('li.active').forEach((activeItem: any) => {
					activeItem.classList.remove('active');
					const activeAnswer = activeItem.querySelector('.answer');
					if (activeAnswer) (activeAnswer as HTMLElement).style.display = 'none';
				});

				// Open clicked if it was not active
				if (!isActive) {
					li.classList.add('active');
					const answer = li.querySelector('.answer');
					if (answer) (answer as HTMLElement).style.display = 'block';
				}
			});
		};

		const initProjectScripts = () => {
			// Always initialize accordion first (independent of Swiper)
			initAccordion();

			// Initialize sliders only when Swiper is available; retry until then
			const Swiper = (window as any).Swiper;
			if (!Swiper) {
				setTimeout(initProjectScripts, 100);
				return;
			}

			// Gallery Slider
			const gallerySliders = document.querySelectorAll('.gallery-slider');
			gallerySliders.forEach(function(slider: any, index: number) {
				new Swiper(slider, {
					slidesPerView: 1,
					spaceBetween: 10,
					loop: true,
					speed: 2000,
					autoplay: {delay: 2500 + index * 500, disableOnInteraction: false},
					navigation: {
						nextEl: slider.querySelector('.swiper-button-next'),
						prevEl: slider.querySelector('.swiper-button-prev'),
					},
					pagination: {
						el: slider.querySelector('.swiper-pagination'),
						dynamicBullets: true,
						clickable: true,
					},
					breakpoints: {
						540: { slidesPerView: 2, spaceBetween: 15 },
						768: { slidesPerView: 2, spaceBetween: 15 },
						1200: { slidesPerView: 3, spaceBetween: 20 },
					}
				});
			});

			// Amenity Slider
			const amenitySlider = document.querySelector('.amenity-slider');
			if (amenitySlider) {
				new Swiper('.amenity-slider', {
					slidesPerView: 1,
					spaceBetween: 10,
					loop: true,
					speed: 2000,
					autoplay: {delay: 2500, disableOnInteraction: false},
					navigation: {
						nextEl: '.amenity-slider .swiper-button-next',
						prevEl: '.amenity-slider .swiper-button-prev',
					},
					breakpoints: {
						375: { slidesPerView: 2, spaceBetween: 15 },
						768: { slidesPerView: 3, spaceBetween: 15 },
						1200: { slidesPerView: 4, spaceBetween: 20 },
						1800: { slidesPerView: 5, spaceBetween: 20 },
					},
				});
			}

			// Connectivity Slider
			const connectivitySlider = document.querySelector('.connectivity-slider');
			if (connectivitySlider) {
				new Swiper('.connectivity-slider', {
					slidesPerView: 1,
					loop: true,
					autoplay: {delay: 2500, disableOnInteraction: false},
					navigation: {
						nextEl: '.connectivity-slider .swiper-button-next',
						prevEl: '.connectivity-slider .swiper-button-prev',
					},
					breakpoints: {
						375: { slidesPerView: 2, spaceBetween: 15 },
						540: { slidesPerView: 3, spaceBetween: 15 },
						1200: { slidesPerView: 3, spaceBetween: 20 },
						1800: { slidesPerView: 3, spaceBetween: 20 },
					},
				});
			}

			// Floor Plan Slider
			const fpSlider = document.querySelector('.fp-slider');
			if (fpSlider) {
				new Swiper('.fp-slider', {
					slidesPerView: 1,
					spaceBetween: 10,
					// loop: true,
					navigation: {
						nextEl: '.fp-slider .swiper-button-next',
						prevEl: '.fp-slider .swiper-button-prev',
					},
					// autoplay: {
					// 	delay: 2500,
					// 	disableOnInteraction: false,
					// },
					breakpoints: {
						280: {
							slidesPerView: 1,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						1200: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}
				});
			}

			// (Accordion already initialized above)
		};

		// Initialize after a short delay to ensure DOM is ready
		setTimeout(initProjectScripts, 1000);
	}, []);

	return null; // This component doesn't render anything
}

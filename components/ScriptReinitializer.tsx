'use client';

import { useEffect } from 'react';

export default function ScriptReinitializer() {
	useEffect(() => {
		const reinitializeScripts = () => {
			
			const win: any = window as any;
			if (win && win.AOS) {
				try {
					win.AOS.refresh();
				} catch (error) {
					console.log('AOS refresh failed:', error);
				}
			}
			
			if (win && win.$ && win.$.fn && win.$.fn.counterUp) {
				try {
					win.$('.counter').counterUp({
						delay: 5,
						time: 500
					});
				} catch (error) {
					console.log('Counter re-initialization failed:', error);
				}
			}
			
			if (win && win.Swiper) {
				try {
					const swiperElements = document.querySelectorAll('.swiper');
					swiperElements.forEach((element) => {
						if (!(element as any).swiper) {
							new win.Swiper(element, {
								loop: true,
								autoplay: {
									delay: 3000,
								},
								navigation: {
									nextEl: '.swiper-button-next',
									prevEl: '.swiper-button-prev',
								},
							});
						}
					});
				} catch (error) {
					console.log('Swiper re-initialization failed:', error);
				}
			}
			
			if (win && win.$) {
				try {
					win.$('[data-toggle="tooltip"]').tooltip();
					win.$('[data-bs-toggle="tooltip"]').tooltip();
					win.$('.magnify').magnify();
				} catch (error) {
					console.log('jQuery plugin re-initialization failed:', error);
				}
			}
		};

		reinitializeScripts();
		
		const timer = setTimeout(reinitializeScripts, 500);
		
		return () => clearTimeout(timer);
	}, []);

	return null;
}

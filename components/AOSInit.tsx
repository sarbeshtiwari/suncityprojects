'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AOSInit() {
	const pathname = usePathname();

	useEffect(() => {
		function initAOS() {
			const win: any = window as any;
			if (win && win.AOS && typeof win.AOS.init === 'function') {
				win.AOS.init({ 
					duration: 200,
					once: false,
					offset: 100,
					delay: 0
				});
				
				try { win.AOS.refreshHard && win.AOS.refreshHard(); } catch {}
				setTimeout(() => { try { win.AOS.refresh && win.AOS.refresh(); } catch {} }, 200);
				setTimeout(() => { try { win.AOS.refreshHard && win.AOS.refreshHard(); } catch {} }, 600);
				return true;
			}
			return false;
		}

		if (!initAOS()) {
			let attempts = 0;
			const timer = setInterval(() => {
				attempts++;
				if (initAOS() || attempts > 10) {
					clearInterval(timer);
				}
			}, 200);
			return () => clearInterval(timer);
		}
	}, [pathname]);

	return null;
}



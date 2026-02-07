'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useAOS() {
	const pathname = usePathname();

	useEffect(() => {
		// Function to refresh AOS on route change
		const refreshAOS = () => {
			if (typeof window !== 'undefined') {
				const AOS = (window as any).AOS;
				if (AOS) {
					// Use refreshHard for better results with client-side navigation
					if (AOS.refreshHard) {
						AOS.refreshHard();
					} else {
						AOS.refresh();
					}
				}
			}
		};

		// Refresh AOS when pathname changes
		refreshAOS();

		// Also refresh after a short delay to ensure DOM is ready
		const timer = setTimeout(refreshAOS, 100);

		return () => clearTimeout(timer);
	}, [pathname]);
}

export default useAOS;

'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
// import FormModal from './FormModal';

type Props = {
	children: React.ReactNode;
};

export default function Chrome({ children }: Props) {
	const pathname = usePathname();
	const hideChromeRoutes = ['/laxmi-narayan-goel', '/subhash-chander-aggarwal', '/varun-aggarwal', '/arpit-goel', '/ankit-goel'];
	
	if (pathname?.startsWith('/admin')) {
		return <>{children}</>;
	}
	const shouldHide = hideChromeRoutes.includes(pathname || '');

	if (shouldHide) {
		return <>{children}</>;
	}

	return (
		<>
			<Header />
			{children}
			<Footer />
			{/* <FormModal /> */}
		</>
	);
}



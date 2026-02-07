'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

export default function Chrome({ children }: Props) {
  const pathname = usePathname();

  if (!pathname) return <>{children}</>;

  // Routes where Header/Footer should be hidden
  const hideChromeRoutes = [
    '/laxmi-narayan-goel',
    '/subhash-chander-aggarwal',
    '/varun-aggarwal',
    '/arpit-goel',
    '/ankit-goel',
  ];

  // Hide chrome for admin routes
  if (pathname.startsWith('/admin')) {
    return <>{children}</>;
  }

  // Hide chrome for specific public routes
  const shouldHideChrome = hideChromeRoutes.some(route =>
    pathname === route || pathname.startsWith(`${route}/`)
  );

  if (shouldHideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

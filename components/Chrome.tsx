'use client';

import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

type Props = { children: React.ReactNode };

export default function Chrome({ children }: Props) {
  const [pathname, setPathname] = useState<string | null>(null);

  // Only run in browser
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  if (!pathname) return null; // don't render during prerender

  const hideChromeRoutes = [
    '/laxmi-narayan-goel',
    '/subhash-chander-aggarwal',
    '/varun-aggarwal',
    '/arpit-goel',
    '/ankit-goel',
  ];

  if (pathname.startsWith('/admin')) return <>{children}</>;

  const shouldHide = hideChromeRoutes.includes(pathname);

  if (shouldHide) return <>{children}</>;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

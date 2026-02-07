'use client';

// import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function ConditionalScripts() {
  // const pathname = usePathname();
  
  // if (pathname?.startsWith('/admin')) {
  //   return null;
  // }

  return (
    <>
      {/* <Script src="/js/jquery-3.5.1.min.js" strategy="beforeInteractive" />
      <Script src="/js/popper.min.js" strategy="afterInteractive" /> */}
      {/* <Script src="/js/bootstrap.min.js" strategy="afterInteractive" /> */}
      <Script src="https://unpkg.com/aos@2.3.0/dist/aos.js" strategy="afterInteractive" />
      {/* <Script src="/js/jquery.magnify.js" strategy="afterInteractive" /> */}
      {/* <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" /> */}
      {/* <Script src="/js/intlTelInput.min.js" strategy="afterInteractive" />
      <Script src="/js/custom.js" strategy="afterInteractive" />
      <Script src="/js/home-script.js" strategy="afterInteractive" />
      <Script src="/js/project-script.js" strategy="afterInteractive" /> */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.0/jquery.waypoints.min.js" strategy="afterInteractive" />
      {/* <Script src="/js/jquery.counterup.js" strategy="afterInteractive" /> */}
      {/* <Script id="counter-init" strategy="afterInteractive">
        {`
          $(document).ready(function() {
            $('.counter').counterUp({
              delay: 5,
              time: 500
            });
          });
        `}
      </Script> */}
      {/* <Script id="search-functions" strategy="afterInteractive">
        {`
          window.openSearch = function () {
            const searchFormWrapper = $('#searchFormWrapper');
            const searchPropertyText = $('#searchProperty');
            
            // Remove any existing click handlers first
            $(document).off('click.closeSearch');
            
            searchFormWrapper.slideDown();
            setTimeout(function(){
              searchPropertyText.focus();
            }, 400);

            // Trigger custom event for PropertySearch component
            setTimeout(function() {
              window.dispatchEvent(new CustomEvent('searchFormOpen'));
            }, 50);

            // Delay binding outside click to prevent immediate closing
            setTimeout(function () {
              $(document).on('click.closeSearch', function (e) {
                // Only close if click is outside the search form wrapper and not on the search button
                if (!$(e.target).closest('#searchFormWrapper').length && 
                    !$(e.target).closest('.search-bar').length) {
                  window.closeSearch();
                }
              });
            }, 100); // Increased delay to prevent immediate closing
          };

          window.closeSearch = function () {
            $('#searchFormWrapper').slideUp();
            $(document).off('click.closeSearch');
          };

          // Footer toggle is now handled by React component
        `}
      </Script> */}
    </>
  );
}

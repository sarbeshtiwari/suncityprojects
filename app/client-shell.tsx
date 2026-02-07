'use client'

import Chrome from '../components/Chrome'
import AOSInit from '../components/AOSInit'
import ConditionalScripts from '../components/ConditionalScripts'
import Script from 'next/script'

export default function ClientShell({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Chrome>{children}</Chrome>

      <AOSInit />
      <ConditionalScripts />

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KP8CXQL74R"
        strategy="afterInteractive"
      />
      <Script id="ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KP8CXQL74R');
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){
            n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];
            t=b.createElement(e);t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
          }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1519349832819601');
          fbq('track', 'PageView');
        `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1519349832819601&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  )
}

import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Avalamb foundation</title>
        <link rel="icon" type="image/x-icon" href="/logo/icon.ico" />
        <Script>
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5F3QZ7BP');
    `}
        </Script>
        {/* <!-- Google Tag Manager --> */}
        <script></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GVTRYKCK0M" />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5F3QZ7BP"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}

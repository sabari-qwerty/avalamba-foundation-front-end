import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Avalamb foundation</title>
        <link rel="icon" type="image/x-icon" href="/logo/icon.ico" />
        <Script id="google-tag-manager">
          {`
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TQQMNSWH')`}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GVTRYKCK0M" />

        <Script id={"google-analytics"}>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-5QK6TSQ9EQ');
        `}
        </Script>
      </body>
    </Html>
  );
}

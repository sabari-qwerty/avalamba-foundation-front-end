import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Avalamb foundation</title>
        <link rel="icon" type="image/x-icon" href="/logo/icon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GVTRYKCK0M" />
      </body>
    </Html>
  );
}

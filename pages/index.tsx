import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import { ImageSwper } from "@/components/HomePage/Swiper";
import { AboutUS } from "@/components/HomePage/AboutUS";
import { Objectives } from "@/components/HomePage/Objectives";
import { Projects } from "@/components/HomePage/Projects";
import { Articles_and_Blogs } from "@/components/HomePage/Articles_and_Blogs";
import { FiexedButton } from "@/components/HomePage/FiexedButton";
import Script from "next/script";
// import { ImageSwper } from './HomePage/Swiper'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <ImageSwper />
      <AboutUS />
      <Objectives />
      {/* <Projects /> */}
      {/* <Articles_and_Blogs /> */}
      <FiexedButton text="Contribute Now" />
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

      <script
        id="optinly_script"
        async={true}
        data-app_id="40d1bcf3-9ed2-408e-912e-c2e5b9c93cc4"
        src="https://cdn.optinly.net/v1/optinly.js"
        type="text/javascript"
      />

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TQQMNSWH"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </Layout>
  );
}

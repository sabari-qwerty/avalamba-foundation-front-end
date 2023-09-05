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
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5QK6TSQ9EQ"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-5QK6TSQ9EQ');
        `}
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TQQMNSWH');`}
      </Script>
      {/* <!-- Google Tag Manager --> */}
      {/* <!-- End Google Tag Manager --> */}
    </Layout>
  );
}

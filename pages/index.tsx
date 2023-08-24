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
      <script
        id="optinly_script"
        async={true}
        data-app_id="c9e144b8-00a7-4c9f-b18f-e668c0e3f3d6"
        src="https://cdn.optinly.net/v1/optinly.js"
        type="text/javascript"
      ></script>
    </Layout>
  );
}

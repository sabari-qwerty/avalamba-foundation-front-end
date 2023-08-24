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
        id="optinly_script"
        async={true}
        data-app_id="d06e0674-5bdc-4e7b-b85d-e6f578a44f84"
        src="https://cdn.dev.optinly.gozen.io/v1/optinly.js"
        type="text/javascript"
      />
    </Layout>
  );
}

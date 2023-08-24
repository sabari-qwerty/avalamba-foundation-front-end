import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import { ImageSwper } from "@/components/HomePage/Swiper";
import { AboutUS } from "@/components/HomePage/AboutUS";
import { Objectives } from "@/components/HomePage/Objectives";
import { Projects } from "@/components/HomePage/Projects";
import { Articles_and_Blogs } from "@/components/HomePage/Articles_and_Blogs";
import { FiexedButton } from "@/components/HomePage/FiexedButton";
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

      <iframe
        width="500px"
        height="500px"
        src="https://optin.ly.gozen.io/link?campaign_id=b5666e56-4cf4-4cc5-ab82-6bc0b3064ff5&site_id=d06e0674-5bdc-4e7b-b85d-e6f578a44f84"
      >
        {" "}
      </iframe>
    </Layout>
  );
}

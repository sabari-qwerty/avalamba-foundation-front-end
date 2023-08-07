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
      <Projects />
      {/* <Articles_and_Blogs /> */}
      <FiexedButton text="Contribute Now" />
    </Layout>
  );
}

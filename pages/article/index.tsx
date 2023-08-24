import { Layout } from "@/components/Layout";
import { H1 } from "@/components/common/Heading/H1";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <Layout>
      <section className="w-full h-screen flex justify-center items-center flex-col space-y-14">
        <h1 className="xsm:text-6xl lg:text-8xl font-bold"> Coming Soon</h1>
        <Link
          href={"/project-page"}
          className="bg-[#A15236]  space-x-4 h-16 text-white flex justify-center align-middle items-center px-8 rounded-full"
        >
          <div className="text-xl font-bold">Contribute Now</div>
          <div>
            <Image src={"/right.svg"} width={30} height={35} alt="arow" />
          </div>
        </Link>
      </section>
    </Layout>
  );
}

export default index;

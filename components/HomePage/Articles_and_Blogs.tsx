import { FC } from "react";
import { Section } from "@/components/common/Section/Section";
import { H2 } from "../common/Heading/H2";
// import { Articles_data } from '@/pages/content'
import { Paragraph } from "@/components/common/Paragraph/Paragraph";

const Articles_data = [
  {
    src: "./Articles/Blog-1.jpg",
    head: "Thins to know before visiting Cave in Germany",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    date: "08.08.2021",
  },
  {
    src: "./Articles/Blog-2.png",
    head: "Nina Smith vibrant work collab with Nike Dunk",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    date: "08.08.2021",
  },
  {
    src: "./Articles/Blog-3.png",
    head: "Richard Norton rendering real photos",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    date: "08.08.2021",
  },
  {
    src: "./Articles/Blog-4.png",
    head: "25 quality collectors toys inspired by famous films",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
    date: "08.08.2021",
  },
];

export const Articles_and_Blogs: FC = () => {
  return (
    // <Section id="Blog">
    //   <div className="w-[90%] flex flex-col space-y-16">
    //     <H2 text="Articles & Blogs" />
    //     <div className="flex lg:flex-row xsm:flex-col xsm:m-auto lg:w-full xms:space-y-8 lg:space-y-0 gap-2">
    //       {Articles_data.map((i, k) => (
    //         <div
    //           key={k}
    //           className="lg:w-1/4 flex flex-col    rounded-lg mx-auto items-center space-y-8"
    //         >
    //           <div className="      w-[90%] min-h-[240px] ">
    //             <img
    //               src={i.src}
    //               alt="image"
    //               className="object-cover w-full min-h-[280px] rounded-lg"
    //             />
    //           </div>
    //           <div className=" flex flex-col space-y-2 w-[90%]">
    //             <span className="text-[#1410106e] font-semibold">{i.date}</span>
    //             <div className="flex flex-col space-y-2">
    //               <h3 className="font-bold text-md">{i.head}</h3>
    //               <Paragraph
    //                 text={i.text}
    //                 className="text-[10px] font-normal pb-3 "
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </Section>

    <section className="py-8 space-y-8 flex flex-col justify-center items-center">
      <H2 text="Articles & Blogs" />
      <div className="w-[90%] h-[500px] bg-[#eecbb844] flex items-center text-center justify-center lg:text-2xl text:text">
        Comming Soon.....
      </div>
    </section>
  );
};

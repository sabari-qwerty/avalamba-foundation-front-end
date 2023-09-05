"use client";
import { Layout } from "@/components/Layout";
import { H2 } from "@/components/common/Heading/H2";
import Image from "next/image";
import { FC, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import {
  EffectCreative,
  EffectFade,
  Pagination,
  SwiperOptions,
  Swiper as SwiperInstance,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import { Section } from "@/components/common/Section/Section";
import { Paragraph } from "@/components/common/Paragraph/Paragraph";

const data = [
  {
    img: "/GetInvolved/1.png",
    head: "Be a Campaigner",
    text: "If you are unable to dedicate a lot of time, you can simply promote our work and fund raising campaigns regularly on social media platforms to reach out to a larger audience.",
  },
  {
    img: "/GetInvolved/2.png",
    head: "Volunteer on Ground",
    text: "You can be a volunteer for all our projects and travel across the length and breath of the county",
  },
  {
    img: "/GetInvolved/3.png",
    head: "Write for Us",
    text: "Love Writing? You can write blog and articles on various topics relate to our culture, that interest you",
  },
  {
    img: "/GetInvolved/4.png",
    head: "Intern with Us",
    text: "If you are a student of art, history, language, management and related subjects, with keen interest and commitment to work on long term projects you can intern with us. Please don’t forget to drop in your resume!",
  },
  {
    img: "/GetInvolved/5.png",
    head: "Financially Support Us",
    text: "The Foundation seeks contributions from donors to complete our short term and long-term projects smoothly. We welcome well-meaning corporate sponsorships, CSR contributions and Endowments by individuals/organisations.",
  },
];

const Index: FC = () => {
  // const swiperRef = useRef<s | null>(null);

  const count_data = {
    4: 0,
    3: 1,
    2: 2,
    1: 3,
    0: 4,
  };
  const [count, setCount] = useState(4);

  // const swiperRef = useRef<HTMLElement | null>(null);
  // const swieperInstanceRef = useRef<SwiperInstance | null>(null);

  // useEffect(() => {
  //   const swiperOptions: SwiperOptions = {
  //     slidesPerView: 1,
  //     loop: true,
  //   };

  //   if (swiperRef.current) {
  //     // @ts-ignore
  //     swieperInstanceRef.current = new Swiper(swiperRef.current, swiperOptions);
  //   }

  //   return () => {
  //     if (swiperRef.current) {
  //       swieperInstanceRef.current?.destroy();
  //     }
  //   };
  // }, []);

  return (
    <Layout>
      <section
        className="xsm:hidden  lg:flex w-full h-screen    lg:items-start    "
        style={{ zIndex: "-100" }}
      >
        <div className=" h-full  flex justify-end w-[30%] bg-[rgba(161,82,54,0.10)] relative">
          <Swiper
            initialSlide={count}
            grabCursor={true}
            className=" w-full h-full"
            loop={true}
            speed={1200}
            slidePrevClass="fade-out-animation"
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            effect={"creative"}
            modules={[EffectCreative, EffectFade]}
            preventInteractionOnTransition={true}
            noSwiping={true}
          >
            {data.map((data, key) => (
              <SwiperSlide className="w-full h-full" key={key}>
                <Image
                  src={data.img}
                  alt="hello "
                  className="w-full h-full object-"
                  width={600}
                  height={800}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full h-[90%] bg-transparent absolute top-0 z-50"></div>
        </div>
        <div className="h-full  w-[70%]  justify-center items-center flex flex-col mx-auto relative ">
          <Swiper
            initialSlide={count}
            className="h-[90%] w-full flex flex-col justify-center  space-y-6 "
            direction={"vertical"}
            loop={true}
            effect={"fade"}
            speed={1200}
            modules={[Pagination]}
            allowSlideNext={true}
            allowSlidePrev={true}
            preventInteractionOnTransition={true}
            noSwiping={true}
          >
            {data.reverse().map((data, key) => (
              <SwiperSlide
                className="w-full h-full  my-auto    flex justify-center   items-center bg-[url('/GetInvolved/background-1.jpg')]  bg-no-repeat object-cover"
                key={key}
              >
                <div className=" h-full flex justify-center space-y-6 flex-col w-4/5 pl-16 ">
                  <div className="w-full  ">
                    <H2
                      text={data.head}
                      className="font-blod lg:text-[42px] text-start w-full "
                    />
                  </div>
                  <Paragraph
                    text={data.text}
                    className="font-blod text-2xl pt-6 leading-relaxed"
                  />
                  {/* <p className=" font-blod text-xl">{data.text}</p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full h-[90%] bg-transparent absolute top-0 z-50"></div>
          {/* <div className="h-[90%] w-full flex flex-col justify-center  space-y-6">
            <div className="w-full ">
              <H2
                text={data[count].head}
                className="font-bold lg:text-4xl text-start w-full "
              />
            </div>
            <div className="w-4/5 font-semibold text-xl">
              {data[count].text}
            </div>
          </div> */}
          <div className="h-[10%]  flex  w-full justify-between items-center bg-[rgba(161,82,54,0.10)] ">
            <div className="w-11/12 flex justify-between items-center mx-auto">
              <div className="flex space-x-2 items-center   h-full ">
                {data.reverse().map((data, key) => (
                  <div
                    className={`w-3 h-3 ${
                      // @ts-ignore
                      key == count_data[count]
                        ? "bg-[#A15236]"
                        : "bg-[#a1523653]"
                    } rounded-full`}
                    key={key}
                  ></div>
                ))}
              </div>
              <div className="flex space-x-8 ">
                <button
                  onClick={() => {
                    // @ts-ignore
                    document.querySelectorAll(".swiper")[0].swiper.slideNext();
                    // @ts-ignore
                    document.querySelectorAll(".swiper")[1].swiper.slideNext();

                    // document.querySelector(".swiper")[0].swiper.;
                    setCount(
                      // @ts-ignore
                      document.querySelector(".swiper").swiper.realIndex
                    );
                  }}
                  // onClick={() => goPrev()}
                >
                  <Image
                    src={"/GetInvolved/left.svg"}
                    width={50}
                    height={50}
                    alt="left"
                  />
                </button>
                <button
                  // ref={navigationNextRef}
                  onClick={() => {
                    // @ts-ignore
                    document.querySelectorAll(".swiper")[0].swiper.slidePrev();

                    // @ts-ignore
                    document.querySelectorAll(".swiper")[1].swiper.slidePrev();
                    // goNext();
                    setCount(
                      // @ts-ignore
                      document.querySelector(".swiper").swiper.realIndex
                    );
                  }}
                >
                  <Image
                    src={"/GetInvolved/right.svg"}
                    width={50}
                    height={50}
                    alt="right"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="xsm:visible lg:hidden  py-0 w-full h-full flex justify-center items-center pt-28">
        <Image
          src="/GetInvolved/getin.svg"
          alt="getinvalue"
          width={320}
          height={500}
        />
      </section>
    </Layout>
  );
};

export default Index;

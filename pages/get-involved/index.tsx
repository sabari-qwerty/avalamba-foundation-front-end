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
  Navigation,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import { Section } from "@/components/common/Section/Section";
import { Paragraph } from "@/components/common/Paragraph/Paragraph";
import { Devonshire } from "next/font/google";
import { Footer } from "@/components/common/Footer/Footer";
import { NavBar } from "@/components/common/NavBar/NavBar";
import { FiexedButton } from "@/components/HomePage/FiexedButton";
import { Button } from "@/components/common/Button/Button";

const data = [
  {
    img: "/GetInvolved/1.png",
    head: "Be a Campaigner",
    text: "If you are unable to dedicate a lot of time, you can simply promote our work and fund raising campaigns regularly on social media platforms to reach out to a larger audience.",
  },
  {
    img: "/GetInvolved/2.png",
    head: "Volunteer on Ground",
    text: "You can be a volunteer for all our projects and travel across the length and breath of the county.",
  },
  {
    img: "/GetInvolved/3.png",
    head: "Write for Us",
    text: "Love Writing? You can write blog and articles on various topics relate to our culture, that interest you.",
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

function Index() {
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
  const [bool, setBool] = useState(false);

  return (
    <div className="flex flex-col ">
      <NavBar bool={bool} setBool={() => setBool(!bool)} />
      <section className="xsm:hidden  lg:flex   w-full   lg:items-start  z-50  full-width-nav">
        <div className=" h-full  flex justify-end w-[30%] bg-[rgba(161,82,54,0.10)] relative ">
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
          <div className="w-full h-fit bg-transparent absolute top-0"></div>
        </div>
        <div className="h-full  w-[70%]   justify-center items-center flex flex-col mx-auto relative   ">
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
                className="w-full h-full  my-auto    flex justify-center   items-center bg-[url('/GetInvolved/background-1.jpg')]  bg-no-repeat object-cover bg-white"
                key={key}
              >
                <div className=" h-full flex justify-center space-y-6 flex-col w-4/5 pl-16 ">
                  <div className="w-full  ">
                    <H2
                      text={data.head}
                      className="lg:text-4xl   lg:font-bold  lg:text-left "
                    />
                  </div>
                  <Paragraph
                    text={data.text}
                    className="font-medium lg:text-lg xsm:text-lg  text-left pt-5 leading-[200px] "
                  />
                  {/* <p className=" font-blod text-xl">{data.text}</p> */}
                  <div className="w-full ">
                    <button
                      className=" flex items-center xsm:h-[50px]  justify-center   rounded-full  z-10 max-w-[350px] bg-[#A15236] text-[#fff] xsm:min-w-[150px] lg:min-w-[150px] shadow-lg xsm:text-base md:text-lg  z xsm:py-  2xl:py-2"
                      id="click-a-button"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="w-full h-[90%] bg-transparent absolute top-0 "></div>
          {/* <div className="h-[90%] w-full flex flex-col justify-center  space-y-6">
            <div className="w-full ">
              <H2
                text={data[count].head}
                className="font-bold lg:text-4xl text-start w-full "
              />
            </div>`
            <div className="w-4/5 font-semibold text-xl">
              {data[count].text}
            </div>
          </div> */}
          <div className="h-[10%]  flex  w-full justify-between items-center bg-[rgba(161,82,54,0.10)] bg-[url('/GetInvolved/background-1.jpg')]  ">
            <div className="w-[100%] flex justify-between items-center mx-auto">
              <div className="flex space-x-2 items-center   h-full  pl-16">
                {data.reverse().map((data, key) => (
                  <div
                    className={`w-[10px] h-[10px] ${
                      // @ts-ignore
                      key == count_data[count]
                        ? "bg-[#A15236]"
                        : "bg-[#a1523653]"
                    } rounded-full`}
                    key={key}
                  ></div>
                ))}
              </div>
              <div className="flex space-x-3 pr-16  ">
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
      <section className="xsm:visible lg:hidden  py-0 w-full h-full flex justify-center items-center ">
        <Swiper
          modules={[Navigation, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className=" w-full relative"
        >
          {data.map((data, key) => (
            <SwiperSlide key={key} className="relative">
              <Image
                src={data.img}
                alt="img text"
                width={320}
                height={320}
                className="w-full h-full"
              />
              <div className="absolute w-full h-full bg-[#00000062] top-0">
                <div className="w-full h-full flex justify-center flex-col  items-center  text-white">
                  <H2
                    text={data.head}
                    className="font-blod lg:text-[40px] 2xl:text-4xl   text-center w-full"
                  />
                  <Paragraph
                    text={data.text}
                    className="font-blod text-lg pt-6 leading-relaxed text-center w-[90%]"
                  />
                  <div className=" py-5">
                    <button
                      className=" flex items-center xsm:h-[50px]  justify-center   rounded-full  z-10 max-w-[350px] bg-[#A15236] text-[#fff] xsm:min-w-[150px] lg:min-w-[150px] shadow-lg xsm:text-base md:text-lg  z xsm:py-  2xl:py-2"
                      id="click-a-button"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer bool={true} />
      <div className="-z-51">
        <FiexedButton text="Contribute Now" className="bottom-[2rem]" />
      </div>
    </div>
  );
}

export default Index;

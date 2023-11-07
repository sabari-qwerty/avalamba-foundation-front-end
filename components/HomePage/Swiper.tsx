import { FC } from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { H1 } from "../common/Heading/H1";
import { H2 } from "../common/Heading/H2";
import Image from "next/image";
// import { SliderImage } from '@/pages/content';

const SliderImage = [
  {
    src: "/HeroPage/new/new/1.jpg",
  },
  {
    src: "/HeroPage/new/new/6.jpg",
  },

  {
    src: "/HeroPage/new/new/7.jpg",
  },
  {
    src: "/HeroPage/new/new/4.jpg",
  },
  {
    src: "/HeroPage/new/new/3.jpg",
  },
];

const SliderMobile = [
  {
    src: "/HeroPage/new/new/mobile/7.jpg",
  },

  {
    src: "/HeroPage/new/new/mobile/5.jpg",
  },
  {
    src: "/HeroPage/new/new/mobile/6.jpg",
  },
  {
    src: "/HeroPage/new/new/mobile/3.jpg",
  },
  {
    src: "/HeroPage/new/new/mobile/2.jpg",
  },
];

export const ImageSwper: FC = () => {
  return (
    <div className="relative">
      <div className="xsm:hidden lg:block">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          pagination={{ clickable: true }}
          className="h-[95dvh] full-width "
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {SliderImage.map((i, k) => {
            return (
              <SwiperSlide key={k} className="h-[100dvh] full-width bg-black">
                {
                  // <Image src={i.src} alt='image' className='w-full h-full object-cover opacity-80' layout="fill" />
                  <Image
                    src={i.src}
                    alt="image"
                    className="w-full h-full object-fill "
                    width={800}
                    height={800}
                  />
                }
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="xsm:block lg:hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          pagination={{ clickable: true }}
          className="h-[95dvh] full-width "
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        >
          {SliderMobile.map((i, k) => {
            return (
              <SwiperSlide key={k} className="h-[100dvh] full-width bg-black">
                {
                  // <Image src={i.src} alt='image' className='w-full h-full object-cover opacity-80' layout="fill" />
                  <Image
                    src={i.src}
                    alt="image"
                    className="w-full h-full object-fill "
                    width={800}
                    height={800}
                  />
                }
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="absolute top-1/2 xsm:w-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white w-full lg:space-y-16 xsm:space-y-14">
        {/* <H2
          text="| धर्मो विश्वस्य जगत: प्रतिष्ठा |"
          className="text-9xl font-extrabold"
        /> */}
        <div className="flex   flex-col ">
          <h2 className="xsm:text-3xl md:text-5xl   2xl:text-5xl  font-bold text-center">
            | धर्मो विश्वस्य जगत: प्रतिष्ठा |
          </h2>
          <H2
            text="Dharma is the foundation stone on which this entire universe is firmly placed"
            className="font-medium lg:text-2xl xsm:text-lg  text-center  pt-3"
          />
        </div>

        {/* <h3 className="w-full text-center text-2xl">
          Dharma is the foundation stone on which this entire universe is firmly
          placed
        </h3> */}
        <div className="flex   flex-col">
          <h1 className="xsm:text-3xl md:text-4xl   2xl:text-5xl font-bold text-center heading-tamil-fount ">
            | அறம் செய்ய விரும்பு |
          </h1>
          <H2
            text="Develop interest in performing Dharmik acts"
            className="font-medium lg:text-2xl xsm:text-lg   text-center pt-3"
          />
        </div>
        {/* <H1 text="| அறம் செய விரும்பு |" className="text-4xl font-extrabold" /> */}
        {/* <H2 text="Dharma is the foundation stone on which this entire universe is firmly placed" /> */}
      </div>
    </div>
  );
};

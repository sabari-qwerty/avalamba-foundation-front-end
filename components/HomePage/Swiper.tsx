import { FC } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { H1 } from '../common/Heading/H1';
import { H2 } from '../common/Heading/H2';
import Image from 'next/image';
// import { SliderImage } from '@/pages/content';

const SliderImage = [
    {
        src: '/HeroPage/1.jpg'
    },
    {
        src: '/HeroPage/2.jpg'
    },
    {
        src: '/HeroPage/3.jpg'
    },
    {
        src: '/HeroPage/4.jpg'
    },
    {
        src: '/HeroPage/5.jpg'
    },

]

export const ImageSwper: FC = () => {
    return (
        <div className='relative'>

        <Swiper
            modules={[ Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
            pagination={{ clickable: true }}

            className='h-[100dvh] full-width'
            autoplay={{
                delay: 2500
            }}

        >
            {
                SliderImage.map((i, k) => {
                    return <SwiperSlide key={k} className='h-[100dvh] full-width bg-black'>
                        {
                            // <Image src={i.src} alt='image' className='w-full h-full object-cover opacity-80' layout="fill" />
                            <img src={i.src} alt="image" className='w-full h-full object-cover opacity-80' />
                        }
                    </SwiperSlide>

                }
                )
            }
            </Swiper>
            <div className='absolute top-1/2 xsm:w-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white w-full space-y-4'>
                <H1 text='அறம் செய்ய விரும்பு | धर्मो विश्वस्य जगत: प्रतिष्ठा।।' />
                <H2 text='Develop interest in performing Dharmik acts' />
                <H2 text='Dharma is the foundation stone on which this entire universe is firmly placed' />

            </div>
        </div>
    )
}

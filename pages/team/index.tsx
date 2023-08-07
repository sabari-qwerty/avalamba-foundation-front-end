import { FC } from "react";
import { Layout } from "@/components/Layout";
// import { Section } from '@/components/common/Section/Section'
import { H1 } from "@/components/common/Heading/H1";
// import { TeamData } from '../content'
import { Paragraph } from "@/components/common/Paragraph/Paragraph";
import Image from "next/image";
// import { TeamSocilaIcon } from '../content'

const TeamData = [
  {
    name: "Kishore Chidambaram",
    src: "/Abouts/1.png",
    text: "Kishore is a post grad and an investment professional. Sthalapuranas have always fascinated him which increased his interest in temple architecture. He believes that there is so much treasure that has been left behind that we’ve barely scratched the surface and conserving & preserving it is the duty of everyone born in this land.",
    twitter: "https://twitter.com/KishoreIyer5",
  },
  {
    name: "Venkatesh TS",
    src: "/Abouts/2.png",
    text: "Venkatesh, dearly called as “Tinku”, a student of IIM Lucknow Is a Human Resources Organisational Development & Change Management professional. He is a Strategy Consultant for an IT Startup. He actively renovated few temples and restored the festive rituals to keep their communities around the temple to engage with their own local culture. He is deeply Religious, an Indian History enthusiast who anchored several photo walk & heritage walks. He is also a learner of Veda and Vedanta. Keen in propagating Vedic philosophy of Sri Vedanta Desika in Sanskrit & Tamil. He is also a part time writer in online news media.",
    twitter: "https://twitter.com/tweets_tinku",
  },
  {
    name: "Krithika Sivaswamy",
    src: "/Abouts/3.png",
    text: "Krithika is an entrepreneur, works in the field of Renewable Energy. She is a student of Bharatnatyam, Carnatic music and a history enthusiast. Hailing from a family of shrautis, adhvaryus, artists and connoisseurs, she considers it a great privilege to have had an early exposure to the rich culture of Hindu Arts. She is a keen political observer and strives to address issues in the areas of performing arts and heritage pertaining to Bharat.",
    twitter: "https://twitter.com/krithikasivasw",
  },
  {
    name: "Aravindh Parthasarathy",
    src: "/Abouts/4.png",
    text: "Aravindh is a finance and taxation professional in a multinational conglomerate. He is a recipient of several awards by many NGOs He also received the Rashtrapathi award from the Ex-President Dr. Pratibha Patil, for his outstanding work towards social welfare. Since childhood, he has been active in reviving temples and protecting cows. He is a vendantin & a veena player.",
    twitter: "",
  },
];

const TeamSocilaIcon = [
  {
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          fill="#03A9F4"
        />
        <path
          d="M26.3642 9.57263C25.5846 9.91311 24.76 10.1393 23.9158 10.2442C24.8057 9.71649 25.4709 8.88045 25.7852 7.89474C24.9523 8.38913 24.0409 8.73731 23.0905 8.92421C22.5081 8.30137 21.7518 7.86819 20.9199 7.68103C20.0879 7.49386 19.219 7.56137 18.4259 7.87477C17.6329 8.18816 16.9525 8.73294 16.4733 9.43826C15.9941 10.1436 15.7382 10.9768 15.7389 11.8295C15.7359 12.1549 15.7691 12.4797 15.8379 12.7979C14.1473 12.7149 12.4932 12.2761 10.9838 11.5103C9.4743 10.7445 8.14335 9.66888 7.07788 8.35368C6.53022 9.28928 6.36054 10.3987 6.60354 11.4552C6.84654 12.5118 7.48386 13.4356 8.38525 14.0379C7.71246 14.0198 7.05391 13.84 6.46525 13.5137V13.56C6.46714 14.5407 6.80659 15.4908 7.42653 16.2507C8.04648 17.0106 8.90912 17.5339 9.86946 17.7326C9.50603 17.8281 9.13152 17.8748 8.75577 17.8716C8.48522 17.8766 8.2149 17.8526 7.94946 17.8C8.22459 18.6434 8.75428 19.3809 9.46567 19.9109C10.1771 20.441 11.0352 20.7376 11.9221 20.76C10.4192 21.9347 8.56646 22.5728 6.65893 22.5726C6.31905 22.5755 5.97936 22.5558 5.64209 22.5137C7.58708 23.7677 9.85422 24.4303 12.1684 24.4211C19.9895 24.4211 24.2652 17.9432 24.2652 12.3284C24.2652 12.1411 24.2652 11.96 24.2505 11.7789C25.0832 11.178 25.7995 10.4303 26.3642 9.57263Z"
          fill="white"
        />
      </svg>
    ),
  },
];

const index: FC = () => {
  return (
    <Layout>
      {/* <Section>
                <div className='flex flex-col mt-6 space-y-8'>

                    <H1 text='Get Involved' />
                </div>
                <Section /> */}
      <section className="pt-20">
        <div className="flex flex-col mt-6 ">
          <H1 text="Meet our Founder Members" />
        </div>
      </section>
      {/* <Section>
                <div className='flex flex-wrap  w-[80%] justify-center gap-4 pt-6 mx-auto  xsm:flex-col lg:flex-row items-center  '>
                    {
                        TeamData.map((i, k) => <div key={k} className='lg:w-[40%] xsm:w-full  flex flex-col space-y-4 '>
                            <div className='flex flex-col'>

                                <div className='w-4/5'>
                                    <div className='w-full'>
                                        <img src={i.src} alt="team" className='w-full' />
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div className='w-4/5  ' >
                                <h3 className=' text-center font-bold'>{i.name}</h3>
                            </div>
                            <div className='w-4/5  flex justify-center space-x-6'>
                                {
                                    TeamSocilaIcon.map((i, k) => <div key={k} className='w-8 h-8 '>{i.svg}</div>)
                                }
                            </div>
                        </div>
                        )
                    }
                </div>
            </Section> */}
      <section className="flex lg:flex-col xsm:flex-row  pt-9  w-full mx-auto justify-center items-center">
        <div className="flex flex-wrap   w-[80%] justify-center gap-16 pt-6 mx-auto  xsm:flex-col lg:flex-row items-center   ">
          {TeamData.map((i, k) => (
            <div
              key={k}
              className="lg:w-[40%] xsm:w-full  flex flex-col space-y-4 "
            >
              <div className="containe flex flex-col text-[#fff]">
                <img src={i.src} alt="Avatar" className="image" />
                <div className="overlay backround-color-overlay-team mx-auto flex flex-col items-center justify-center">
                  <div className="felx flex-col space-y-6 w-4/5">
                    <Paragraph
                      text={i.text}
                      className="font-semibold text-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full  space-x-8">
                <div className="">
                  <h3 className=" text-center font-bold text-xl">{i.name}</h3>
                </div>
                <a href={i.twitter} target="_blank">
                  <Image
                    src="/socialmedia/twtter.svg"
                    width={50}
                    height={50}
                    alt="text"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <Section className='pt-20 pb-0'>
                <div className='flex flex-wrap   w-[80%] justify-center gap-16 pt-6 mx-auto  xsm:flex-col lg:flex-row items-center   '>
                    {
                        TeamData.map((i, k) => <div key={k} className='lg:w-[40%] xsm:w-full  flex flex-col space-y-4 '>
                            <div className="containe flex flex-col text-[#fff]">
                                <img src={i.src} alt="Avatar" className="image" />
                                <div className="overlay mx-auto flex flex-col items-center justify-center">
                                    <div className="felx flex-col space-y-6 w-4/5">

                                        <Paragraph text={i.text} className='font-semibold text-lg' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-4/5  mx-auto  ' >
                                <h3 className=' text-center font-bold text-xl'>{i.name}</h3>
                            </div>
                            <div className='w-4/5  flex justify-center space-x-6  mx-auto '>
                                {
                                    TeamSocilaIcon.map((i, k) => <div key={k} className='w-12 h-12  border-2 border-[#EEEFF2] rounded-2xl items-center flex justify-center py-2'>{i.svg}</div>)
                                }
                            </div>
                        </div>
                        )
                    }
                </div>
            </Section> */}
    </Layout>
  );
};

export default index;

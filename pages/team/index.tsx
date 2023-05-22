import { FC } from 'react'
import { Layout } from '@/components/Layout'
// import { Section } from '@/components/common/Section/Section'
import { H1 } from '@/components/common/Heading/H1'
// import { TeamData } from '../content'
import { Paragraph } from '@/components/common/Paragraph/Paragraph'
// import { TeamSocilaIcon } from '../content'


const TeamData = [
    {
        name: "Kishore Chidambaram",
        src: "/Abouts/1.png",
        text: "Kishore is a post grad and an investment professional. Sthalapuranas have always fascinated him which increased his interest in temple architecture. He believes that there is so much treasure that has been left behind that we’ve barely scratched the surface and conserving & preserving it is the duty of everyone born in this land."
    },
    {
        name: "Venkatesh TS",
        src: "/Abouts/2.png",
        text: "Venkatesh, dearly called as “Tinku”, a student of IIM Lucknow Is a Human Resources Organisational Development & Change Management professional. He is a Strategy Consultant for an IT Startup. He actively renovated few temples and restored the festive rituals to keep their communities around the temple to engage with their own local culture. He is deeply Religious, an Indian History enthusiast who anchored several photo walk & heritage walks. He is also a learner of Veda and Vedanta. Keen in propagating Vedic philosophy of Sri Vedanta Desika in Sanskrit & Tamil. He is also a part time writer in online news media."
    },
    {
        name: "Krithika Sivaswamy",
        src: "/Abouts/3.png",
        text: "Krithika is an entrepreneur, works in the field of Renewable Energy. She is a student of Bharatnatyam, Carnatic music and a history enthusiast. Hailing from a family of shrautis, adhvaryus, artists and connoisseurs, she considers it a great privilege to have had an early exposure to the rich culture of Hindu Arts. She is a keen political observer and strives to address issues in the areas of performing arts and heritage pertaining to Bharat."
    },
    {
        name: "Aravindh Parthasarathy",
        src: "/Abouts/4.png",
        text: "Aravindh is a finance and taxation professional in a multinational conglomerate. He is a recipient of several awards by many NGOs He also received the Rashtrapathi award from the Ex-President Dr. Pratibha Patil, for his outstanding work towards social welfare. Since childhood, he has been active in reviving temples and protecting cows. He is a vendantin & a veena player."
    },
]


const TeamSocilaIcon = [
    {
        svg: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#03A9F4" />
                <path d="M26.3642 9.57263C25.5846 9.91311 24.76 10.1393 23.9158 10.2442C24.8057 9.71649 25.4709 8.88045 25.7852 7.89474C24.9523 8.38913 24.0409 8.73731 23.0905 8.92421C22.5081 8.30137 21.7518 7.86819 20.9199 7.68103C20.0879 7.49386 19.219 7.56137 18.4259 7.87477C17.6329 8.18816 16.9525 8.73294 16.4733 9.43826C15.9941 10.1436 15.7382 10.9768 15.7389 11.8295C15.7359 12.1549 15.7691 12.4797 15.8379 12.7979C14.1473 12.7149 12.4932 12.2761 10.9838 11.5103C9.4743 10.7445 8.14335 9.66888 7.07788 8.35368C6.53022 9.28928 6.36054 10.3987 6.60354 11.4552C6.84654 12.5118 7.48386 13.4356 8.38525 14.0379C7.71246 14.0198 7.05391 13.84 6.46525 13.5137V13.56C6.46714 14.5407 6.80659 15.4908 7.42653 16.2507C8.04648 17.0106 8.90912 17.5339 9.86946 17.7326C9.50603 17.8281 9.13152 17.8748 8.75577 17.8716C8.48522 17.8766 8.2149 17.8526 7.94946 17.8C8.22459 18.6434 8.75428 19.3809 9.46567 19.9109C10.1771 20.441 11.0352 20.7376 11.9221 20.76C10.4192 21.9347 8.56646 22.5728 6.65893 22.5726C6.31905 22.5755 5.97936 22.5558 5.64209 22.5137C7.58708 23.7677 9.85422 24.4303 12.1684 24.4211C19.9895 24.4211 24.2652 17.9432 24.2652 12.3284C24.2652 12.1411 24.2652 11.96 24.2505 11.7789C25.0832 11.178 25.7995 10.4303 26.3642 9.57263Z" fill="white" />
            </svg>

        )
    },
    {
        svg: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 31.9997C24.8366 31.9997 32 24.8363 32 15.9997C32 7.16317 24.8366 -0.000274658 16 -0.000274658C7.16344 -0.000274658 0 7.16317 0 15.9997C0 24.8363 7.16344 31.9997 16 31.9997Z" fill="#007AB9" />
                <path d="M25.5599 17.2872V23.8836H21.7354V17.7293C21.7354 16.184 21.1832 15.1287 19.7985 15.1287C18.7418 15.1287 18.114 15.8392 17.8368 16.5271C17.7361 16.7729 17.7102 17.1143 17.7102 17.4592V23.8834H13.8854C13.8854 23.8834 13.9368 13.4599 13.8854 12.3809H17.7104V14.0109C17.7027 14.0238 17.6919 14.0363 17.6851 14.0486H17.7104V14.0109C18.2187 13.2289 19.1251 12.1108 21.1573 12.1108C23.6734 12.1108 25.5599 13.7548 25.5599 17.2872ZM9.88443 6.83633C8.57614 6.83633 7.72021 7.69512 7.72021 8.82343C7.72021 9.92778 8.55133 10.8114 9.83423 10.8114H9.85904C11.193 10.8114 12.0224 9.92778 12.0224 8.82343C11.997 7.69512 11.193 6.83633 9.88443 6.83633ZM7.94753 23.8836H11.7708V12.3809H7.94753V23.8836Z" fill="#F1F2F2" />
            </svg>

        )
    },
    {
        svg: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_535_1105)">
                    <path d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9861 5.85097 30.6053 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.46499 15.8887 6.25 19.5434 6.25C21.294 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1074C19.1198 10.5 18.5 11.7333 18.5 12.9987V16H22.9375L22.2281 20.625H18.5V31.8056C26.149 30.6053 32 23.9861 32 16Z" fill="#1877F2" />
                    <path d="M22.2281 20.625L22.9375 16H18.5V12.9987C18.5 11.7333 19.1198 10.5 21.1074 10.5H23.125V6.5625C23.125 6.5625 21.294 6.25 19.5434 6.25C15.8887 6.25 13.5 8.46499 13.5 12.475V16H9.4375V20.625H13.5V31.8056C15.1566 32.0648 16.8434 32.0648 18.5 31.8056V20.625H22.2281Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_535_1105">
                        <rect width="32" height="32" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        )
    }
]


const index: FC = () => {
    return (
        <Layout>
            {/* <Section>
                <div className='flex flex-col mt-6 space-y-8'>

                    <H1 text='Get Involved' />
                </div>
                <Section /> */}
            <section className='pt-20'>
                <div className='flex flex-col mt-6 '>

                    <H1 text='Meet our Founder Members' />
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
            <section className='flex lg:flex-col xsm:flex-row  pt-9  w-full mx-auto justify-center items-center'>
                <div className='flex flex-wrap   w-[80%] justify-center gap-16 pt-6 mx-auto  xsm:flex-col lg:flex-row items-center   '>
                    {
                        TeamData.map((i, k) => <div key={k} className='lg:w-[40%] xsm:w-full  flex flex-col space-y-4 '>
                            <div className="containe flex flex-col text-[#fff]">
                                <img src={i.src} alt="Avatar" className="image" />
                                <div className="overlay backround-color-overlay-team mx-auto flex flex-col items-center justify-center">
                                    <div className="felx flex-col space-y-6 w-4/5">

                                        <Paragraph text={i.text} class_='font-semibold text-lg' />
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
            </section>
            {/* <Section className_='pt-20 pb-0'>
                <div className='flex flex-wrap   w-[80%] justify-center gap-16 pt-6 mx-auto  xsm:flex-col lg:flex-row items-center   '>
                    {
                        TeamData.map((i, k) => <div key={k} className='lg:w-[40%] xsm:w-full  flex flex-col space-y-4 '>
                            <div className="containe flex flex-col text-[#fff]">
                                <img src={i.src} alt="Avatar" className="image" />
                                <div className="overlay mx-auto flex flex-col items-center justify-center">
                                    <div className="felx flex-col space-y-6 w-4/5">

                                        <Paragraph text={i.text} class_='font-semibold text-lg' />
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
    )
}


export default index
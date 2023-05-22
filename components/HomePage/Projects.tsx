import { FC, useState, useEffect } from 'react'
import { H2 } from '@/components/common/Heading/H2'
import { Section } from '@/components/common/Section/Section'
// import { Projects_blog } from '@/pages/content'
import { Paragraph } from '@/components/common/Paragraph/Paragraph'
import { PercentageSlider } from '@/components/common/PercentageSlider/PercentageSlider'
import Link from 'next/link'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const Projects_blog = [

    {
        head: "25 quality collectors toys inspired by famous films",
        text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        prestage: 72,
        amout: 752628,
        dir: "heading_one"
    },
    {
        head: "25 quality collectors toys inspired by famous films",
        text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        prestage: 72,
        amout: 752628,
        dir: "heading_two"
    },
    {
        head: "25 quality collectors toys inspired by famous films",
        text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        prestage: 72,
        amout: 752628,
        dir: "haeding_three"
    },
    {
        head: "25 quality collectors toys inspired by famous films",
        text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        prestage: 72,
        amout: 752628,
        dir: "heading_forue"
    },
    {
        head: "25 quality collectors toys inspired by famous films",
        text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        prestage: 72,
        amout: 752628,
        dir: "heading_five"

    },
    {
        head: "25 quality collectors toys inspired by famous films",
        text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        prestage: 72,
        amout: 752628,
        dir: "heading_one"
    },
    {
        head: "25 quality collectors toys inspired by famous films",
        text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        prestage: 72,
        amout: 752628,
        dir: "haeding_three"
    },
    {
        head: "25 quality collectors toys inspired by famous films",
        text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        prestage: 72,
        amout: 752628,
        dir: "heading_five"
    },
    {
        head: "25 quality collectors toys inspired by famous films",
        text: "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas.",
        prestage: 72,
        amout: 752628,
        dir: "heading_two"
    },
]




export const Projects: FC = () => {

    const [ data, setData ] = useState<{ [ key: string ]: number }>({})

    const getData = async () => {
        await axios.get("/api/getAllAmount").then(res => res.data).then(data => {
            setData(data[ 'data' ])
        })
    }


    useEffect(() => {
        getData()
        return () => undefined
    }, [])

    return (
        <Section id="Projects">
            <div className='flex flex-col space-y-16 w-[90%]'>

                <H2 text='Projects' />
                <div className='flex xsm:flex-col lg:flex-row gap-y-8 justify-between flex-wrap  '>
                    {
                        Projects_blog.slice(0, 3).map((i, k) => <Link key={k} href={`/project-page/${i.dir}`} className='lg:w-[31%] xsm:w-full mx-auto  space-y-4 '>
                            <div className='bg-white  xsm:w-[95%] lg:w-full  xsm:mx-auto lg:mx-0 shadow-md p-4 space-y-8 rounded-md'>

                                <div className=' mx-auto '>
                                    <img src="./Projects/Blog-1.jpg" alt="Blog image" className='w-full object-cover ' />
                                </div>
                                <div className=' mx-auto flex flex-col space-y-2  justify-center align-middle ' >
                                    <div className='flex flex-col space-y-2 justify-center '>
                                        <h3 className='font-bold text-sm'>{i.head}</h3>
                                        <Paragraph text={i.text} class_='xsm:text-[12px]' />
                                    </div>
                                    <div className='pb-4'>
                                        <PercentageSlider amount={70000} days={3} perstage={((data[ i.dir ] / i.amout) * 100 || 0.00).toFixed(2)} />
                                    </div>
                                </div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>

        </Section >
    )
}

import { FC, ReactNode } from 'react'
import { NavBar } from './common/NavBar/NavBar'
import { Footer } from './common/Footer/Footer'
import { H2 } from './common/Heading/H2'
import { Section } from './common/Section/Section'

interface Layout {
    children?: ReactNode
}


export const Layout: FC<Layout> = ({ children }) => {
    return (
        <div className='relative'>
            <NavBar />
            {children}
            <Section id=''>
                <div className='flex flex-col space-y-16 w-[90%]'>

                    <H2 text='Subscribe to Our News Letters !' />
                    <div className=' flex justify-center'>
                        <input type="email" placeholder='Enter you email address' className='text-sm rounded-l-full border-[1px] border-[#A15236] xsm:indent-7 lg:indent-9 w-3/5 min-h-[50px]' />
                        <button className='min-h-[50px] xsm:w-fit xsm:px-6   lg:px-0  bg-[#A15236] text-[#fff] lg:w-1/5 rounded-r-full'>Subsribe</button>

                    </div>
                </div>
            </Section>
            <Footer />
        </div>
    )
}

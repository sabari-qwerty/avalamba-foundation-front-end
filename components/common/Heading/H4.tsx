import { FC } from 'react'


interface H4 {
    text: string
}

export const H4: FC<H4> = ({ text }) => {
    return (
        <h4 className='font-bold lg:text-[28px] xsm:text-[26px] '>{text}</h4>
    )
}

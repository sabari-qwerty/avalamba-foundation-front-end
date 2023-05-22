import { FC } from 'react'


interface h1 {
    text: string
}
export const H1: FC<h1> = ({ text }) => {
    return (
        <h1 className='font-bold lg:text-4xl xsm:text-2xl text-center'>{text}</h1>
    )
}

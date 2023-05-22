import { FC } from 'react'

interface H2 {
    text: string
    class_?: string
}


export const H2: FC<H2> = ({ text, class_ }) => {
    return (
        <h2 className={`font-bold lg:text-2xl xsm:text-lg text-center ${class_}`}>{text}</h2>
    )
}

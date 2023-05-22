import { FC } from 'react'

interface Paragraph {
    text: string
    class_: string
}

export const Paragraph: FC<Paragraph> = ({ text, class_ }) => {
    return (
        <p className={` ${class_}`}>{text}</p>
    )
}

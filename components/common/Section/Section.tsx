import { FC, ReactNode } from 'react'

interface Section {
    children?: ReactNode
    id?: string
    className_?: string
}

export const Section: FC<Section> = ({ children, id, className_ }) => {
    return (
        <section className={`flex lg:flex-col xsm:flex-row py-20 w-full mx-auto justify-center items-center ${className_}`} id={id}>{children}</section>
    )
}

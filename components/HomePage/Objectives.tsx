import { FC } from 'react'
import { H2 } from '@/components/common/Heading/H2'
import { Section } from '@/components/common/Section/Section'
// import { ObjectivesData } from '@/pages/content'
import { Paragraph } from '@/components/common/Paragraph/Paragraph'


const ObjectivesData = [
    {
        src: "/Objectives/1.png",
        head: "The Temple",
        text: "To preserve our temples which act as the anchor to our civilization by means of arranging Uzhavara pani ( cleaning by devotees), supporting the community around the temple like priests, musicians, cleaners and everyone else involved directly or indirectly , arrange for pooja in rural temples that is left unattended, provide regular annadanam to people."
    },
    {
        src: "/Objectives/2.png",
        head: "Vedic Traditions",
        text: "With rapidly dwindling vedic community, support would be extended to vaidikas such as agnihotris, ganapatis, vedapatashalas and support conducting yagnas."
    },
    {
        src: "/Objectives/3.png",
        head: "Performing Arts",
        text: "Promote our rich performing arts, both classical and folk art by conducting events bringing in the best of dharmic talent, provide scholarships and constitute endowment awards, take up research projects on complex sahitya available to us in the form of several krithis."
    },
    {
        src: "/Objectives/4.png",
        head: "Research & Documentation",
        text: "A treasure trove of texts, inscriptions, oral traditions, manuscripts available in our country which needs meticulous documentation and research in depth. The aim would be to fund research projects that involve in preserving this rich cultural content."
    },
    {
        src: "/Objectives/5.png",
        head: "Legal Aid",
        text: "Extending legal help towards civilizational causes and collaborate with organisations that work towards making social impact and changes on ground."
    },
    {
        src: "/Objectives/6.png",
        head: "Medical & Educational Aid",
        text: "To provide emergency Medical and educational aid to the needy of our country"
    },


]


export const Objectives: FC = () => {
    return (
        <Section id='Objectives'>
            <div className='w-[90%] flex flex-col space-y-16 ' >

                <H2 text='Objectives' />
                <div className='flex flex-wrap gap-y-3'>


                    {
                        ObjectivesData.map((i, k) => <div key={k} className="containe text-[#fff ] lg:w-1/2 xsm:w-full text-[#fff]">
                            <img src={i.src} alt="Avatar" className="image" />
                            <div className="overlay backround-color-overlay-home  flex flex-col  ">
                                <div className="felx flex-col space-y-4 w-4/5 m-6">
                                    <h3 className='lg:text-2xl font-bold  xsm:text-md'>{i.head}</h3>

                                    <Paragraph text={i.text} class_='font-semibold lg:text-lg xsm:text-[10px] ' />
                                </div>
                            </div>
                        </div>)
                    }
                    {/* <div className="container">
                        <img src="img_avatar.png" alt="Avatar" className="image" />
                        <div className="overlay">
                            <div className="text">Hello World</div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Section>
        // <></>
    )
}

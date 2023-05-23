import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


interface Slider {
    perstage: number | string,
    amount: number | any
    days: number | any

}





export const PercentageSlider: FC<Slider> = ({ perstage, amount, days }) => {
    return (
        <div>
            <div className='flex flex-col '>
                <div className='flex flex-col w-full mt-4'>

                    <div className='w-full flex items-center '>
                        <div className='w-full h-3 bg-[#A152361A] rounded-lg'>
                            <div className='bg-[#A15236] h-3 rounded-lg' style={{ width: `${perstage}%` }}></div>
                        </div>
                        <span className='px-4'>{perstage}%</span>
                    </div>
                    <div className='flex justify-between w-full flex-col mt-2  '>
                        <span className='flex w-full'>₹{Number(amount).toLocaleString('en-US')}
                            <div className='w-full justify-between flex items-end pb-3 '>

                                <sub className='px-2'> Raised</sub> <sub className='px-4'>{days}days ago</sub>
                            </div>
                        </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

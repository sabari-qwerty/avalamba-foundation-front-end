import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        // console.log('hello')
        const data = req.body

        // const {
        //     name,
        //     email,
        //     pan_number,
        //     phone_number,
        //     amount,
        //     currency,
        //     razorpay_payment_id,
        //     razorpay_order_id,
        //     razorpay_signature_id,
        //     template_header,
        // } = data


        // console.log(    
        //     {
        //         name,
        //         email,
        //         pan_number,
        //         phone_number,
        //         amount,
        //         currency,
        //         razorpay_payment_id,
        //         razorpay_order_id,
        //         razorpay_signature_id,
        //         template_header,
        //     }
        // )

        // console.log(data)
        await prisma.donationDetails.create({
            data
        })

        res.status(200).send({ ok: 1 })
    }
}
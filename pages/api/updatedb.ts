import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from "next"
import RazorWebhook from 'razorpay-typescript'

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        const body = req.body
        console.log()

        const data = body[ "payload" ][ "payment" ][ "entity" ]
        console.log(data[ "order_id" ])
        console.log(data[ "status" ])


        console.log("update")
        if (body[ "event" ] === "payment.captured") {
            const update = await prisma.donationDetails.updateMany({
                where: {
                    razorpay_order_id: data[ "order_id" ],
                },
                data: {
                    process: data[ 'status' ]
                }


            })

        }

        if (body[ "event" ] === "payment.failed") {
            const update = await prisma.donationDetails.updateMany({
                where: {
                    razorpay_order_id: data[ "order_id" ],
                },
                data: {
                    process: data[ 'status' ]
                }


            })

        }

        // if (body[ "event" ] === "payment.captured") {
        //     const update = await prisma.donationDetails.update({
        //         where: {
        //             razorpay_order_id: "order_LrvqKMURPAzlH5"
        //         },
        //         data: {
        //             process: "hello"
        //         }


        //     })

        // }



        res.status(200).send(body)

    }


}


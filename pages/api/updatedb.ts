import { Prisma, PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from "next"
import RazorWebhook from 'razorpay-typescript'

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        const body = req.body
        console.log(body)

        const data = body[ "payload" ][ "payment" ][ "entity" ]
        // console.log(data[ "order_id" ])
        // console.log(data[ "status" ])


        console.log("update")
        if (body[ "event" ] === "payment.captured") {

            const paymentStatus = await prisma.paymnetStatus.create({
                data: {
                    razorpay_order_id: data[ "order_id" ],
                    status: data[ "status" ]
                }
            })

        }

        if (body[ "event" ] === "payment.failed") {
            const paymentStatus = await prisma.paymnetStatus.create({
                data: {
                    razorpay_order_id: data[ "order_id" ],
                    status: data[ "status" ]
                }
            })

        }




        res.status(200).send(body)

    }


}


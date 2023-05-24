import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { Processor } from "postcss"


// const Razorpay = require('razorpay')
// const shortid = require('shortid')


const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log('hello')
    if (req.method === "GET") {


        // const all = await prisma.donationDetails.findMany({

        //     select: {

        //         template_headre: true,
        //         amount: true
        //     }
        // })

        // const data: { [ key: string ]: number } = all.reduce((acc: any, item) => {
        //     const { template_headre, amount } = item;
        //     acc[ template_headre ] = (acc[ template_headre ] || 0) + parseInt(amount);
        //     return acc;
        // }, {});



        res.status(200).send({
            DATA: {

                // key: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
                // secret: process.env.NEXT_PUBLIC_RAZORPAY_SECRET,
                // databaseUrl: process.env.NEXT_PUBLIC_DATABASE_URL,
                // direactUrl: process.env.NEXT_PUBLIC_DIRECT_URL,
                // shadiw: process.env.NEXT_PUBLIC_SHADOW_DATABASE_URL,

                data: 'hello'


            }
        })
    }

}   
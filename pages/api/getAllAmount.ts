import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"







const prisma = new PrismaClient()

interface item {
    template_headre: string | any,
    amount: string | any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "GET") {


        const all = await prisma.$queryRaw`select template_headre, amount from "DonationDetails" dd join "PaymnetStatus" ps on dd.razorpay_order_id = ps.razorpay_order_id where PS.status = 'captured'`


        const data: { [ key: string ]: number } = (all as item[]).reduce((acc: any, item: item) => {
            const { template_headre, amount } = item;
            acc[ template_headre ] = (acc[ template_headre ] || 0) + parseInt(amount);
            return acc;
        }, {});


        // console.log(data)

        res.status(200).send({ data })
    }

}   
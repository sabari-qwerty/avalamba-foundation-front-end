import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        const data = req.body
        console.log(data)
        await prisma.donationDetails.create({
            data
        })

        res.status(200).send({ ok: 1 })
    }
}
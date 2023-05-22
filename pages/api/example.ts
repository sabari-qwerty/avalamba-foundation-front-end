// const Razorpay = require("razorpay");
import RayzerPay from "razorpay";
// import shortid from 'shortid'
import shortid from "shortid";


import type { NextApiRequest, NextApiResponse } from "next";

const razorpay = new RayzerPay({
    key_id: "rzp_test_wMKq6DIAFg2e9j",
    key_secret: "iLqa3K3Uq8ZdZuqUlroCJiUi",
});


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const data = req.body

        const { amount, currency } = JSON.parse(data)
        console.log({ amount })



        const options = {
            amount: String(parseInt(amount) * 100),
            currency,
            receipt: shortid.generate(),
        };

        try {
            const response = await razorpay.orders.create(options)
            res.status(200).json(response)
        }
        catch (err) {
            res.status(400).json(err)
        }

    }



}
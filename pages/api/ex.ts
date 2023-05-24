import RayzerPay from "razorpay";

import type { NextApiRequest, NextApiResponse } from "next";


const razorpay = new RayzerPay({
    key_id: "rzp_test_wMKq6DIAFg2e9j",
    key_secret: "iLqa3K3Uq8ZdZuqUlroCJiUi",
});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

}
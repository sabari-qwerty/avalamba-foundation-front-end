import axios from "axios";
import { createHash } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      // const { amount, marchantUserId, merchantTransactionId } = req.body;
      const { amount, marchantUserId, merchantTransactionId, phone } = req.body;

      const payload = {
        merchantId: process.env.NEXT_PUBLIC_PHONEPE_Merchant_ID as string,
        // merchantId: "PGTESTPAYUAT",
        merchantTransactionId: merchantTransactionId,
        merchantUserId: marchantUserId,
        amount: Number(amount) * 100,
        redirectUrl: `${process.env.NEXT_PUBLIC_PAGE_URL}#About-Us`,
        redirectMode: "REDIRECT",
        callbackUrl: `${process.env.NEXT_PUBLIC_PAGE_URL}/api/phonepe/callback`,
        mobileNumber: phone,
        paymentInstrument: {
          type: "PAY_PAGE",
        },
      };

      const base64 = btoa(JSON.stringify(payload));
      const sha256 =
        createHash("sha256")
          .update(
            base64 + `/pg/v1/pay${process.env.NEXT_PUBLIC_PHONEPE_API_KEY}`
          )
          .digest("hex") + `###${process.env.NEXT_PUBLIC_PHONEPE_KEY_INDEX}`;

      const url = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

      // const url = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

      const headers = {
        "Content-Type": "application/json",
        "X-VERIFY": sha256,
        accept: "application/json",
      };

      const data = {
        request: base64,
      };

      const response = await axios.post(url, data, { headers });

      console.log(response.data);
      console.log("data");
      return res.status(200).send({ data: response.data });

      // return res.status(200).send({ data: "ok" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error });
  }
}

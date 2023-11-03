import axios from "axios";
import { createHash } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { amount, marchantUserId, merchantTransactionId } = req.body;

    const payload = {
      merchantId: "PGTESTPAYUAT",
      merchantTransactionId: merchantTransactionId,
      merchantUserId: marchantUserId,
      amount: amount,
      redirectUrl:
        "https://e093-2405-201-e021-18c9-9d8c-35e7-e312-27c1.ngrok-free.app/",
      redirectMode: "REDIRECT",
      callbackUrl:
        "https://31c7-2405-201-e021-18c9-eaa7-964-ee35-ee5e.ngrok-free.app/api/phonepe/callback",
      mobileNumber: "6373836008",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const base64 = btoa(JSON.stringify(payload));

    const sha256 =
      createHash("sha256")
        .update(base64 + "/pg/v1/pay099eb0cd-02cf-4e2a-8aca-3e6c6aff0399")
        .digest("hex") + "###1";

    const url = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

    const headers = {
      "Content-Type": "application/json",
      "X-VERIFY": sha256,
      accept: "application/json",
    };

    const data = {
      request: base64,
    };

    const response = await axios.post(url, data, { headers });

    res.status(200).send({ data: response.data.data });
  }
}

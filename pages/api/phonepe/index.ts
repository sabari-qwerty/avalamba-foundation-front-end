import axios from "axios";
import { createHash } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // const { amount, marchantUserId, merchantTransactionId } = req.body;
    const { amount, marchantUserId, merchantTransactionId, phone } = req.body;

    const payload = {
      merchantId: "PGTESTPAYUAT",
      merchantTransactionId: merchantTransactionId,
      merchantUserId: marchantUserId,
      amount: Number(amount) * 100,
      redirectUrl: "https://www.avalambafoundation.com/#About-Us",
      redirectMode: "REDIRECT",
      callbackUrl: "https://www.avalambafoundation.com/api/phonepe/callback",
      mobileNumber: phone,
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

    return res.status(200).send({ data: response.data });

    // return res.status(200).send({ data: "ok" });
  }
}

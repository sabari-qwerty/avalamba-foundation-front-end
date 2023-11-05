import { PrismaClient } from "@prisma/client";
// import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

interface response {
  success: boolean;
  code: string;
  message: string;
  data: {
    merchantId: string;
    merchantTransactionId: string;
    transactionId: string;
    amount: number;
    state: string;
    responseCode: string;
    paymentInstrument: {
      type: string;
      cardType: string;
      pgTransactionId: string;
      bankTransactionId: null | string;
      pgAuthorizationCode: null | string;
      arn: null | string;
      bankId: string;
      brn: string;
    };
  };
}

import { Prisma } from "@prisma/client";
import axios from "axios";
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     try {
//       const data_ = req.body;

//       const base64 = data_["response"];

//       const response = atob(base64);

//       const json: response = JSON.parse(response);

//       const data = {
//         merchantId: json.data.merchantId,
//         merchantTransactionId: json.data.merchantTransactionId,
//         transactionId: json.data.transactionId,
//         amount: json.data.amount / 100,
//         state: json.data.state,
//         responseCode: json.data.responseCode,
//         type: json.data.paymentInstrument.type,
//         cardType: json.data.paymentInstrument.cardType,
//         pgTransactionId: json.data.paymentInstrument.pgTransactionId,
//         bankTransactionId: String(
//           json.data.paymentInstrument.bankTransactionId
//         ),
//         pgAuthorizationCode: String(
//           json.data.paymentInstrument.pgAuthorizationCode
//         ),
//         arn: String(json.data.paymentInstrument.arn),
//         bankId: json.data.paymentInstrument.bankId,
//         brn: json.data.paymentInstrument.brn,
//         code: json.code,
//         message: json.message,
//       };

//       await prisma.paymnetStatus.create({
//         data: data,
//       });

//       console.log(json.data.merchantTransactionId);
//       return res.status(200).send({ success: json.success });
//     } catch (err) {
//       return res.status(500).send({ err });
//     }
//   }
// }

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data_ = req.body;

      const base64 = data_["response"];

      const response = atob(base64);

      const json: response = JSON.parse(response);

      console.log(json);

      const create_data = await prisma.paymnetStatus.create({
        data: {
          merchantId: json.data.merchantId,
          merchantTransactionId: json.data.merchantTransactionId,
          transactionId: json.data.transactionId,
          amount: json.data.amount / 100,
          state: json.data.state,
          responseCode: json.data.responseCode,
          type: json.data.paymentInstrument.type,
          cardType: json.data.paymentInstrument.cardType,
          pgTransactionId: json.data.paymentInstrument.pgTransactionId,
          bankTransactionId: String(
            json.data.paymentInstrument.bankTransactionId
          ),
          pgAuthorizationCode: String(
            json.data.paymentInstrument.pgAuthorizationCode
          ),
          arn: String(json.data.paymentInstrument.arn),
          bankId: json.data.paymentInstrument.bankId,
          brn: json.data.paymentInstrument.brn,
          code: json.code,
          message: json.message,
        },
      });

      const find_email = await prisma.donationDetails.findUnique({
        where: {
          merchantTransactionId: json.data.merchantTransactionId,
        },
      });

      if (find_email) {
        console.log(find_email.sub_category);
        const send_email = await axios.post(
          "https://www.avalambafoundation.com/api/mail/send",
          {
            merchantTransactionId: find_email.marchantUserId.slice(),
            amount: find_email.amount,
            email: find_email.email,
            catgery: find_email.sub_category,
          }
        );
      }

      return res.status(200).send({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ err });
    }
  }
}

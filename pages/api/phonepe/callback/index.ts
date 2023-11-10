import { PrismaClient } from "@prisma/client";
// import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

interface cardPayment {
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

interface PaymentUPI {
  success: Boolean;
  code: string;
  message: string;
  data: {
    merchantId: string;
    merchantTransactionId: string;
    transactionI: string;
    amount: number;
    state: string;
    responseCode: string;
    paymentInstrument: {
      type: string;
      utr: string;
    };
  };
}

interface NetBanKing {
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
      pgTransactionId: string;
      pgServiceTransactionId: string;
      bankTransactionId: string;
      bankId: string;
    };
  };
}

import { Prisma } from "@prisma/client";
import axios from "axios";

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

      const json: cardPayment & PaymentUPI & NetBanKing = JSON.parse(response);

      console.log("here json", json);

      if (json.data.paymentInstrument.type === "UPI") {
        const upi = await prisma.paymentUPI.create({
          data: {
            code: json.code,
            message: json.message,
            merchantId: json.data.merchantId,
            merchantTransactionId: json.data.merchantTransactionId,
            transactionId: json.data.transactionId,
            amount: json.data.amount / 100,
            state: json.data.state,
            responseCode: json.data.responseCode,
            type: json.data.paymentInstrument.type,
            utr: json.data.paymentInstrument.utr,
          },
        });
      }

      if (json.data.paymentInstrument.type === "CARD") {
        const card = await prisma.paymentCard.create({
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
            bankId: String(json.data.paymentInstrument.bankId),
            brn: String(json.data.paymentInstrument.brn),
            code: String(json.code),
            message: String(json.message),
          },
        });
      }

      if (json.data.paymentInstrument.type === "NETBANKING") {
        const net = await prisma.netBanKing.create({
          data: {
            merchantId: json.data.merchantId,
            merchantTransactionId: json.data.merchantTransactionId,
            transactionId: json.data.transactionId,
            amount: json.data.amount / 100,
            state: json.data.state,
            responseCode: json.data.responseCode,
            type: json.data.paymentInstrument.type,
            pgTransactionId: json.data.paymentInstrument.pgTransactionId,
            pgServiceTransactionId:
              json.data.paymentInstrument.pgServiceTransactionId,
            bankTransactionId: String(
              json.data.paymentInstrument.bankTransactionId
            ),
            backId: json.data.paymentInstrument.bankId,
            code: String(json.code),
            message: String(json.message),
          },
        });
      }

      const find_email = await prisma.donationDetails.findUnique({
        where: {
          merchantTransactionId: json.data.merchantTransactionId,
        },
      });

      if (find_email) {
        console.log(find_email.sub_category);
        const send_email = await axios.post(
          `${process.env.NEXT_PUBLIC_PAGE_URL}/api/mail/send`,
          {
            id: find_email.id,
            merchantTransactionId: find_email.marchantUserId.slice(),
            amount: find_email.amount,
            email: find_email.email,
            catgery: find_email.sub_category,
            name: find_email.name,
            phone: find_email.phone,
            address: find_email.address,
            city: find_email.city,
            state: find_email.state,
            zip: find_email.pin_number,
            pan: find_email.pan_number,
            create: find_email.createAt,
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

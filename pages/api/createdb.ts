import { PrismaClient } from "@prisma/client";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const {
        name,
        email,
        phone,
        pan_number,
        primary_category,
        sub_category,
        amount,
        message,
        address,
        pin_number,
        state,
        country,
        city,
        marchantUserId,
        merchantTransactionId,
      } = req.body;

      await prisma.donationDetails.create({
        data: {
          name,
          email,
          phone,
          pan_number,
          primary_category,
          sub_category,
          amount,
          message,
          address,
          pin_number,
          state,
          country,
          city,
          marchantUserId,
          merchantTransactionId,
        },
      });

      const data = await axios.post("/api/phonepe", {
        marchantUserId,
        merchantTransactionId,
        amount,
      });

      console.log(data);

      res.status(200).send({ data });
    }
  } catch (error) {
    res.status(500).send({ status: "error", message: error });
  }
}

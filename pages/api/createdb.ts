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
      } = req.body;

      // console.log({
      //   name,
      //   email,
      //   phone,
      //   pan_number,
      //   primary_category,
      //   sub_category,
      //   amount,
      //   message,
      //   address,
      //   pin_number,
      //   state,
      //   country,
      //   city,
      //   marchantUserId,
      //   merchantTransactionId,
      // });

      const marchantUserId = "MUID" + crypto.randomUUID().split("-").join("");
      const merchantTransactionId =
        "MTID" + crypto.randomUUID().split("-").join("");


      const create_data = await prisma.donationDetails.create({
        data: {
          name,
          email,
          phone,
          pan_number,
          primary_category,
          sub_category,
          amount: Number(amount),
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

      var return_data;
      try {
        return_data = await axios.post(
          `${process.env.NEXT_PUBLIC_PAGE_URL}/api/phonepe`,
          {
            marchantUserId,
            merchantTransactionId,
            amount: amount,
            phone,
          }
        );
      } catch (error) {
        console.log(error);
      }

      return res.status(200).send({ data: return_data?.data?.data });
    }
  } catch (error) {
    console.log(error);

    res.status(500).send({ status: "error", message: error });
  }
}

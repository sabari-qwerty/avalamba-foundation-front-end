import { PrismaClient } from "@prisma/client";
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { id } = req.query;

    const data = await prisma.donationDetails.findUnique({
      where: { id: String(id) },
    });

    console.log(data);

    return res.status(200).json({
      data,
    });
  } catch (err) {
    console.log({ err });

    return res.status(404).json({ err });
  }
}

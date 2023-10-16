import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";
import { renderToStaticMarkup } from "react-dom/server";
import PdfPage from "../pdf/page";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const instance = new Razorpay({
      key_id: String(process.env.NEXT_PUBLIC_RAZORPAY_KEY),
      key_secret: String(process.env.NEXT_PUBLIC_RAZORPAY_SECRET),
    });

    const body = req.body;

    // console.log("herer", body);

    if (body["event"] == "payment.captured") {
      // console.log("payload ", body["payload"]);

      const data = body["payload"]["payment"]["entity"];
      console.log(data);

      const RazorPayId = data["id"];
      const amount = data["amount"];
      const currency = data["currency"];
      const RazorPayOrderId = data["order_id"];
      const card_id = data["card_id"];
      const Last_four_number = data["card"]["last4"];
      const card_type = data["card"]["type"];

      const email = data["email"];

      const phoneNumber = data["contact"];

      const catgery = data["notes"]["catgery"];

      const sub_catgery = data["notes"]["sub_catgery"];

      const address = data["notes"]["address"];
      const city = data["notes"]["city"];
      const state = data["notes"]["state"];
      const country = data["notes"]["country"];
      const pin = data["notes"]["pin"];
      const name = data["notes"]["name"];

      console.log(name, phoneNumber, email);
      // console.log(data["notes"]);
      // console.log(name);PdfPage

      // const html = renderToStaticMarkup(
      // );
      const create_cutomer_id = await instance.customers.create({
        name: name,
        contact: Number(phoneNumber),
        email: email,
        fail_existing: 0,
      });

      const create_item_id = await instance.items.create({
        amount,
        currency,
        name,
      });

      //  create_cutomer_id.id;

      const now_data = Number(Date.now());

      // console.log(create_item_id.id);
      // console.log(create_cutomer_id.id);
      // console.log(now_data);

      try {
        const result = await instance.invoices.create({
          type: "invoice",
          date: 1989994898,
          customer_id: create_cutomer_id.id,
          sms_notify: true,
          amount,
          line_items: [
            {
              item_id: create_item_id.id,
            },
          ],
        });

        // Process the result or perform other actions upon successful execution
        console.log("Invoice created successfully:", result);
      } catch (error) {
        // Handle the error
        console.error("Error creating invoice:", error);
      }
      // instance.invoices.create({
      //   type: "invoice",
      //   date: 1589994898,
      //   customer_id: "cust_E7q0trFqXgExmT",
      //   line_items: [
      //     {
      //       item_id: "item_DRt61i2NnL8oy6",
      //     },
      //   ],
      // });

      // const  = create_cutomer_id.then((res) => res);

      // const address = data["notes"]["address"];

      // const PanNumber = data["notes"]["pan"];

      // console.log(data["notes"]);

      // console.log(data);

      // console.log("there", {
      //   RazorPayId,
      //   amount,
      //   currency,
      //   RazorPayOrderId,
      //   card_id,
      //   Last_four_number,
      //   card_type,
      //   email,
      //   phoneNumber,
      //   catgery,
      //   sub_catgery,
      //   address,
      //   city,
      //   country,
      //   state,
      //   name,
      // });
    }

    if (body["event"] === "payment.failed") {
      console.log();
    }
    return res.status(200).json({
      data: body,
    });
  }
}

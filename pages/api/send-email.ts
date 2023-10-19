import type { NextApiRequest, NextApiResponse } from "next";
import Razorpay from "razorpay";
import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const instance = new Razorpay({
      key_id: String(process.env.NEXT_PUBLIC_RAZORPAY_KEY),
      key_secret: String(process.env.NEXT_PUBLIC_RAZORPAY_SECRET),
    });

    const body = await req.body;

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

      console.log("here", amount);
      const transporter = createTransport({
        host: "smtp.zoho.in",
        port: 465,
        secure: true,

        auth: {
          user: "sabariqwerty@zohomail.in",
          pass: "s@b@r!007",
        },
      });

      const mailoptions = {
        from: "sabariqwerty@zohomail.in",
        to: email,
        subject: "text",
        // text: "i am sabari",

        html: `
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            color: black;
        }

        body {
            font-family: 'Poppins', sans-serif;
            padding: 30px 0;
            margin: 0;
        }

        header,
        .address,
        table {
            width: 100% !important;
            margin: auto;
            max-width: 600px !important;
            min-width: 400px !important;
        }

        footer {
            width: 100% !important;
            max-width: 700px !important;
            min-width: 320px !important;
            margin: auto;
        }

        header {
            padding: 20px 10px;
            text-align: center;
        }

        header img {
            max-width: 100%;
            height: auto;
        }

        .nav-secound-div {
            text-align: right;
            font-size: 20px;
            font-weight: 700;
            letter-spacing: -0.92;
        }



        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            border: none;
        }

        th,
        td {
            border: 1px solid #A15236;
            padding: 15px;
            text-align: center;
        }

        th {
            background: #A15236;
            color: #fff;
        }

        tfoot td:last-child,
        tfoot td:nth-child(2) {
            background: #A15236;
            color: #fff;
        }

        footer {
            background-color: #FBF4EF;
            margin-top: 40px;
            padding: 20px 0;
            text-align: center;
        }

        footer img {
            max-width: 50px;
            height: auto;
        }

        .perimaer-gap {
            padding: 30px 0;
        }
    </style>
</head>

<body>

    <div
        style="max-width:700px !important ; border: 1px solid rgba(0, 0, 0, 0.281); margin: auto; background-color: #fff;">

        <header class="perimaer-gap">
            <div style="float: left; min-width: 200px; height: 59px; ">

                <img src='https://avalambafoundation.com/mail/full.png' alt="full-logo"
                    style="width: 100%; height: 100%;" />
            </div>
            <div class="nav-secound-div">
                <div>INVOICE</div>
                <div>${RazorPayOrderId}</div>
            </div>
        </header>

        <div class="perimaer-gap address" style="font-style: normal;">
            <div>Bill To</div>
            <div>
                <h2>Avalamba Foundation</h2>
                <div>
                    19/8, 2nd Floor, Suriyaram Apartments,<br>
                    Justice Sundharam Road,<br> Mylapore - 600004
                </div>
            </div>
        </div>

        <div class="perimaer-gap">
            <table style="border:none !important; outline: none !important;">
                <thead style="border:none !important; outline: none !important;">
                    <tr style="border:none !important; outline: none !important;">
                        <th style="border:none !important; outline: none !important;">#</th>
                        <th style="border:none !important; outline: none !important;">Name</th>
                        <th style="border:none !important; outline: none !important;">Qty</th>
                        <th style="border:none !important; outline: none !important;">Price(RS)</th>
                    </tr>
                </thead>
                <tbody style="border:none !important; outline: none !important;">
                    <tr style="border:none !important; outline: none !important;">
                        <td style="border:none !important; outline: none !important;">1</td>
                        <td style="border:none !important; outline: none !important;">${sub_catgery}</td>
                        <td style="border:none !important; outline: none !important;">1</td>
                        <td style="border:none !important; outline: none !important;">${
                          amount / 100
                        }</td>
                    </tr>
                </tbody>
                <tfoot style="border: none !important; outline: none !important;">
                    <tr style="border: none !important; outline: none !important;">
                        <td colspan="2" style="border: none !important; border-top: 1px solid #A15236 !important;"></td>
                        <td
                            style="border: none !important; border-top: 1px solid #A15236 !important; background: #A15236 !important; color: #fff !important;">
                            Sub
                            Total</td>
                        <td
                            style="border: none !important; border-top: 1px solid #A15236 !important; background-color: #A15236 !important; color: #fff !important;">
                            Rs. ${amount / 100}

                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

        <footer style="margin-top: 50px;">
            <div>
                <div>
                    <img src='https://avalambafoundation.com/mail/off.png' alt="offlogo" />
                </div>
                <h3>Avalamba Foundation</h3>
                <div style="font-style: normal;">
                    19/8, 2nd Floor, Suriyaram Apartments,<br>
                    Justice Sundharam Road, Mylapore.
                </div>
            </div>
        </footer>
    </div>

</body>

</html>
        `,
      };

      transporter.sendMail(mailoptions, (error, info) => {
        if (error) {
          return console.log("Error:", error);
        }
        console.log("Email sent:", info.response);
      });

      return NextResponse.json({
        conagratelate: "email is sended",
      });

      // console.log(name, phoneNumber, email);

      // console.log(data["notes"]);
      // console.log(name);PdfPage

      // const html = renderToStaticMarkup(
      // );
      // const create_cutomer_id = await instance.customers.create({
      //   name: name,
      //   contact: Number(phoneNumber),
      //   email: email,
      //   fail_existing: 0,
      // });

      // const create_item_id = await instance.items.create({
      //   amount,
      //   currency,
      //   name,
      // });

      //  create_cutomer_id.id;

      // const now_data = Number(Date.now());

      // console.log(create_item_id.id);
      // console.log(create_cutomer_id.id);
      // console.log(now_data);

      // try {
      //   const result = await instance.invoices.create({
      //     type: "invoice",
      //     date: 1989994898,
      //     customer_id: create_cutomer_id.id,
      //     sms_notify: true,
      //     amount,
      //     line_items: [
      //       {
      //         item_id: create_item_id.id,
      //       },
      //     ],
      //   });

      //   // Process the result or perform other actions upon successful execution
      //   console.log("Invoice created successfully:", result);
      // } catch (error) {
      //   // Handle the error
      //   console.error("Error creating invoice:", error);
      // }
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

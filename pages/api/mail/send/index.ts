import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const init_date = new Date();

    const fromat_date =
      init_date.getDate() +
      "-" +
      (init_date.getMonth() + 1) +
      "-" +
      init_date.getFullYear();

    const {
      merchantTransactionId,
      amount,
      email,
      catgery,
      name,
      address,
      zip,
      phone,
    } = req.body;

    console.log("init");
    const transporter = createTransport({
      host: "smtp.zoho.com",
      secure: true,
      port: 587,
      auth: {
        user: "noreply@avalambafoundation.com",
        pass: "Avalamba2023&",
      },
    });

    const mailoptions = {
      from: "noreply@avalambafoundation.com",
      to: "sabarikrishnan000@gmail.com",
      subject: "Test Email",
      text: "i am sabari",

      html: `
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        footer {
            background-color: #FBF4EF;
            padding: 20px 0;
            text-align: center;
        }

        footer img {
            max-width: 50px;
            height: auto;
        }
    </style>
</head>

<body>
    <div
        style="max-width:700px !important ; border: 1px solid rgba(0, 0, 0, 0.281); margin: auto; background-color: #fff;">

        <div style="width: 100%; padding-top: 50px; padding-bottom:20px ; ">
            <center>
                <img src="https://avalambafoundation.com/mail/full.png" alt="avalamba foundation " />
            </center>
        </div>

        <div style="width: 100%; text-align: center;">
            <h3>
                <u>
                    Donation Receipt
                </u>
            </h3>
        </div>

        <div style="width: 100%; padding: 20px;">

            <div style="padding: 12px;">
                <span>
                    <b>
                        Date
                    </b>
                </span>: <span>${fromat_date}</span>
            </div>

            <div style="padding: 12px;">
                <span>
                    <b>

                        Receipt Number
                    </b>
                </span> : <span>
                    #${merchantTransactionId}
                </span>
            </div>

            <div style="padding: 12px;">
                <span>
                    <b>

                        Donation made towards
                    </b>
                </span>:
                <span>${catgery}</span>
            </div>
            <div style="padding: 12px;">
                <span>
                    <b>

                        Full Name
                    </b>
                </span>:
                <span>
                    ${name}
                </span>
            </div>

            <div style="padding: 12px;">
                <span>
                    <b>

                        Address
                    </b>
                </span>: <address style="display: inline-block;">
                ${address}
                </address>
            </div>
            <div style="padding: 12px;">
                <span>
                    <b>
                        Pin Code
                    </b>
                </span>: <span>
                    ${zip}
                </span>
            </div>
            <div style="padding: 12px;">
                <span>
                    <b>

                        Phone Number
                    </b>
                </span>:
                <span>6383736009</span>
            </div>
            <div style="padding: 12px;">
                <span>
                    <b>

                        PAN
                    </b>
                </span>:
                <span>${phone}</span>
            </div>
            <div style="padding: 12px;">
                <span>
                    <b>
                        Email
                    </b>
                </span>:
                <span>${email}</span>
            </div>
            <div style="padding: 12px;">
                <span>
                    <b>
                        Donation Amount
                    </b>
                </span>:
                <span>
                    ${amount}
                </span>
            </div>

            <div style="  padding-left: 12px; text-align: end; padding-right:50px ;">
                For Avalamba Foundation
            </div>


            <div style="padding: 16px; padding-left:12px; ">
                <div style="  padding-right: 50px; ">
                    <div style="display: flex; justify-content: end; ">
                        <img src="https://avalambafoundation.com/mail/signature.jpeg" alt="signature" />
                    </div>
                    <h4 style="text-align: end">Authorised Signatory</h4>
                </div>
            </div>

        </div>

        <footer>
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

    console.log("process");

    try {
      const info = await new Promise((resolve, reject) => {
        transporter.sendMail(mailoptions, (error, info) => {
          console.log("i am sending");

          if (error) {
            reject(error);
            return console.log("Error:", error);
          }
          console.log("Email sent:", info.response);

          resolve(info);
        });
      });
    } catch (err) {
      console.log("sending failed======>");
      console.log(err);
    }

    console.log("done");

    return res.status(200).json({
      conagratelate: "email is sended",
    });
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const init_date = new Date();

      const {
        id,
        merchantTransactionId,
        amount,
        email,
        catgery,
        name,
        address,
        zip,
        phone,
        pan,
        create,
      } = req.body;

      console.log(create);

      const isoDate = new Date(create);

      const options = { year: "numeric", month: "numeric", day: "numeric" };

      //   @ts-ignore
      const fromat_date = isoDate.toLocaleDateString("en-in", options);

      const data = await resend.emails.send({
        from: "noreply@avalambafoundation.com",
        to: [email],
        subject: "Donation Receipt",

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
    <div style="max-width:700px !important; min-width: 320px  !important; margin: auto; ">
        Namaskaram!<br />
        <br />
        Avalamba Foundation thanks you for your generous donation towards a dharmic cause. We extend our
        heartfelt<br />
        <br />

        gratitude to you for this gesture.<br />
        <br />

        Please find the attached soft copy of the donation receipt.<br />
        <br />

        Kindly Note:<br />
        <br />

        1) The approval for exemption under 80G is under process and status will be updated soon.<br />
        <br />

        2) For refunds , cancellations and any other payment related queries , kindly contact us at<br />
        <br />

        contact@avalambafoundation.com or call us at +91 9566272778 within 7 days from date of payment.<br />
        <br />

        We look forward for your continued support.<br />
        <br />
        With Regards,<br />
        <br />

        Donor care team.<br />
        <br />

        Avalamba Foundation<br />
        <br />

        Chennai<br />
        <br />
        <br />

        <a href="${process.env.NEXT_PUBLIC_PAGE_URL}/downlaodpdf?id=${id}">Download pdf here</a>
        <br />
        <br />
    </div>
    <div
        style="max-width:700px !important ; border: 1px solid rgba(0, 0, 0, 0.281); margin: auto; background-color: #fff;">



        <div style="width: 100%; padding-top: 50px; padding-bottom:20px ; ">
            <center>
                <img src="https://avalambafoundation.com/mail/full.png" alt="avalamba foundation " />
            </center>
        </div>

        <div style="width: 100%; text-align: center;">
            <h3>
                Donation Receipt
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
                <span>${phone}</span>
            </div>
            <div style="padding: 12px;">
                <span>
                    <b>

                        PAN
                    </b>
                </span>:
                <span>${pan}</span>
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
                    ₹ ${amount}
                </span>
            </div>
            <br />
            <br />


            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding-right: 35px;">
                <tr>
                    <td align="right">
                        <h5>
                            For Avalamba Foundation
                        </h5>
                    </td>
                </tr>

                <tr>
                    <td align="right">
                        <img src="https://avalambafoundation.com/mail/signature.jpeg" alt="img" />
                    </td>
                </tr>

                <tr>
                    <td align="right">
                        <h5>
                            For Avalamba Foundation
                        </h5>
                    </td>
                </tr>

            </table>
        </div>

        <div class="footer" style="background-color: #FBF4EF; padding: 20px 0; text-align: center; ">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="center" style="padding: 10px; ">
                        <h3 style=" margin: 0;">Avalamba Foundation</h3>
                    </td>
                </tr>
            </table>

            <div style="font-style: normal; text-align: center; margin-top: 10px;">
                Reg Address: 19/8, 2nd Floor, Suryaram<br />
                Aartments, Justice Sundaram Road, Mylapore,<br />
                Chennai 600004, Tamil Nadu, India,<br />
                <a href="http://www.avalambafoundation.com"
                    style="color: #000; text-decoration: none;">www.avalambafoundation.com</a><br />
                <strong>Reg No:</strong>: 184/IV/2022<br />
                PAN: AAJTA3643A
            </div>
        </div>
    </div>
</body>

</html>
        `,
      });

      console.log(data);

      return res.status(200).json({
        conagratelate: "email is sended",
      });
    }
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { merchantTransactionId, amount, email, catgery } = req.body;

    const transporter = createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "calista.ritchie25@ethereal.email",
        pass: "rekAcgurrJETAGsy7M",
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
              <div>${merchantTransactionId}</div>
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
                      <td style="border:none !important; outline: none !important;">${catgery}</td>
                      <td style="border:none !important; outline: none !important;">1</td>
                      <td style="border:none !important; outline: none !important;">${amount}</td>
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
                          Rs. ${amount} 

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

    return res.status(200).json({
      conagratelate: "email is sended",
    });
  }
}

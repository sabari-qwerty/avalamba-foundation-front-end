
const Razorpay = require("razorpay");
const shortid = require("shortid");


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});
export default async function handler(req, res) {
    if (req.method === "POST") {
        // Initialize razorpay object



        const data = req.body
        const { name, amount, currency } = JSON.parse(data)
        console.log(
            {
                name,
                amount,
                currency
            }
        )
        // console.log(JSON.parse(data)[ 'name' ])
        // Create an order -> generate the OrderID -> Send it to the Front-end
        // Also, check the amount and currency on the backend (Security measure)
        const payment_capture = 1;
        // const amount = 499;
        // const currency = "INR";
        const options = {
            amount: (amount * 100).toString(),
            currency,
            receipt: shortid.generate(),
            payment_capture,
        };

        try {
            const response = await razorpay.orders.create(options);

            // console.log({ id: response.id })
            res.status(200).json(response)
            // res.status(200).json({
            //     id: response[ 'id' ],
            //     currency: response[ 'currency' ],
            //     amount: response[ 'amount' ],
            // });
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    } else {
        if (req.method == "GET") {

            razorpay.payments.all({}, (err, payments) => {
                if (err) {
                    console.error('Error fetching payments:', err);
                    return;
                }
                res.status(200).json(payments)

            })


        }
    }
}

const Razorpay = require("razorpay");
const shortid = require("shortid");



export default async function handler(req, res) {
    if (req.method === "POST") {

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY,
            key_secret: process.env.RAZORPAY_SECRET,
        });
        // console.log('hello')
        res.status(200).json({ name: 'John Doe' })
    }

}
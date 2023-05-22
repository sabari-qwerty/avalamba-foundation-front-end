-- CreateTable
CREATE TABLE "donationDetails" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pan_number" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "currancy" TEXT NOT NULL,
    "razorpay_payment_id" TEXT NOT NULL,
    "razorpay_order_id" TEXT NOT NULL,
    "razorpay_signature_id" TEXT NOT NULL,
    "template_header" TEXT NOT NULL,

    CONSTRAINT "donationDetails_pkey" PRIMARY KEY ("id")
);

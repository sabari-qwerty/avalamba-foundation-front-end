-- CreateTable
CREATE TABLE "DonationDetails" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pan_number" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "razorpay_payment_id" TEXT NOT NULL,
    "razorpay_order_id" TEXT NOT NULL,
    "razorpay_signature_id" TEXT NOT NULL,
    "template_headre" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "DonationDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymnetStatus" (
    "id" TEXT NOT NULL,
    "razorpay_order_id" TEXT,
    "status" TEXT,

    CONSTRAINT "PaymnetStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_razorpay_payment_id_key" ON "DonationDetails"("razorpay_payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_razorpay_order_id_key" ON "DonationDetails"("razorpay_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_razorpay_signature_id_key" ON "DonationDetails"("razorpay_signature_id");

-- CreateIndex
CREATE UNIQUE INDEX "PaymnetStatus_razorpay_order_id_key" ON "PaymnetStatus"("razorpay_order_id");

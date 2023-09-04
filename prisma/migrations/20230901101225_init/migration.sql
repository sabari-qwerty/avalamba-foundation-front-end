-- CreateTable
CREATE TABLE "DonationDetails" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "pan_number" TEXT NOT NULL,
    "primary_category" TEXT NOT NULL,
    "sub_category" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pin_number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "razorpay_payment_id" TEXT NOT NULL,
    "razorpay_order_id" TEXT NOT NULL,
    "razorpay_signature_id" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
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
CREATE UNIQUE INDEX "DonationDetails_id_key" ON "DonationDetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_razorpay_payment_id_key" ON "DonationDetails"("razorpay_payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_razorpay_order_id_key" ON "DonationDetails"("razorpay_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_razorpay_signature_id_key" ON "DonationDetails"("razorpay_signature_id");

-- CreateIndex
CREATE UNIQUE INDEX "PaymnetStatus_razorpay_order_id_key" ON "PaymnetStatus"("razorpay_order_id");

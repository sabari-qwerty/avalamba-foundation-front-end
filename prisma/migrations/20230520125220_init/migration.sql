/*
  Warnings:

  - A unique constraint covering the columns `[razorpay_payment_id]` on the table `donationDetails` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[razorpay_order_id]` on the table `donationDetails` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[razorpay_signature_id]` on the table `donationDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "donationDetails_razorpay_payment_id_key" ON "donationDetails"("razorpay_payment_id");

-- CreateIndex
CREATE UNIQUE INDEX "donationDetails_razorpay_order_id_key" ON "donationDetails"("razorpay_order_id");

-- CreateIndex
CREATE UNIQUE INDEX "donationDetails_razorpay_signature_id_key" ON "donationDetails"("razorpay_signature_id");

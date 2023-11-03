-- CreateTable
CREATE TABLE "DonationDetails" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "pan_number" TEXT NOT NULL,
    "primary_category" TEXT NOT NULL,
    "sub_category" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "pin_number" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "marchantUserId" TEXT NOT NULL,
    "merchantTransactionId" TEXT NOT NULL,

    CONSTRAINT "DonationDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_id_key" ON "DonationDetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_marchantUserId_key" ON "DonationDetails"("marchantUserId");

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_merchantTransactionId_key" ON "DonationDetails"("merchantTransactionId");

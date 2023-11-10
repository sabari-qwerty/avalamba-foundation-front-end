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
    "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3),

    CONSTRAINT "DonationDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentCard" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "merchantTransactionId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "responseCode" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "cardType" TEXT NOT NULL,
    "pgTransactionId" TEXT NOT NULL,
    "bankTransactionId" TEXT NOT NULL,
    "pgAuthorizationCode" TEXT NOT NULL,
    "arn" TEXT NOT NULL,
    "bankId" TEXT NOT NULL,
    "brn" TEXT NOT NULL,

    CONSTRAINT "PaymentCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentUPI" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "merchantTransactionId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "responseCode" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "utr" TEXT NOT NULL,

    CONSTRAINT "PaymentUPI_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NetBanKing" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "merchantId" TEXT NOT NULL,
    "merchantTransactionId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "responseCode" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "pgTransactionId" TEXT NOT NULL,
    "pgServiceTransactionId" TEXT NOT NULL,
    "bankTransactionId" TEXT NOT NULL,
    "backId" TEXT NOT NULL,

    CONSTRAINT "NetBanKing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_id_key" ON "DonationDetails"("id");

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_marchantUserId_key" ON "DonationDetails"("marchantUserId");

-- CreateIndex
CREATE UNIQUE INDEX "DonationDetails_merchantTransactionId_key" ON "DonationDetails"("merchantTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentCard_id_key" ON "PaymentCard"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentCard_merchantTransactionId_key" ON "PaymentCard"("merchantTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentCard_transactionId_key" ON "PaymentCard"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymentUPI_id_key" ON "PaymentUPI"("id");

-- CreateIndex
CREATE UNIQUE INDEX "NetBanKing_id_key" ON "NetBanKing"("id");

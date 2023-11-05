-- CreateTable
CREATE TABLE "PaymnetStatus" (
    "id" TEXT NOT NULL,
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

    CONSTRAINT "PaymnetStatus_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PaymnetStatus_id_key" ON "PaymnetStatus"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PaymnetStatus_merchantTransactionId_key" ON "PaymnetStatus"("merchantTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymnetStatus_transactionId_key" ON "PaymnetStatus"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "PaymnetStatus_pgTransactionId_key" ON "PaymnetStatus"("pgTransactionId");

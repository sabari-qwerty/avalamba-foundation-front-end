-- AlterTable
ALTER TABLE "DonationDetails" ADD COLUMN     "createAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateAt" TIMESTAMP(3);

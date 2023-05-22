/*
  Warnings:

  - You are about to drop the column `currancy` on the `donationDetails` table. All the data in the column will be lost.
  - Added the required column `currency` to the `donationDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "donationDetails" DROP COLUMN "currancy",
ADD COLUMN     "createdAt" TIMESTAMP(3),
ADD COLUMN     "currency" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3);

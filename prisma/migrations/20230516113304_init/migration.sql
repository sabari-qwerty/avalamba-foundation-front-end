/*
  Warnings:

  - Added the required column `eamil` to the `donationDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "donationDetails" ADD COLUMN     "eamil" TEXT NOT NULL;

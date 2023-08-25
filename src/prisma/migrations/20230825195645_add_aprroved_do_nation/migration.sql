/*
  Warnings:

  - You are about to drop the column `wasPaid` on the `Donation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "wasPaid",
ADD COLUMN     "approved" BOOLEAN NOT NULL DEFAULT false;

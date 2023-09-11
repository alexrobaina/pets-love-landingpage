/*
  Warnings:

  - You are about to drop the column `paymentId` on the `Donation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[preferenceId]` on the table `Donation` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Donation_paymentId_key";

-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "paymentId",
ADD COLUMN     "preferenceId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Donation_preferenceId_key" ON "Donation"("preferenceId");

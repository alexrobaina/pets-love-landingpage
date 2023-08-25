/*
  Warnings:

  - You are about to drop the column `enabled` on the `Donation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Donation" DROP COLUMN "enabled",
ADD COLUMN     "order" SERIAL NOT NULL,
ADD COLUMN     "wasPaid" BOOLEAN NOT NULL DEFAULT false;

/*
  Warnings:

  - You are about to drop the `Recipient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `to` to the `Mailing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Recipient" DROP CONSTRAINT "Recipient_mailingId_fkey";

-- AlterTable
ALTER TABLE "public"."Mailing" ADD COLUMN     "to" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."Recipient";

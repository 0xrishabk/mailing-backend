/*
  Warnings:

  - You are about to drop the `Mailing` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Recipient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Recipient" DROP CONSTRAINT "Recipient_mailingId_fkey";

-- DropTable
DROP TABLE "public"."Mailing";

-- DropTable
DROP TABLE "public"."Recipient";

-- CreateTable
CREATE TABLE "public"."Mail" (
    "id" SERIAL NOT NULL,
    "subject" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "isDraft" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Mail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_MailContact" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_MailContact_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_MailContact_B_index" ON "public"."_MailContact"("B");

-- AddForeignKey
ALTER TABLE "public"."_MailContact" ADD CONSTRAINT "_MailContact_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_MailContact" ADD CONSTRAINT "_MailContact_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Mail"("id") ON DELETE CASCADE ON UPDATE CASCADE;

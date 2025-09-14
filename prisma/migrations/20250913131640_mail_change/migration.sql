/*
  Warnings:

  - You are about to drop the column `isDraft` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Mail` table. All the data in the column will be lost.
  - You are about to drop the `ContactManagement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactStudents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactTeachers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContactManagementFaculties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContactTeachersBatches` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ContactTeachersFaculties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_MailContact` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."ContactManagement" DROP CONSTRAINT "ContactManagement_contactId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ContactStudents" DROP CONSTRAINT "ContactStudents_batchId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ContactStudents" DROP CONSTRAINT "ContactStudents_contactId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ContactStudents" DROP CONSTRAINT "ContactStudents_facultyId_fkey";

-- DropForeignKey
ALTER TABLE "public"."ContactTeachers" DROP CONSTRAINT "ContactTeachers_contactId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ContactManagementFaculties" DROP CONSTRAINT "_ContactManagementFaculties_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ContactManagementFaculties" DROP CONSTRAINT "_ContactManagementFaculties_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ContactTeachersBatches" DROP CONSTRAINT "_ContactTeachersBatches_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ContactTeachersBatches" DROP CONSTRAINT "_ContactTeachersBatches_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ContactTeachersFaculties" DROP CONSTRAINT "_ContactTeachersFaculties_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ContactTeachersFaculties" DROP CONSTRAINT "_ContactTeachersFaculties_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_MailContact" DROP CONSTRAINT "_MailContact_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_MailContact" DROP CONSTRAINT "_MailContact_B_fkey";

-- AlterTable
ALTER TABLE "public"."Mail" DROP COLUMN "isDraft",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "public"."Token" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Token_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "public"."ContactManagement";

-- DropTable
DROP TABLE "public"."ContactStudents";

-- DropTable
DROP TABLE "public"."ContactTeachers";

-- DropTable
DROP TABLE "public"."_ContactManagementFaculties";

-- DropTable
DROP TABLE "public"."_ContactTeachersBatches";

-- DropTable
DROP TABLE "public"."_ContactTeachersFaculties";

-- DropTable
DROP TABLE "public"."_MailContact";

-- CreateTable
CREATE TABLE "public"."MailRecipient" (
    "id" SERIAL NOT NULL,
    "mailId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "MailRecipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_ContactBatch" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ContactBatch_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_ContactFaculty" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ContactFaculty_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ContactBatch_B_index" ON "public"."_ContactBatch"("B");

-- CreateIndex
CREATE INDEX "_ContactFaculty_B_index" ON "public"."_ContactFaculty"("B");

-- AddForeignKey
ALTER TABLE "public"."MailRecipient" ADD CONSTRAINT "MailRecipient_mailId_fkey" FOREIGN KEY ("mailId") REFERENCES "public"."Mail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactBatch" ADD CONSTRAINT "_ContactBatch_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Batch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactBatch" ADD CONSTRAINT "_ContactBatch_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactFaculty" ADD CONSTRAINT "_ContactFaculty_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Contact"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactFaculty" ADD CONSTRAINT "_ContactFaculty_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Faculty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

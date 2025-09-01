/*
  Warnings:

  - The primary key for the `ContactManagement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `ContactManagement` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `ContactManagement` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `ContactManagement` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ContactManagement` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `ContactManagement` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ContactManagement` table. All the data in the column will be lost.
  - The primary key for the `ContactStudents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `ContactStudents` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `ContactStudents` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `ContactStudents` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ContactStudents` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `ContactStudents` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ContactStudents` table. All the data in the column will be lost.
  - The primary key for the `ContactTeachers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `ContactTeachers` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `ContactTeachers` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `ContactTeachers` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `ContactTeachers` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `ContactTeachers` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ContactTeachers` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `Mailing` table. All the data in the column will be lost.
  - You are about to drop the `_ContactManagementBatches` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contactId` to the `ContactManagement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactId` to the `ContactStudents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactId` to the `ContactTeachers` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."ContactType" AS ENUM ('GENERAL', 'STUDENT', 'TEACHER', 'MANAGEMENT');

-- DropForeignKey
ALTER TABLE "public"."_ContactManagementBatches" DROP CONSTRAINT "_ContactManagementBatches_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ContactManagementBatches" DROP CONSTRAINT "_ContactManagementBatches_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ContactManagementFaculties" DROP CONSTRAINT "_ContactManagementFaculties_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ContactTeachersBatches" DROP CONSTRAINT "_ContactTeachersBatches_B_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ContactTeachersFaculties" DROP CONSTRAINT "_ContactTeachersFaculties_A_fkey";

-- AlterTable
ALTER TABLE "public"."ContactManagement" DROP CONSTRAINT "ContactManagement_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "phone",
DROP COLUMN "updatedAt",
ADD COLUMN     "contactId" INTEGER NOT NULL,
ADD CONSTRAINT "ContactManagement_pkey" PRIMARY KEY ("contactId");

-- AlterTable
ALTER TABLE "public"."ContactStudents" DROP CONSTRAINT "ContactStudents_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "phone",
DROP COLUMN "updatedAt",
ADD COLUMN     "contactId" INTEGER NOT NULL,
ADD CONSTRAINT "ContactStudents_pkey" PRIMARY KEY ("contactId");

-- AlterTable
ALTER TABLE "public"."ContactTeachers" DROP CONSTRAINT "ContactTeachers_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "email",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "phone",
DROP COLUMN "updatedAt",
ADD COLUMN     "contactId" INTEGER NOT NULL,
ADD CONSTRAINT "ContactTeachers_pkey" PRIMARY KEY ("contactId");

-- AlterTable
ALTER TABLE "public"."Mailing" DROP COLUMN "to",
ADD COLUMN     "status" "public"."MailingStatus" NOT NULL DEFAULT 'ERROR';

-- DropTable
DROP TABLE "public"."_ContactManagementBatches";

-- CreateTable
CREATE TABLE "public"."Contact" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "type" "public"."ContactType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Recipient" (
    "id" SERIAL NOT NULL,
    "mailingId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Recipient_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."ContactStudents" ADD CONSTRAINT "ContactStudents_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ContactTeachers" ADD CONSTRAINT "ContactTeachers_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ContactManagement" ADD CONSTRAINT "ContactManagement_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "public"."Contact"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Recipient" ADD CONSTRAINT "Recipient_mailingId_fkey" FOREIGN KEY ("mailingId") REFERENCES "public"."Mailing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactTeachersBatches" ADD CONSTRAINT "_ContactTeachersBatches_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."ContactTeachers"("contactId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactTeachersFaculties" ADD CONSTRAINT "_ContactTeachersFaculties_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."ContactTeachers"("contactId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactManagementFaculties" ADD CONSTRAINT "_ContactManagementFaculties_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."ContactManagement"("contactId") ON DELETE CASCADE ON UPDATE CASCADE;

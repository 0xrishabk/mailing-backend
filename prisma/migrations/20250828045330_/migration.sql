-- CreateEnum
CREATE TYPE "public"."EmployeeStatus" AS ENUM ('INACTIVE', 'ACTIVE', 'LEFT', 'ON_BREAK');

-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('STUDENT', 'TEACHER', 'MANAGEMENT', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."MailingStatus" AS ENUM ('SENT', 'ERROR');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "permission" INTEGER NOT NULL DEFAULT 1,
    "role" "public"."Role" NOT NULL DEFAULT 'STUDENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Batch" (
    "id" SERIAL NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "Batch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Faculty" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Faculty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ContactStudents" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "facultyId" INTEGER NOT NULL,
    "batchId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactStudents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ContactTeachers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" "public"."EmployeeStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactTeachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ContactManagement" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "status" "public"."EmployeeStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContactManagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Mailing" (
    "id" SERIAL NOT NULL,
    "replyTo" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Mailing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Recipient" (
    "id" SERIAL NOT NULL,
    "mailingId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "status" "public"."MailingStatus" NOT NULL DEFAULT 'ERROR',

    CONSTRAINT "Recipient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Token" (
    "token" TEXT NOT NULL,
    "isValid" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."_ContactTeachersBatches" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ContactTeachersBatches_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_ContactManagementBatches" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ContactManagementBatches_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_ContactTeachersFaculties" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ContactTeachersFaculties_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_ContactManagementFaculties" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ContactManagementFaculties_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Batch_year_key" ON "public"."Batch"("year");

-- CreateIndex
CREATE UNIQUE INDEX "Token_token_key" ON "public"."Token"("token");

-- CreateIndex
CREATE INDEX "_ContactTeachersBatches_B_index" ON "public"."_ContactTeachersBatches"("B");

-- CreateIndex
CREATE INDEX "_ContactManagementBatches_B_index" ON "public"."_ContactManagementBatches"("B");

-- CreateIndex
CREATE INDEX "_ContactTeachersFaculties_B_index" ON "public"."_ContactTeachersFaculties"("B");

-- CreateIndex
CREATE INDEX "_ContactManagementFaculties_B_index" ON "public"."_ContactManagementFaculties"("B");

-- AddForeignKey
ALTER TABLE "public"."ContactStudents" ADD CONSTRAINT "ContactStudents_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "public"."Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ContactStudents" ADD CONSTRAINT "ContactStudents_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "public"."Batch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Recipient" ADD CONSTRAINT "Recipient_mailingId_fkey" FOREIGN KEY ("mailingId") REFERENCES "public"."Mailing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactTeachersBatches" ADD CONSTRAINT "_ContactTeachersBatches_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Batch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactTeachersBatches" ADD CONSTRAINT "_ContactTeachersBatches_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."ContactTeachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactManagementBatches" ADD CONSTRAINT "_ContactManagementBatches_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Batch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactManagementBatches" ADD CONSTRAINT "_ContactManagementBatches_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."ContactManagement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactTeachersFaculties" ADD CONSTRAINT "_ContactTeachersFaculties_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."ContactTeachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactTeachersFaculties" ADD CONSTRAINT "_ContactTeachersFaculties_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Faculty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactManagementFaculties" ADD CONSTRAINT "_ContactManagementFaculties_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."ContactManagement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ContactManagementFaculties" ADD CONSTRAINT "_ContactManagementFaculties_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Faculty"("id") ON DELETE CASCADE ON UPDATE CASCADE;

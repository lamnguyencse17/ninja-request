/*
  Warnings:

  - You are about to drop the column `postId` on the `Attachment` table. All the data in the column will be lost.
  - You are about to drop the column `questionTypeId` on the `Submission` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[organizationId,userId]` on the table `OrganizationMember` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `QuestionType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `answerId` to the `Attachment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdById` to the `Attachment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_questionTypeId_fkey";

-- DropIndex
DROP INDEX "Attachment_postId_idx";

-- AlterTable
ALTER TABLE "Attachment" DROP COLUMN "postId",
ADD COLUMN     "answerId" TEXT NOT NULL,
ADD COLUMN     "createdById" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "questionTypeId";

-- CreateIndex
CREATE INDEX "Attachment_answerId_idx" ON "Attachment"("answerId");

-- CreateIndex
CREATE INDEX "Attachment_submissionId_idx" ON "Attachment"("submissionId");

-- CreateIndex
CREATE INDEX "Form_createdById_idx" ON "Form"("createdById");

-- CreateIndex
CREATE INDEX "Form_organizationId_idx" ON "Form"("organizationId");

-- CreateIndex
CREATE INDEX "Organization_ownerId_idx" ON "Organization"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "OrganizationMember_organizationId_userId_key" ON "OrganizationMember"("organizationId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionType_name_key" ON "QuestionType"("name");

-- CreateIndex
CREATE INDEX "Submission_formId_idx" ON "Submission"("formId");

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attachment" ADD CONSTRAINT "Attachment_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

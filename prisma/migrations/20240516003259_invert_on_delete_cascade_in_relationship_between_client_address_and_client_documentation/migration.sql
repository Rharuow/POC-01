/*
  Warnings:

  - Made the column `clientId` on table `Address` required. This step will fail if there are existing NULL values in that column.
  - Made the column `clientId` on table `Document` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_documentId_fkey";

-- AlterTable
ALTER TABLE "Address" ALTER COLUMN "clientId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Document" ALTER COLUMN "clientId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `categoryId` on the `CategoriesProducts` table. All the data in the column will be lost.
  - Added the required column `categoryName` to the `CategoriesProducts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoriesProducts" DROP CONSTRAINT "CategoriesProducts_categoryId_fkey";

-- AlterTable
ALTER TABLE "CategoriesProducts" DROP COLUMN "categoryId",
ADD COLUMN     "categoryName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CategoriesProducts" ADD CONSTRAINT "CategoriesProducts_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "Category"("name") ON DELETE CASCADE ON UPDATE CASCADE;

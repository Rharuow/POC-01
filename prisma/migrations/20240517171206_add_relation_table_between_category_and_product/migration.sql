/*
  Warnings:

  - You are about to drop the `_CategoryToProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToProduct" DROP CONSTRAINT "_CategoryToProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToProduct" DROP CONSTRAINT "_CategoryToProduct_B_fkey";

-- DropTable
DROP TABLE "_CategoryToProduct";

-- CreateTable
CREATE TABLE "CategoriesProducts" (
    "categoryId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "CategoriesProducts_pkey" PRIMARY KEY ("categoryId","productId")
);

-- AddForeignKey
ALTER TABLE "CategoriesProducts" ADD CONSTRAINT "CategoriesProducts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesProducts" ADD CONSTRAINT "CategoriesProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

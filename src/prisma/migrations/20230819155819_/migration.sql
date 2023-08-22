-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "redirect" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "peaks" TEXT[],

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

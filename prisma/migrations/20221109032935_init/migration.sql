-- CreateTable
CREATE TABLE "Foods" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unit_price" INTEGER NOT NULL,

    CONSTRAINT "Foods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "food_id" INTEGER NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Menu_food_id_key" ON "Menu"("food_id");

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_food_id_fkey" FOREIGN KEY ("food_id") REFERENCES "Foods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

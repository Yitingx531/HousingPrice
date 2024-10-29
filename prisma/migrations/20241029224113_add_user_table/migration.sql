-- CreateTable
CREATE TABLE "property"."HouseDetails" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" INTEGER NOT NULL,
    "abbreviatedAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathrooms" INTEGER NOT NULL,
    "livingArea" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "hiResImageLink" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "responsivePhotos" JSONB NOT NULL,

    CONSTRAINT "HouseDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property"."PriceHistory" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "houseId" INTEGER NOT NULL,

    CONSTRAINT "PriceHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property"."User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PriceHistory_houseId_idx" ON "property"."PriceHistory"("houseId");

-- AddForeignKey
ALTER TABLE "property"."PriceHistory" ADD CONSTRAINT "PriceHistory_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "property"."HouseDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

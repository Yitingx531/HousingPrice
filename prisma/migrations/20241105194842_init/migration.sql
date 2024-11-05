-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "property";

-- CreateTable
CREATE TABLE "property"."Property" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bathrooms" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "homeStatus" TEXT NOT NULL,
    "homeType" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "isUnmappable" BOOLEAN NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "livingArea" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "lotAreaUnit" TEXT NOT NULL,
    "lotAreaValue" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "priceForHDP" DOUBLE PRECISION NOT NULL,
    "rentZestimate" DOUBLE PRECISION NOT NULL,
    "state" TEXT NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "taxAssessedValue" DOUBLE PRECISION NOT NULL,
    "zestimate" DOUBLE PRECISION NOT NULL,
    "zipcode" TEXT NOT NULL,
    "zpid" INTEGER NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property"."HouseDetails" (
    "id" TEXT NOT NULL,
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
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "houseId" TEXT NOT NULL,

    CONSTRAINT "PriceHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "property"."User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Property_zpid_key" ON "property"."Property"("zpid");

-- CreateIndex
CREATE INDEX "PriceHistory_houseId_idx" ON "property"."PriceHistory"("houseId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "property"."User"("email");

-- AddForeignKey
ALTER TABLE "property"."PriceHistory" ADD CONSTRAINT "PriceHistory_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "property"."HouseDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "property";

-- CreateTable
CREATE TABLE "property"."Property" (
    "id" SERIAL NOT NULL,
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

-- CreateIndex
CREATE UNIQUE INDEX "Property_zpid_key" ON "property"."Property"("zpid");

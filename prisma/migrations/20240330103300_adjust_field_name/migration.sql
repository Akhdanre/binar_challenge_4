/*
  Warnings:

  - You are about to drop the column `destinationAccountId` on the `transaction` table. All the data in the column will be lost.
  - You are about to drop the column `sourceAccountId` on the `transaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[destination_account_id]` on the table `transaction` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `destination_account_id` to the `transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `source_account_id` to the `transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_destinationAccountId_fkey";

-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_sourceAccountId_fkey";

-- DropIndex
DROP INDEX "transaction_destinationAccountId_key";

-- AlterTable
ALTER TABLE "transaction" DROP COLUMN "destinationAccountId",
DROP COLUMN "sourceAccountId",
ADD COLUMN     "destination_account_id" INTEGER NOT NULL,
ADD COLUMN     "source_account_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "transaction_destination_account_id_key" ON "transaction"("destination_account_id");

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_source_account_id_fkey" FOREIGN KEY ("source_account_id") REFERENCES "bankAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_destination_account_id_fkey" FOREIGN KEY ("destination_account_id") REFERENCES "bankAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

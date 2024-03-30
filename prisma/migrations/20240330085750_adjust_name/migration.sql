/*
  Warnings:

  - You are about to drop the `bank_account` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bank_account" DROP CONSTRAINT "bank_account_user_id_fkey";

-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_destinationAccountId_fkey";

-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_sourceAccountId_fkey";

-- DropTable
DROP TABLE "bank_account";

-- CreateTable
CREATE TABLE "bankAccount" (
    "id" SERIAL NOT NULL,
    "bank_name" VARCHAR(255) NOT NULL,
    "bank_account_number" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "bankAccount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "bankAccount" ADD CONSTRAINT "bankAccount_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_sourceAccountId_fkey" FOREIGN KEY ("sourceAccountId") REFERENCES "bankAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_destinationAccountId_fkey" FOREIGN KEY ("destinationAccountId") REFERENCES "bankAccount"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

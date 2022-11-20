/*
  Warnings:

  - You are about to drop the column `user_id` on the `users` table. All the data in the column will be lost.
  - Added the required column `account_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_user_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "user_id",
ADD COLUMN     "account_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

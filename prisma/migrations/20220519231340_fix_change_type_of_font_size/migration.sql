/*
  Warnings:

  - Changed the type of `fontSize` on the `userSettings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "userSettings" DROP COLUMN "fontSize",
ADD COLUMN     "fontSize" INTEGER NOT NULL;

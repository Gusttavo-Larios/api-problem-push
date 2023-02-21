/*
  Warnings:

  - You are about to drop the `associative_problem_status` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `problem_status_id` to the `Problems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `associative_problem_status` DROP FOREIGN KEY `Associative_Problem_Status_associative_problem_id_fkey`;

-- DropForeignKey
ALTER TABLE `associative_problem_status` DROP FOREIGN KEY `Associative_Problem_Status_associative_problem_status_id_fkey`;

-- AlterTable
ALTER TABLE `problems` ADD COLUMN `problem_status_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `associative_problem_status`;

-- AddForeignKey
ALTER TABLE `Problems` ADD CONSTRAINT `Problems_problem_status_id_fkey` FOREIGN KEY (`problem_status_id`) REFERENCES `Problem_Status`(`problem_status_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

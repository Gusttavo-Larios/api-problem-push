-- CreateTable
CREATE TABLE `Associative_Problem_Status` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `associative_problem_id` INTEGER NOT NULL,
    `associative_problem_status_id` INTEGER NOT NULL,
    `updateAt` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Associative_Problem_Status` ADD CONSTRAINT `Associative_Problem_Status_associative_problem_id_fkey` FOREIGN KEY (`associative_problem_id`) REFERENCES `Problems`(`problem_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Associative_Problem_Status` ADD CONSTRAINT `Associative_Problem_Status_associative_problem_status_id_fkey` FOREIGN KEY (`associative_problem_status_id`) REFERENCES `Problem_Status`(`problem_status_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

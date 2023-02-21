-- CreateTable
CREATE TABLE `Problems` (
    `problem_id` INTEGER NOT NULL AUTO_INCREMENT,
    `problem_description` VARCHAR(191) NOT NULL,
    `problem_why` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`problem_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

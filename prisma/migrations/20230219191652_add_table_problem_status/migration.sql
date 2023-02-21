-- CreateTable
CREATE TABLE `Problem_Status` (
    `problem_status_id` INTEGER NOT NULL AUTO_INCREMENT,
    `problem_status_label` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`problem_status_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

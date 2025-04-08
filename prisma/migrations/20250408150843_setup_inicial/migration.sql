-- CreateTable
CREATE TABLE `Entregador` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Localizacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `latitude` DOUBLE NOT NULL,
    `longitude` DOUBLE NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `entregadorId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rota` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `entregadorId` INTEGER NOT NULL,
    `inicio` VARCHAR(191) NOT NULL,
    `fim` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'em_andamento',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Checkpoint` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `local` VARCHAR(191) NOT NULL,
    `rotaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Localizacao` ADD CONSTRAINT `Localizacao_entregadorId_fkey` FOREIGN KEY (`entregadorId`) REFERENCES `Entregador`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rota` ADD CONSTRAINT `Rota_entregadorId_fkey` FOREIGN KEY (`entregadorId`) REFERENCES `Entregador`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Checkpoint` ADD CONSTRAINT `Checkpoint_rotaId_fkey` FOREIGN KEY (`rotaId`) REFERENCES `Rota`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

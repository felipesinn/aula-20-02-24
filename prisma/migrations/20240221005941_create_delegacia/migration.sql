-- CreateTable
CREATE TABLE "criminosos" (
    "id" UUID NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "sobrenome" VARCHAR(250) NOT NULL,
    "cpf" VARCHAR(100) NOT NULL,

    CONSTRAINT "criminosos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "crimes" (
    "id" UUID NOT NULL,
    "tipo_crime" VARCHAR(100) NOT NULL,
    "criminosoId" UUID NOT NULL,

    CONSTRAINT "crimes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "armas" (
    "id" UUID NOT NULL,
    "nome_arma" VARCHAR(100) NOT NULL,
    "serial" VARCHAR(20) NOT NULL,
    "crimeId" UUID NOT NULL,

    CONSTRAINT "armas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "criminosos_cpf_key" ON "criminosos"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "armas_serial_key" ON "armas"("serial");

-- AddForeignKey
ALTER TABLE "crimes" ADD CONSTRAINT "crimes_criminosoId_fkey" FOREIGN KEY ("criminosoId") REFERENCES "criminosos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "armas" ADD CONSTRAINT "armas_crimeId_fkey" FOREIGN KEY ("crimeId") REFERENCES "crimes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

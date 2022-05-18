-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "trainer" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userSettings" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "colorRed" INTEGER NOT NULL,
    "colorBlue" INTEGER NOT NULL,
    "colorGreen" INTEGER NOT NULL,
    "language" TEXT NOT NULL,
    "fontSize" TEXT NOT NULL,

    CONSTRAINT "userSettings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemons" (
    "id" SERIAL NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "spriteURL" TEXT NOT NULL,
    "blackSpriteURL" TEXT NOT NULL,

    CONSTRAINT "pokemons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "userPokemons" (
    "userId" INTEGER NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "tentatives" INTEGER NOT NULL,

    CONSTRAINT "userPokemons_pkey" PRIMARY KEY ("userId","pokemonId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "userSettings_userId_key" ON "userSettings"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "pokemons_pokemonId_key" ON "pokemons"("pokemonId");

-- AddForeignKey
ALTER TABLE "userSettings" ADD CONSTRAINT "userSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userPokemons" ADD CONSTRAINT "userPokemons_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userPokemons" ADD CONSTRAINT "userPokemons_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "pokemons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

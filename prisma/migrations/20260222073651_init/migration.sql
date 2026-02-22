-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "telegram_user_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_telegram_user_id_key" ON "User"("telegram_user_id");

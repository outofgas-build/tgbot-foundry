-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "telegram_user_id" BIGINT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_telegram_user_id_key" ON "users"("telegram_user_id");

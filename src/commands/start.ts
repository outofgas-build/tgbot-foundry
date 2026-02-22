import type { CommandContext, Context } from "grammy";
import { prisma } from "../lib/prisma";

export const startAction = async (ctx: CommandContext<Context>) => {
  try {
    if (!ctx.from) return;
    const user = await prisma.user.create({
      data: {
        telegram_user_id: BigInt(ctx.from.id),
      },
    });
    console.log(
      JSON.stringify(user, (_, value) => (typeof value === "bigint" ? value.toString() : value)),
    );
    await ctx.reply(
      `👋 Welcome to the <b>Tgbot foundry</b>!\n\nYour Telegram ID: <code>${ctx.from.id}</code>`,
      {
        parse_mode: "HTML",
      },
    );
  } catch (error) {
    console.error("Call start command:", error);
  }
};

import type { CommandContext, Context } from "grammy";

export const startAction = async (ctx: CommandContext<Context>) => {
  try {
    await ctx.reply(`👋 Welcome to the <b>tgbot foundry</b>!\n\n`, {
      parse_mode: "HTML",
    });
  } catch (error) {
    console.error("Call start command:", error);
  }
};

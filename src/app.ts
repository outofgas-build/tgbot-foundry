import * as dotenv from "dotenv";
import { Bot } from "grammy";
import { startAction } from "./commands/start";

dotenv.config();

export const bot = new Bot(process.env.TELEGRAM_BOT_TOKEN || "");

bot.api.setMyCommands([
  { command: "start", description: "Get started" },
]);


bot.command("start", startAction);

bot.start({
  onStart: (info) => {
    console.log("Bot started successfully:", info.username);
  },
});

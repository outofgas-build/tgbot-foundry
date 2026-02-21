# tgbot-foundry

A Telegram bot project with [Bun](https://bun.com), [Vitest](https://vitest.dev), and [Biome](https://biomejs.dev).

## Clone the Repository

```bash
git clone git@github.com:outofgas-build/tgbot-foundry.git
cd tgbot-foundry
```

## Create a New Project from This Template

1. Clone the repository:

   ```bash
   git clone git@github.com:outofgas-build/tgbot-foundry.git my-project
   cd my-project
   ```

2. Remove the existing git history and reinitialize:

   ```bash
   rm -rf .git
   git init
   ```

3. Update `package.json` with your project's name and details.

4. Install dependencies:

   ```bash
   bun install
   ```

5. Start developing!

## Scripts

```bash
bun run start       # Start the bot with bun
bun run test        # Run tests with coverage
bun run test:watch  # Run tests in watch mode
bun run lint        # Lint with Biome
bun run format      # Format with Biome
```

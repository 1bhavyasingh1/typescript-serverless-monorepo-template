## typescript-serverless-monorepo-template

⚡ Boilerplate and Starter for Next.js, Serverless Express, TypeScript, and Prisma in a pnpm Monorepo ⚡

Loosely based off of templates by user [`ixartz`](https://github.com/ixartz). The goal was to basically adapt that to a monorepo approach, and apply the 80/20 rule to limit extra custom tooling to only what's most effective.

### Features

- 🔥 [Serverless framework](https://www.serverless.com)
- 💡 [pnpm](https://pnpm.io/) for first-class monorepo support + faster ops
- ⚡️ [ExpressJS](http://expressjs.com)
- ✅ Type checking [TypeScript](https://www.typescriptlang.org) with strict mode
- 📚 ORM with [Prisma](https://www.prisma.io)
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 👷 Run tests on pull request with GitHub Actions
- 💡 Absolute Imports using @ prefix
- 📖 Local support with Serverless Offline
- ⚙️ Environment variable with Serverless Dotenv
- 🎉 Fast bundler with esbuild
- ✨ HTTP Api instead of API gateway for cost optimization
- 💨 Live reload

**Optional Recommendations:**
- Local GitHub Action Validation w/ [act](https://github.com/nektos/act). The `lint:actions` script in the root directory injects relevant environment variables and runs `act` locally.

### Philosophy

- 🔥 **Sensible Defaults.** We provide sensible, zero-config defaults when it comes to ESLint, Prettier, and TypeScript. We offer easily extensible system (see [this file](https://github.com/aacitelli/typescript-serverless-monorepo-template/blob/main/lib/eslint/index.js), where the Next.js config extends from the base config, for what we mean) for both ESLint and TypeScript.
- 🔥 **Scalable, Futureproof Architecture.** Next.js has an extremely promising future, pnpm scales well as repo size increases, and your backend runs on AWS Lambda for near-infinite scalability that grows with your usage.
- 🔥 **80/20 Rule.** We tried to pick the 20% of best practice tools that give you 80% of the benefit.

### Installation & Setup

This is available as a repository, rather than a template, to allow you to treat this as an "upstream" repo and get future updates. So, run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript.git my-project-name
cd my-project-name
pnpm i
```

The `--depth 1` causes git to only pull down the most recent commit. After all, you don't really care what happens here before the point at which you clone. You'll still be able to get future updates.

Then:

1. `pnpm i` from root to install dependencies
2. Copy every `.env.example` file to `.env` and fill in the values.
3. Add the clientside + serverside environment variables you expect in the Next.js app at `app/client/src/env/schema.mjs`. These are validated via `zod` before builds and runtimes, helping you fail fast.

### Development

You can run locally in development mode with live reload:

```
pnpm dev
```

This uses a pnpm v8.0+ feature where you can select multiple scripts to run via regex. This will run your frontend and backend concurrently. By default, your frontend will run on `http://localhost:3000` and your backend will run on `http://localhost:4000`. 

### File Structure

This folder is a `pnpm` monorepo with the following structure:

```shell
apps/ # All actual apps; the frontend and backend
  frontend/ # Next.js frontend
  backend/ # Serverless Express backend
lib/ # All shared code; installable via `pnpm i -D @lib/<package-name>`
  db/ # Contains the Prisma client
  eslint/ # Contains extensible ESLint config files; includes a Base and a Next.js config
  tsconfig/ # Contains extensible TypeScript config files; includes a Base and a Next.js config
  types/ # For TypeScript types / Zod types that you want shared across apps
.eslintrc.cjs # Causes the "default" eslint config to be the base config from `lib/eslint/`
.gitignore # One .gitignore kept for the repo, for ease of maintenance and deduplication
.npmrc # Opinionated best practice suggestions for pnpm
package.json # Also contains dev tooling settings
package-lock.json
pnpm-workspace.yaml # Tells pnpm where to look for packages
renovate.json # Automatic dependency bump PRs; dependabot doesn't support pnpm
```

### Contributing

As an open source project working with newer technologies, we will happily take contributions. There are two distinct ways to contribute:

- 🔥 **Build features.** Pick an issue, assign yourself to it, fork the repository, then pull request your changes in.
- 🔥 **Create Issues.** Half the struggle when it comes to building new features is figuring out how to improve. By making suggestions and submitting bugs, it helps us be better!

### Sponsor Us

This project will always be free and open source. If we saved you some time and effort, please consider contributing to the developers via the "Sponsor this project" menu on the GitHub repo!

### Star History

<iframe style="width:100%;height:auto;min-width:600px;min-height:400px;" src="https://star-history.com/embed?secret=Z2hwXzNTQ1lJekZXU0p1dk9NdFlXdk95dlFkVkdkQ01KZjF1ejV2MA==#aacitelli/typescript-serverless-monorepo-template&Date" frameBorder="0"></iframe>
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

### Philosophy

- 🔥 **Lightly Opinionated Best Practice.**  We make some decisions for you to save you time and more quickly get you to production.
- 🔥 **Scalable, Futureproof Architecture.** Next.js has an extremely promising future, pnpm scales well as repo size increases, and your backend runs on AWS Lambda for near-infinite scalability that grows with your usage.
- 🔥 **80/20 Rule.** We tried to pick the 20% of best practice tools that give you 80% of the benefit.

### Installation

This is available as a repository, rather than a template, to allow you to treat this as an "upstream" repo and get future updates. So, run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript.git my-project-name
cd my-project-name
pnpm i
```

The `--depth 1` causes git to only pull down the most recent commit. After all, you don't really care what happens here before the point at which you clone. You'll still be able to get future updates.

### Development

You can run locally in development mode with live reload:

```
pnpm dev
```

This will run your frontend and backend concurrently. By default, your frontend will run on `http://localhost:3000` and your backend will run on `http://localhost:4000`. 

### Contributing

As an open source project working with newer technologies, we will happily take contributions. There are two distinct ways to contribute:

- 🔥 **Build features.** Pick an issue, assign yourself to it, fork the repository, then pull request your changes in.
- 🔥 **Create Issues.** Half the struggle when it comes to building new features is figuring out how to improve. By making suggestions and submitting bugs, it helps us be better!

### Sponsor Us

This project will always be free and open source. If we saved you some time and effort, please consider contributing to the developers via the "Sponsor this project" menu on the GitHub repo!
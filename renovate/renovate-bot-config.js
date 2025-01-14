module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  extends: [
    "config:recommended",
    ":semanticCommits",
    ":semanticCommitTypeAll(chore)",
    ":dependencyDashboard",
  ],
  hostRules: [
    // Github
    {
      matchHost: "github.com",
      token: process.env.GITHUB_COM_TOKEN,
    },
    // Github API
    {
      matchHost: "api.github.com",
      token: process.env.GITHUB_COM_TOKEN,
    },
    // Github NPM registry
    {
      matchHost: "npm.pkg.github.com",
      token: process.env.GITHUB_COM_TOKEN,
    },
  ],
  labels: ["renovate"],
  prHourlyLimit: 0,
  prConcurrentLimit: 10,
}

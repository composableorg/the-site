const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
      "@storybook/addon-postcss",
  ],
  "framework": "@storybook/react",
  "webpackFinal": async config => {
    config.resolve.plugins.push(new TsconfigPathsPlugin())
    return config
  }
}

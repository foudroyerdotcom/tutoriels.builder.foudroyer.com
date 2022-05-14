const path = require(`path`)
const manifest = require("./cms/configuration/manifest.json")
const configuration = require("./cms/configuration/license.json")
const robots = require("./cms/configuration/robots.json")
const { getConfig } = require("@foudroyer/purity/dist/gatsby/getConfig")

module.exports = getConfig({
  manifest,
  domain: configuration.domain,
  robots: robots.rules,
  basePath: path.resolve(__dirname),
})

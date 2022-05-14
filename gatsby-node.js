const path = require("path")
const configuration = require("./cms/configuration/license.json")

const { createPages } = require("@foudroyer/purity/dist/gatsby/createPages")
const { onCreateNode } = require("@foudroyer/purity/dist/gatsby/onCreateNode")
const {
  createSchemaCustomization,
} = require("@foudroyer/purity/dist/gatsby/createSchemaCustomization")

exports.createPages = createPages({
  configuration: {
    domain: configuration.domain,
    license: configuration.license,
  },
  basePath: path.resolve(__dirname),
})

exports.onCreateNode = onCreateNode

exports.createSchemaCustomization = createSchemaCustomization

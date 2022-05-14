const {
  checkIfCanUpgrade,
} = require("@foudroyer/purity/dist/scripts/check-if-can-upgrade")
const configuration = require("../cms/configuration/license.json")

checkIfCanUpgrade(configuration)

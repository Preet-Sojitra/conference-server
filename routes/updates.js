const express = require("express")
const router = express.Router()

const {getAllUpdates, postUpdate} = require("../controllers/updates")

router.route("/updates").get(getAllUpdates).post(postUpdate)

module.exports = router

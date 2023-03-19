const express = require("express")
const router = express.Router()

const {
  getAllUpdates,
  postUpdate,
  getUpdate,
  editUpdate,
  deleteUpdate,
} = require("../controllers/updates")

router.route("/updates").get(getAllUpdates).post(postUpdate)
router
  .route("/updates/:id")
  .patch(editUpdate)
  .get(getUpdate)
  .delete(deleteUpdate)

module.exports = router

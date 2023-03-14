const Updates = require("../models/updates")

const getAllUpdates = async (req, res) => {
  const allUpdates = await Updates.find({})
  res.status(200).json(allUpdates)
}

const postUpdate = async (req, res) => {
  // console.log(req.body)
  const {update} = req.body
  if (!update) {
    return res.status(400).json({msg: "Please provide update value"})
  }

  const postedUpdate = await Updates.create(req.body)
  res.status(200).json({msg: "Update posted successfully", postedUpdate})
}

module.exports = {getAllUpdates, postUpdate}

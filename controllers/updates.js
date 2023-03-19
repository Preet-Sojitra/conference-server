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
  res.status(201).json({msg: "Update posted successfully", postedUpdate})
}

const getUpdate = async (req, res) => {
  const update = await Updates.find({_id: req.params.id})

  res.status(200).json(update[0])
}

const editUpdate = async (req, res) => {
  // console.log(req.params.id)
  // console.log(req.body)

  const update = await Updates.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  res.status(200).json(update)
}

const deleteUpdate = async (req, res) => {
  const update = await Updates.findOneAndDelete({_id: req.params.id})

  res.status(200).json({msg: "Deleted successfully"})
}

module.exports = {
  getAllUpdates,
  postUpdate,
  getUpdate,
  editUpdate,
  deleteUpdate,
}

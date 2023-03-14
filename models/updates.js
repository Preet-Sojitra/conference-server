const mongoose = require("mongoose")

const updatesSchema = new mongoose.Schema({
  update: {
    type: String,
    required: [true, "Please provide update value"],
  },
})

module.exports = mongoose.model("Updates", updatesSchema)

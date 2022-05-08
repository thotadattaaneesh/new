const mongoose = require("mongoose");

const restaurentSchema = new mongoose.Schema({
  
  restaurentName: {
    type: Number,
    required: [true, "Please enter the username"],
    maxLength: 10,
  },
  places: [
    {
      type: String,
      maxlength: 10,
    }
  ]
});

module.exports = mongoose.model("Restaurent", restaurentSchema);

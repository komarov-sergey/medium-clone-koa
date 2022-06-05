const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema(
  {
    name: String,
  },
  { collection: "tags", timestamps: true }
);

TagSchema.methods.toJSON = function (tag) {
  return {
    name: this.name,
  };
};

module.exports = mongoose.model("Tag", TagSchema);

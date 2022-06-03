const Tag = require("./model");

async function getTag() {
  const tags = await Tag.find({});

  return {
    tags: tags.map((tag) => tag.toJSON()),
  };
}

async function postTags() {
  const tag = await Tag.findOneAndUpdate(
    { name: "string3" },
    { name: "string3" },
    {
      new: true,
      upsert: true,
    }
  );

  return {
    tag: tag.toJSON(),
  };
}

module.exports = {
  getTag,
  postTags,
};

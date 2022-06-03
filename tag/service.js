const Tag = require("./model");

async function getTag() {
  const tags = await Tag.find({});

  return {
    tags: tags.map((tag) => tag.toJSON()),
  };
}

async function postTags({ name }) {
  const tag = await Tag.findOneAndUpdate(
    { name },
    { name },
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

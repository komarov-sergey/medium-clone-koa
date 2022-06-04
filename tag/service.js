const Tag = require("./model");

async function getTag(ctx) {
  let tags;
  try {
    tags = await Tag.find({});
    // throw new Error("Test err");
  } catch (e) {
    ctx.status = 422;

    return {
      errors: {
        body: ["Error in getTag()"],
      },
    };
  }

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

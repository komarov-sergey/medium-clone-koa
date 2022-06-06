const Article = require("./model");

async function createArticle(ctx) {
  let article;
  let body = ctx.request.body.article;
  try {
    article = await Article.create({ ...body });
  } catch (e) {
    ctx.status = 422;

    return {
      errors: {
        body: ["Error in createArticle()"],
      },
    };
  }

  return {
    article: article.toCreateJSON(),
  };
}

async function getArticle(ctx) {
  let article;
  let slug = ctx.params.slug;
  try {
    article = await Article.findOne({ slug });
  } catch (e) {
    ctx.status = 422;

    return {
      errors: {
        body: ["Error in getArticle()"],
      },
    };
  }

  return {
    article: article.toGetJSON(),
  };
}

module.exports = { createArticle, getArticle };

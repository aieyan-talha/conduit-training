const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const Article = require("../models/Article");
const User = require("../models/User");

//Allows user to create a new article
const createArticle = (data, user) =>
  new Promise((resolve, reject) => {
    const newArticle = new Article({
      title: data.title,
      subtitle: data.subtitle,
      text: data.text,
      tags: data.tags,
      user: user.id
    });

    newArticle.save().then(article => {
      resolve(article);
    });
  });

//Get all article function
const getArticle = () =>
  new Promise((resolve, reject) => {
    Article.find()
      .sort({ date: -1 })
      .then(article => resolve(article))
      .catch(err => {
        reject({ noarticlesfound: "No articles found!" });
      });
  });

//Get a specific article using article id
const getArticleById = data =>
  new Promise((resolve, reject) => {
    Article.findById(data.id)
      .then(article => {
        resolve(article);
      })
      .catch(err => {
        reject({ err: "No article found with the given ID" });
      });
  });

//Get article by user id (not working at the mo)
const getArticleByUserId = data =>
  new Promise((resolve, reject) => {
    Article.findById(data.id)
      .then(article => {
        resolve(article);
      })
      .catch(err => {
        reject({ err: "Not article of the user found" });
      });
  });

//Delete article by id
const deleteArticleById = (data, user) =>
  new Promise((resolve, reject) => {
    Article.findById(data.id)
      .then(article => {
        //Check if authorized
        if (article.user.toString() !== user.id) {
          reject({
            status: 401,
            json: { notauthroized: "User not authorized" }
          });
        }

        //otherwise delete the article
        article.remove().then(() => {
          resolve({ success: true });
        });
      })
      .catch(err => {
        reject({ status: 404, json: { articlenotfound: "Article not found" } });
      });
  });

//Like article by ID
const likeArticleById = (data, user) =>
  new Promise((resolve, reject) => {
    Article.findById(data.id)
      .then(article => {
        if (
          article.likes.filter(like => like.user.toString() === user.id)
            .length > 0
        ) {
          resolve({
            status: 400,
            json: { alreadyliked: "User already liked this article" }
          });
        }

        //Otherwise increment likes by one
        //Add user id to likes array
        article.likes.unshift({ user: user.id });

        article.save().then(article => resolve(article));
      })
      .catch(err => {
        reject({
          status: 404,
          json: { postnotfound: "No post found with the given ID" }
        });
      });
  });

//Unlike article by ID
const unlikeArticleById = (data, user) =>
  new Promise((resolve, reject) => {
    Article.findById(data.id)
      .then(article => {
        if (
          article.likes.filter(like => like.user.toString() === user.id)
            .length === 0
        ) {
          reject({
            status: 400,
            json: { notliked: "You have not liked this article" }
          });
        }

        //Otherwise decrement likes by one
        //remove user id to likes array

        //Get index from array
        const removeIndex = article.likes
          .map(item => item.user.toString())
          .indexOf(req.user.id);

        article.likes.splice(removeIndex, 1);

        article.save().then(article => resolve(article));
      })
      .catch(err => {
        reject({
          status: 404,
          json: { postnotfound: "None post found with the given ID" }
        });
      });
  });

//Comment on article
const commentOnArticle = (params, data, user) =>
  new Promise((resolve, reject) => {
    Article.findById(params.id)
      .then(article => {
        //Error checking comes here
        const newComment = {
          text: data.text,
          user: user.id
        };

        article.comments.unshift(newComment);

        article.save().then(article => resolve(article));
      })
      .catch(err => {
        reject({ status: 404, json: "Post could not be found" });
      });
  });

// Remove Comment from article
const removeCommentFromArticle = (params, user) =>
  new Promise((resolve, reject) => {
    Article.findById(params.id)
      .then(article => {
        if (
          article.comments.filter(
            comment => comment._id.toString() === params.comment_id
          ).length === 0
        ) {
          reject({
            status: 401,
            json: { nocomment: "Comment does not exist" }
          });
        }

        //Otherwise remove comment
        //Get index from array
        const removeIndex = article.comments
          .map(item => item._id.toString())
          .indexOf(params.comment_id);

        article.comments.splice(removeIndex, 1);

        article.save().then(article => resolve(article));
      })
      .catch(err => {
        reject({ status: 404, json: "Post could not be found" });
      });
  });

module.exports = {
  createArticle,
  getArticle,
  getArticleById,
  getArticleByUserId,
  deleteArticleById,
  likeArticleById,
  unlikeArticleById,
  commentOnArticle,
  removeCommentFromArticle
};

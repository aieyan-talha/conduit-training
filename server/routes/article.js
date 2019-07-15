const express = require("express");
const passport = require("passport");

const router = express.Router();

//Get Services
const articleServices = require("../services/articleServices");

//Get Validation checks
const validateArticleInput = require("../validation/article");

/*
//Testing article route
router.get("/", (req, res) => {
  res.json({ post: "post works!" });
});
*/

//POST
//Private Route
//create new post
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateArticleInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    articleServices.createArticle(req.body, req.user).then(article => {
      res.json(article);
    });
    /*
    .catch(err => {
      res.status(400).json(err);
    });*/
  }
);

//GET
//Public Route
//Get all articles
router.get("/", (req, res) => {
  articleServices
    .getArticle()
    .then(article => {
      res.json(article);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//GET
//Public Route
//Get article by ID
router.get("/:id", (req, res) => {
  articleServices
    .getArticleById(req.params)
    .then(article => {
      res.json(article);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//GET
//Public Route
//Get Article by ID
//Not working at the moment
router.get("/:user_id", (req, res) => {
  articleServices
    .getArticleByUserId(req.params)
    .then(article => {
      res.json(article);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

//DELETE
//Private Route
//Delete Article by ID
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    articleServices
      .deleteArticleById(req.params, req.user)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(err.status).json(err.json);
      });
  }
);

//POST
//Private Route
//Like an Article
router.post(
  "/like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    articleServices
      .likeArticleById(req.params, req.user)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(err.status).json(err.json);
      });
  }
);

//POST
//Private Route
//Un-Like an Article
router.post(
  "/unlike/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    articleServices
      .unlikeArticleById(req.params, req.user)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(err.status).json(err.json);
      });
  }
);

//POST
//Private Route
//Comment on an Article
router.post(
  "/comment/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    articleServices
      .commentOnArticle(req.params, req.body, req.user)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(err.status).json(err.json);
      });
  }
);

//DELETE
//Private Route
//Remove Comment from Article
router.delete(
  "/comment/:id/:comment_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    articleServices
      .removeCommentFromArticle(req.params, req.user)
      .then(response => {
        res.json(response);
      })
      .catch(err => {
        res.status(err.status).json(err.json);
      });
  }
);

module.exports = router;

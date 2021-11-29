const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Property.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "description", "address", "latitude","longitude","event_id","user_id"],
    include: [
      {
        model: Review,
        attributes: ["id", "event_id", "event_like", "review_text", "review_date","user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((propertyData) => {
      const properties = propertyData.map((property) => property.get({ plain: true }));
      res.render("menu", { properties, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
  Property.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "description", "address", "latitude","longitude","event_id","user_id"],
    include: [
      {
        model: Review,
        attributes: ["id", "event_id", "event_like", "review_text", "review_date","user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((propertyData) => {
      if (!propertyData) {
        res.status(404).json({ message: "No property found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render("edit-post", {
        post,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/create/", withAuth, (req, res) => {
  Property.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "description", "address", "latitude","longitude","event_id","user_id"],
    include: [
      {
        model: Review,
        attributes: ["id", "event_id", "event_like", "review_text", "review_date","user_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((propertyData) => {
      const properties = propertyData.map((property) => property.get({ plain: true }));
      res.render("create-property", { properties, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
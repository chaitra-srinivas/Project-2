const router = require("express").Router();
const sequelize = require("../config/connection");
const { Review, User, Property } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);

  Property.findAll({
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
      res.render("homepage", {
        properties,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

router.get("/property/:id", (req, res) => {
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

      const property = propertyData.get({ plain: true });

      res.render("single-property", {
        property,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
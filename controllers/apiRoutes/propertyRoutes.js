const router = require("express").Router();
const { Property } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Property.findAll({})
    .then((propertyData) => res.json(propertyData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  if (req.session) {
    Property.create({
      description: req.body.description,
      address: req.body.address,
      user_id: req.session.user_id,
    })
      .then((propertyData) => res.json(propertyData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete("/:id", withAuth, (req, res) => {
  Property.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((propertyData) => {
      if (!propertyData) {
        res.status(404).json({ message: "No property found with this id" });
        return;
      }
      res.json(propertyData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

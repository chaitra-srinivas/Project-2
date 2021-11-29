const router = require("express").Router();
const { User, Property, Review } = require("../models");
const withAuth = require("../utils/auth");

// GET all properties on loading the homepage/sidebar

router.get("/", async (req, res) => {
    try {
      const propertyData = await Property.findAll({
        include: [
          {
            model: Review,
            attributes: ["id", "event_like", "review_text", "review_date", "user_id"],
            
          },
          {
              model: User,
              attributes: ["name"]
          }
        ],
      });
  
      // serialize data so the template can read it
      const properties = propertyData.map((property) => {
        return property.get({ plain: true });
      });
  
      console.log(properties);
      // pass serialized data and session flag into template
      res.render("homepage", {
        properties,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


  module.exports = router;

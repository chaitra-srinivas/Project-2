const router = require("express").Router();
const userRoutes = require("./userRoutes");
const propertyRegister = require("./propertyRegister");
const propertySearch = require("./propertySearch");

router.use("/users", userRoutes);
/* router.use("/register", propertyRegister);
router.use("/search", propertySearch); */

module.exports = router;
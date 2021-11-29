const router = require("express").Router();

const apiRoutes = require("./apiRoutes");
const homeRoutes = require("./homeRoutes.js");
const dashboardRoutes = require("./menuRoutes.js");

router.use("/apiRoutes", apiRoutes);
router.use("/", homeRoutes);
router.use("/menu", menuRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

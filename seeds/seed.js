const seedUsers = require("./userData");
const seedProperties = require("./propertyData");
const seedEvent = require("./eventData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedProperties();
  await seedEvent();
  process.exit(0);
};

seedAll();
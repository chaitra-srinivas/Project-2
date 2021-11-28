const sequelize = require('../config/connection');
const {User, Property, Review} = require('../models');

const userData = require('./userData.json');
const propertyData = require('./propertyData.json');

const seedDatabase = async ()=>{
    await sequelize.sync({force:true});

    const users = await User.bulkCreate(userData,{
        individualHooks: true,
        returning: true

    });

    const propertys = await Property.bulkCreate(propertyData);

    process.exit(0);
};

seedDatabase();


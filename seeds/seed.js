const sequelize = require('../config/connection');
const {User, Property, Review, Event} = require('../models');

const userData = require('./userData.json');
const propertyData = require('./propertyData.json');
const eventData = require('./eventData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async ()=>{
    await sequelize.sync({force:true});

    const users = await User.bulkCreate(userData,{
        individualHooks: true,
        returning: true

    });

    const propertys = await Property.bulkCreate(propertyData);
    const events = await Event.bulkCreate(eventData);
    const reviews = await Review.bulkCreate(reviewData);

    process.exit(0);
};

seedDatabase();


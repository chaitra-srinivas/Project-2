const User = require('./User');
const Property = require('./Property');
const Review = require('./Review');
const Event = require('./Event');
const Events = require('./Events');

User.hasOne(Property,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Property.belongsTo(User,{
    foreignKey: 'user_id',
    
});

Property.hasMany(Event,{
    foreignKey: 'event_id',

});

Event.belongsTo(Property,{
    foreignKey: 'event_id',
});

Event.hasMany(Review,{
    foreignKey: 'event_id',
});

Event.hasOne(Events,{
    foreignKey: 'event_id',
})

Events.belongsTo(Event,{
    foreignKey: 'event_id',
})

Review.belongsTo(Event,{
    foreignKey: 'event_id',
});

User.hasMany(Review,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(User,{
    foreignKey: 'user_id',
});

module.exports = {User, Property, Review,Event,Events};
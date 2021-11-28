const User = require('./User');
const Property = require('./Property');
const Review = require('./Review');
const Event = require('./Event');
const EventDetails = require('./EventDetails');

User.hasOne(Property,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Property.belongsTo(User,{
    foreignKey: 'user_id',
    
});

/* Property.hasMany(Event,{
    foreignKey: 'event_id',

});

Event.belongsTo(Property,{
    foreignKey: 'event_id',
});

Event.hasMany(Review,{
    foreignKey: 'event_id',
});

Event.hasOne(EventDetails,{
    foreignKey: 'event_id',
})

EventDetails.belongsTo(Event,{
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
*/


Property.hasMany(Review,{
    foreignKey: 'property_id',
    onDelete: 'CASCADE',
});

Review.belongsTo(Property,{
    foreignKey: 'property_id',
});
module.exports = {User, Property, Review,Event,EventDetails};
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class EventDetails extends Model{}

EventDetails.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
   
    property_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'property',
            key: 'id',
        },
    },
   
   event_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'event',
            key: 'id',
        },
    },


    event_start_dt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    event_end_dt:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },

    event_start_time:{
        type: DataTypes.INTEGER,
        
    },

    event_end_time:{
        type: DataTypes.INTEGER,
        
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'eventdetails',
});

module.exports = EventDetails;
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Property extends Model{}

Property.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
   
    description:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    address:{
        type: DataTypes.STRING,
        allowNull: false,
    },

    latitude:{
        type: DataTypes.DECIMAL(11,7),
        allowNull: false,

    },

    longitude:{
        type: DataTypes.DECIMAL(11,7),
        allowNull: false,
        
    },

  /*   event_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'event',
            key: 'id'
        },
    },
 */
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'user',
            key: 'id',
        },
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'property',
});

module.exports = Property;
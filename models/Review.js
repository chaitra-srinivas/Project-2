const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model{}

Review.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    event_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'event',
            key: 'id'
        },
    },

    event_like:{
        type: DataTypes.BOOLEAN,
    },
   
    review_text:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    review_date:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
   
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'user',
            key: 'id',
        },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
});

module.exports = Review;
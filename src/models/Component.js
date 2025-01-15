const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Component = sequelize.define('Component',{
    idComponent:{type:DataTypes.STRING, autoIncrement:true, allowNull:false},
    name:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.STRING, allowNull:false},
    quantity:{type:DataTypes.INTEGER, allowNull:false},
    requestComponentId:{type:DataTypes.INTEGER, allowNull:false},
});

module.exports = Component;
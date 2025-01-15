const {DataTypes} = require("sequelize");
const sequelize = require('../config/database');

const Request =  sequelize.define('Request',{
    idRequest: {type:DataTypes.INTEGER, autoIncrement:true,allowNull:false},
    status: {type:DataTypes.BOOLEAN,allowNull:false, defaultValue:false},
    priority:{type:DataTypes.INTEGER,allowNull:false},
    applicantId: {type:DatatTypes.INTEGER, allowNull:false},
    technicianId:{type:DatatTypes.INTEGER, allowNull:false},
});


module.exports = Request;
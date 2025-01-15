const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Applicant = sequelize.define('Applicant',{
    idApplicant: {type:DataTypes.INTEGER, autoIncrement:true, allowNull:false,unique:true},
    name: {type: DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false, unique:true},
    telephone:{type:DataTypes.STRING, allowNull:false},
});

module.exports = Applicant;
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Applicant = sequelize.define('Applicant',{
    idApplicant: {type:DataTypes.INTEGER, autoIncrement:true, allowNull:false,unique:true},
    nome: {type: DataTypes.STRING, allowNull:false},
    email:{type:DataTypes.STRING, allowNull:false, unique:true},
    telefone:{type:DataTypes.STRING, allowNull:false},
    password:{type:DataTypes.STRING, allowNull:false},
});

module.exports = Applicant;
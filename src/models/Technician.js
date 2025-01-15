const {DatatTypes} = require('sequelize');
const sequelize  =  require('../config/database');

const Applicant = sequelize.define('Applicant',{
    idApplicant: {type:DataTypes.INTEGER,autoIncrement:true, allowNull:false, unique:true},
    name: {type:DatatTypes.STRING, allowNull:false},
    specialty:{type:DataTypes.STRING, allowNull:fasle},
    avaliability:{type:DatatTypes.STRING, allowNull:false}
});


module.exports = Applicant;
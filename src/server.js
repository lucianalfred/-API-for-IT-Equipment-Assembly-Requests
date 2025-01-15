const app = require('./app');
const sequelize = require('./config/database');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;

sequelize.sync({force: false}).then(() => {
    console.log("Banco de dados sincronizado");
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
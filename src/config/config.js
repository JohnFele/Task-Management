require('dotenv').config();

const config = {
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: parseInt(process.env.JWT_EXPIRES_IN)
}
const DBURL = `mongodb+srv://${config.USER}:${config.PASSWORD}@crudtasks.f6map2j.mongodb.net/CRUD-Tasks`

module.exports = { config, DBURL };

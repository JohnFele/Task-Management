require('dotenv').config();

const config = {
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES_IN: parseInt(process.env.JWT_EXPIRES_IN)
}

module.exports = config;

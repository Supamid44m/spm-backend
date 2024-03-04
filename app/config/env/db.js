const mongoose = require('mongoose');
const DB = process.env.DBURL

const startDB = async () => {
    try {
        console.log(`Connected to MongoDB ${DB}`);
    } catch (err) {
        console.error('MongoDB connection error:', err);
    }
}


module.exports = startDB;
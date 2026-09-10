require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const connectToDb = require('./db/db');

const userRoutes = require('./routes/user.route');
const captainRoutes = require('./routes/captain.route');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

const app = express();

// Connect MongoDB
connectToDb();

// CORS
app.use(cors());

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies
app.use(cookieParser());

// Test route
app.get('/', (req, res) => {
    res.status(200).send('UberApp Backend is running');
});

// Routes
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        message: 'Internal Server Error'
    });
});

module.exports = app;
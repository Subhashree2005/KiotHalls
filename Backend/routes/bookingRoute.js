const express = require('express');
const { createbooking } = require('../controllers/bookingController');

const router = express.Router();
router.route('/booking-rooms').post(createbooking);

module.exports=router;
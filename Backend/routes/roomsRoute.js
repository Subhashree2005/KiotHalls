const express = require('express');
const { getRooms } = require('../controllers/roomController');
const router = express.Router();
router.route('/rooms').get(getRooms);

/*
const Room = require('../models/room'); // Fix the syntax error here

router.get("/getallrooms", async (req, res) => {
    try {
        const room = await Room.find({});
        return res.json({ room});
    } catch (error) {
        return res.status(400).json({ message: error.message }); // Ensure error.message is used for clarity
    }
});
*/
module.exports = router;
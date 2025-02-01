const roomModel = require('../models/room');

exports.getRooms = async (req,res,next) => {
   const rooms = await roomModel.find({});
       res.json({
        sucess: true,
        rooms
    })
}
const roomModel = require('../models/room');

exports.getRooms = async (req,res,next) => {

  const rooms = await roomModel.find({});
       res.json({
        sucess: true,
        message:'Get rooms Working!'//room
    
    })
}
// get single room API-/api/rooms/room:id
exports.getSingleRoom = (req,res,next) => {
console.log(req.params.id,'ID'),

        res.json({
         sucess: true,
         message:'Get Single Product working!'
     })
 }




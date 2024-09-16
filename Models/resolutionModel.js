const mongoose  = require('mongoose');

const ResolutionSchema  = new mongoose.Schema({
    height :{
        type:Number,
        default : 0
    },
    width : {
        type : Number,
        default : 0
    }
})

module.exports = ResolutionSchema
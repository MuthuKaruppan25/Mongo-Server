const mongoose = require("mongoose");
const ResolutionSchema = require("./resolutionModel")
const dataModel = new mongoose.Schema({
    screenResolution: {
        type: ResolutionSchema,
        default: {}
    },
    mouseSpeed: {
        type: Number, 
        default: 0,
    },
    mouseAngle: {
        type: Number, 
        default: 0,
    },
    mouseTremors : {
        type: Number, 
        default: 0,
    },
    mouseJitters:{
        type: Number, 
        default: 0,
    },
    xVariance :{
        type: Number, 
        default: 0,
    },
    yVariance : {
        type: Number, 
        default: 0,
    },
    totalVariance :{
        type: Number, 
        default: 0,
    },
    keyHoldDuration :{
        type: Number, 
        default: 0,
    },
    keyHoldStd : {
        type: Number, 
        default: 0,
    },
    clickIntervalAvg: {
        type: Number,
        default: 0,
    },
    scrollSpeedAvg: {
        type: Number,
        default: 0,
    },
    keyStrokeInterval : {
        type: Number, 
        default: 0,
    },
    avgTimeSpentField: {
        type: Number, 
        default: 0,
    },
    averageTimeInterval : {
        type: Number, 
        default: 0,
    },
    backspaceCount : {
        type: Number, 
        default: 0,
    },
    repeatedKeyCount : {
        type: Number, 
        default: 0,
    },
    averageTimeSpent: {
        type: Number,
        default: 0,
    },
    useragent: {
        type: String,
        default: ""
    },
    referrer: {
        type: String,
        default: ""
    },
    plugins: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model("BotData", dataModel);
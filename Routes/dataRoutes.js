const express = require('express');
const router = express.Router();
const Data = require("../Models/dataSchema");
const botData = require("../Models/botSchema");
router.post('/data',async(req,res)=>{
    try {
        const {mouseSpeed,mouseAngle,mouseTremors,mouseJitters,xVariance,yVariance,totalVariance,keyHoldDuration,keyHoldStd,clickIntervalAvg,scrollSpeedAvg,keyStrokeInterval,avgTimeSpentField,averageTimeInterval,backspaceCount,repeatedKeyCount,averageTimeSpent,useragent,referrer,plugins} = req.body;
        console.log(req.body);
        const newData = new Data(req.body);
        console.log(newData);
        await newData.save();
        res.status(201).json({ message: 'Data received and saved successfully.' });
      } catch (error) {
        res.status(500).json({ message: 'Error saving data.', error });
      }
})

router.post('/botdata',async(req,res)=>{
  try {
      const {mouseSpeed,mouseAngle,mouseTremors,mouseJitters,xVariance,yVariance,totalVariance,keyHoldDuration,keyHoldStd,clickIntervalAvg,scrollSpeedAvg,keyStrokeInterval,avgTimeSpentField,averageTimeInterval,backspaceCount,repeatedKeyCount,averageTimeSpent,useragent,referrer,plugins} = req.body;
      console.log(req.body);
      const newData = new botData(req.body);
      console.log(newData);
      await newData.save();
      res.status(201).json({ message: 'Data received and saved successfully.' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving data.', error });
    }
})
module.exports  = router
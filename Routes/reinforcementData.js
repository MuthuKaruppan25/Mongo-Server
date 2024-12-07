const express = require('express');
const router = express.Router();
const Data = require("../Models/reinforcementSchema");

router.post('/reinforcement-data', async (req, res) => {
    try {
        const features = req.body.features; // Ensure the client sends the data as { features: Array }

        // Map array elements to schema fields
        const reinforcementData = new ReinforcementData({
            mouseSpeed: features[0],
            mouseAngle: features[1],
            mouseTremors: features[2],
            mouseJitters: features[3],
            xVariance: features[4],
            yVariance: features[5],
            totalVariance: features[6],
            keyHoldDuration: features[7],
            keyHoldStd: features[8],
            clickIntervalAvg: features[9],
            scrollSpeedAvg: features[10],
            keyStrokeInterval: features[11],
            avgTimeSpentField: features[12],
            averageTimeInterval: features[13],
            backspaceCount: features[14],
            repeatedKeyCount: features[15],
        });
        await reinforcementData.save();

        res.status(201).json({ message: 'Data saved successfully!' });
    } catch (err) {
        console.error("Error saving data:", err);
        res.status(500).json({ message: 'An error occurred while saving data.' });
    }
});

module.exports  = router
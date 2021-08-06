const express = require('express');
const router = express.Router();
const { Rectangle } = require('./models');
const { checkHaveOverlap, getCurrentDate } = require('./service.js');

router.post('/',async function(req, res) {
    let mainRectangle = req.body.main;
    let inputRectangles = req.body.input;

    for (let rectangle of inputRectangles){
        let haveOverlap = await checkHaveOverlap(mainRectangle,rectangle).catch((error)=>{
            console.error('error on check overlap rectangle : ',error)
        })
        if(haveOverlap){
            rectangle['time'] = getCurrentDate()
            await Rectangle.create(rectangle);
        }
    }
    return res.status(200).json({
        status: 'successful',
        message: 'rectangle saved!'
    });
})

router.get('/',async function(req, res) {
    const rectangles = (!req.params.all)?
        (await Rectangle.findAll()):
        (await Rectangle.findAll({ offset:req.params.offset, limit: req.params.limit }))
    return res.status(200).json({
        status: 'successful',
        data: rectangles
    });
})

module.exports = router;
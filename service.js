function getMaxPoint(minPoint,width,height){
    return {
        x: minPoint.x + width,
        y: minPoint.y + height
    }
}
const checkHaveOverlap = async function (main, rectangleInput){
    let minMainPoint = {x:main.x,y:main.y}
    let maxMainPoint = getMaxPoint(minMainPoint,main.width,main.height)

    let minRectanglePoint = {x:rectangleInput.x,y:rectangleInput.y}
    let maxRectanglePoint = getMaxPoint(minRectanglePoint,rectangleInput.width,rectangleInput.height)

    if (minMainPoint.x == maxMainPoint.x || minMainPoint.y == maxMainPoint.y 
        || minRectanglePoint.x == maxRectanglePoint.x || minRectanglePoint.y == maxRectanglePoint.y) {
        // the line cannot have positive overlap
        return false;
    }
     
    // If one rectangle is on left side of other
    if (minMainPoint.x >= maxRectanglePoint.x || minRectanglePoint.x >= maxMainPoint.x){
        return false;
    }
     
    // If one rectangle is above other
    if (maxMainPoint.y <= minRectanglePoint.y || maxRectanglePoint.y <= minMainPoint.y){
        return false;
    }
    return true;
}

const getCurrentDate = function(){
    let date_ob = new Date();
    // current date
    // adjust 0 before single digit date
    let date = ("0" + date_ob.getDate()).slice(-2);

    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

    // current year
    let year = date_ob.getFullYear();

    // current hours
    let hours = date_ob.getHours();

    // current minutes
    let minutes = date_ob.getMinutes();

    // current seconds
    let seconds = date_ob.getSeconds();

    let dateTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
   
    // prints date & time in YYYY-MM-DD HH:MM:SS format
    return dateTime
}

module.exports = {
    checkHaveOverlap,
    getCurrentDate
}
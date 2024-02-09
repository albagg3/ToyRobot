const {RED, RESET, GREEN} = require('./colors.js') 
const  ToyRobot = require('./toyRobot.js');


const isValidCoordinate = (coordinate) =>{
    if (coordinate ==='NORTH'|| coordinate ==='SOUTH' || coordinate ==='EAST'|| coordinate ==='WEST')
        return true;
    else
        return false;
} 

const isOutOfTheBoard = (x, y) =>{
    if(x >= 5 || y >= 5 || x < 0 || y < 0)
        return true;
    return false
}

const isOtherValidInput = (input) => {
    if(input === "MOVE" || input === "LEFT" || input === "RIGHT" || input === "REPORT")
        return true;
    return false;
}


//This function checks if the input is valid.
//If the input is valid creates a robot with the data provided
const isValidPlaceInput = (input, robot) =>{
    if(robot && isOtherValidInput(input.trim()))
    {
        return robot;
    }
    if (input && !input.startsWith("PLACE") )
    {
        console.log(`${RED}The input is incorrect, it should be: PLACE X, Y, F${RESET}`);
    }
    else
    {
        const cleanInput = input.replace("PLACE", "").trim()
        const coordinatesArr = cleanInput.split(",");
        if(coordinatesArr.length != 3)
        {
            console.log(`${RED}The input is incorrect${RESET}`);
        }
        else if( isNaN(parseInt(coordinatesArr[0])) || isNaN(parseInt(coordinatesArr[1])))
        {
            
            console.log(`${RED}X and Y should be numbers and lower than 5${RESET}`);
        }
        else if(isOutOfTheBoard(parseInt(coordinatesArr[0]),parseInt(coordinatesArr[1])))
        {
            console.log(`${RED}X and Y should be between 0 and 4${RESET}`);
        }
        else if(!isValidCoordinate(coordinatesArr[2].trim()))
        {
            console.log(`${RED}F should be: 'NORTH' 'SOUTH' 'WEST' or 'EAST' ${RESET}`);
        }
        else
        {
            if(robot)
                delete robot;
            robot =  new ToyRobot(parseInt(coordinatesArr[0]),parseInt(coordinatesArr[1]), coordinatesArr[2].trim())           
            robot.place();
            
        }
    }
    return robot;
}

module.exports = {
    isValidPlaceInput,
    isOtherValidInput,
    isOutOfTheBoard,
    isValidCoordinate
}
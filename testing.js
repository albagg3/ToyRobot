const {RED, RESET, GREEN} = require('./colors.js') 
const { isValidPlaceInput,
        isOtherValidInput,
        isOutOfTheBoard,
        isValidCoordinate } = require('./parsingFunctions')


const testIsValidCoordinate = () =>{
    console.log('NORTH  :',isValidCoordinate('NORTH') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('SOUTH  :',isValidCoordinate('SOUTH') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('WEST   :',isValidCoordinate('WEST') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('EAST   :',isValidCoordinate('EAST') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('EASTT  :',isValidCoordinate('EASTT') === false ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log(1,"     :",isValidCoordinate(1) === false ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
}

const testIsValidPlaceInput = () =>{
    console.log("1.The input does not start with PLACE")
    console.log('1,2, NORTH PLACE       :',isValidPlaceInput("1,2, NORTH PLACE",undefined) === undefined ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log("2.The input is not well formatted more data than X,Y,NORTH")
    console.log('PLACE 1,2,3,4          :',isValidPlaceInput('NORTH PLACE 1,2,3,4', undefined) === undefined ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log("3.The coordinates should be numbers")
    console.log('PLACE a,2,NORTH        :',isValidPlaceInput('PLACE a,2,NORTH') === undefined ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log("4.The coordinates are out of the board in the moment  placement")
    console.log('PLACE 1,5,NORTH',isValidPlaceInput('PLACE 1,5,NORTH') === undefined ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
}

const testIsOutOfTheBoard = () =>{
    console.log('5,1    :',isOutOfTheBoard('5','1') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('1,5    :',isOutOfTheBoard('1', '5') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('1,2    :',isOutOfTheBoard('1','2') === false ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('-1,2   :',isOutOfTheBoard('-2', '1') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
}

const testIsOtherValidInput = () =>{
    console.log('MOVE  :',isOtherValidInput('MOVE') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('LEFT  :',isOtherValidInput('LEFT') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('RIGHT   :',isOtherValidInput('RIGHT') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('REPORT   :',isOtherValidInput('REPORT') === true ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
    console.log('REPORTT   :',isOtherValidInput('REPORTT') === false ? `${GREEN}RIGHT${RESET}` : `${RED}WRONG${RESET}`)
}

console.log("---------------------------------------------------")
console.log("Testing isValidCoordinate")
console.log("---------------------------------------------------")
testIsValidCoordinate();
console.log("---------------------------------------------------")
console.log("Testing isValidPlaceInput")
console.log("---------------------------------------------------")
testIsValidPlaceInput();
console.log("---------------------------------------------------")
console.log("Testing isOutOfTheBoard")
console.log("---------------------------------------------------")
testIsOutOfTheBoard()
console.log("---------------------------------------------------")
console.log("Testing isOtherValidInput")
console.log("---------------------------------------------------")
testIsOtherValidInput()

const { isValidPlaceInput } = require('./parsingFunctions.js');
const {RED, RESET, GREEN} = require('./colors.js') 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//INSTRUCTIONS
console.log(`${GREEN}There is a 5 x 5 board, Please follow the instructions\n1.First place the robot:${RESET}`);
console.log("PLACE X, Y, F");
console.log(`${GREEN}2.Then move the robot around the 5 x 5 board:${RESET}`);
console.log("PLACE X, Y, F\nMOVE\nLEFT\nRIGHT\nREPORT");

let robot = undefined;
function askForInstruction() {
    rl.question(`${GREEN}Please write an intruction or write EXIT to leave: ${RESET}`, (input) => {
        if (input === 'EXIT') {
            rl.close();
        } else {
            robot = isValidPlaceInput(input, robot)
            if (robot)
            {
                if(input === "MOVE")
                    robot.move();
                else if(input === "LEFT")
                    robot.left();
                else if(input === "RIGHT")
                    robot.right();
                else if(input === "REPORT")
                    robot.report();
                else if (!input.startsWith("PLACE"))
                    console.log(`${RED}The input is incorrect${RESET}`);
            }
// Uncomment these lines if you want to see location and orientation of the robot in the console
            // console.log(robot?.board);
            // console.log(robot?.orientation);
            askForInstruction();
        }
    });
}

askForInstruction();


## ToyRobot

There is a board and a robot. The board size is 5 x 5.<br/>
First thing you need to place the robot in the board.<br/>
The instructions are written in the terminal and you will need to write the instructions in the terminal.<br/>
* The first instruction should be:<br/>
**PLACE X, Y, F** <br/>
X  is the coordinate x in the board from 0 to 4<br/>
Y  is the coordinate y in the board from 0 to 4<br/>
F  the robot will be facing these orientations (NORTH, SOUTH, EAST, WEST)<br/>
* Once you have placed the robot you can give the next instructions:<br/>
**PLACE X, Y, F** ->this will place the robot in another place<br/>
**MOVE**        -> This will move the robot one position forward following the robot orientation.<br/>
**LEFT**        -> This will rotate the robot and change the orientation to the left.<br/>
**RIGHT**       -> This will rotate the robot and change the orientation to the right.<br/>
**REPORT**      -> This will print the current coordinates and orientation of the robot.<br/>

In case the instruction is not written correctly you will receive a message.
If you want to move the robot out of the board you will receive a message and the robot won't move.

There is a testing file, testing the parsing functions you can try it doing: ```node testing.js ```

# Try it
* Clone the repository
* To execute the program please type:```node game.js``` and follow the instructions
* To exit the program type: EXIT
* If you want to see a graphic representation of the board and the robot and know the current orientation, please uncomment lines 38 and 39 from game.js

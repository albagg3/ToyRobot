const {RED, RESET, GREEN} = require('./colors.js') 

class ToyRobot {
    constructor(x, y, orientation) 
    {
        this.posX = x;
        this.posY = 4 - y;
        this.orientation = orientation;
        this.board = [];
    }

    left() 
    {
        if(this.orientation === 'NORTH')
            this.orientation = 'WEST';
        else if(this.orientation === 'WEST')
            this.orientation = 'SOUTH';
        else if(this.orientation === 'SOUTH')
            this.orientation = 'EAST';
        else if(this.orientation === 'EAST')
            this.orientation = 'NORTH';
        return ;
    }

    right()
    {
        if(this.orientation === 'NORTH')
            this.orientation = 'EAST';
        else if(this.orientation === 'EAST')
            this.orientation = 'SOUTH';
        else if(this.orientation === 'SOUTH')
            this.orientation = 'WEST';
        else if(this.orientation === 'WEST')
            this.orientation = 'NORTH';
        return ;
    }

    move() 
    {
        if(this.orientation === 'NORTH' && this.posY > 0)
            this.posY -= 1;
        else if(this.orientation === 'EAST' && this.posX < 4)
            this.posX += 1;
        else if(this.orientation === 'SOUTH' && this.posY < 4)
            this.posY += 1;
        else if(this.orientation === 'WEST' && this.posX > 0)
            this.posX -= 1;
        else
        {
            console.log(`${RED}That movement is out of the board${RESET}`)
            return ;
        }
        this.place();
        return ;
    }

    place()
    {
        for (let j = 0; j < 5; j++) {
            this.board[j] = [];
            for(let i = 0 ; i < 5; i++)
            {
                if (j === this.posY && i === this.posX)
                    this.board[j][i] = 'X';
                else
                    this.board[j][i] = '';
            }
        }
        return ;
    }
    
    report()
    {
        console.log(`${this.posX},${this.posY},${this.orientation}`)
        return ;
    }
};

module.exports = ToyRobot
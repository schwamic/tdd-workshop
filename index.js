class Cell {
    constructor(state=true, neighbours=[0,0,0,0,0,0,0,0]) {
        this.state = state;
        this.neighbours = neighbours
    }

    isAlive(){
        return this.state;
    }
}


module.exports = {
    Cell
};
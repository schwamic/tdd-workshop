class Cell {
    constructor(state=1, neighbours=[0,0,0,0,0,0,0,0]) {
        this.state = state;
        this.neighbours = neighbours
    }

    _getAmountOfNeighbours(){
        return this.neighbours.reduce((prev, curr) => prev + curr)
    }

    isAlive(){
        return !!this.state;
    }

    willSurvive(){
        const activeNeighbours = this._getAmountOfNeighbours()

        // Death Cases
        if(activeNeighbours < 2 || activeNeighbours > 3){
            return false;
        }

        return true;
    }
}

module.exports = {
    Cell
};

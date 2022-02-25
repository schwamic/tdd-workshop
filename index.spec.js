const { Cell } = require('./index');

test('Create cell', () => {
    const cell = new Cell();
    expect(cell.isAlive()).toBe(true);
});

test('Cell will die if less then two neighbours', () => {
    const neighbours = [0,0,0,0,1,0,0,0];
    const cell = new Cell(true, neighbours);
    expect(cell.willSurvive()).toBe(false);
});

test('Cell will die if more then three neighbours', () => {
    const neighbours = [1,0,1,0,1,1,0,0];
    const cell = new Cell(true, neighbours);
    expect(cell.willSurvive()).toBe(false);
});

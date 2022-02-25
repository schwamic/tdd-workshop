const { Cell } = require('./index');

test('Create default cell', () => {
    const cell = new Cell();
    expect(cell.state).toBe(true);
});

test('Create dead cell', () => {
    const cell = new Cell(false);
    expect(cell.state).toBe(false);
});

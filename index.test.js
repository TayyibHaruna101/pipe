const generateRandomNumber = require('./index');

test('generates a random number between 1 and 100', () =>{
    const randomNumber = generateRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(100);
}
);
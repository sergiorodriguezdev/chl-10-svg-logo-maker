// Import Square class
const Square = require('../lib/square.js');

// Test suite for Square class
describe('Square', () => {
    const square = new Square('red', '');
    // Test case for constructor
    describe('constructor', () => {
        it('should assign color value correctly when using keyword', () => {
            expect(square.color).toEqual('red');
        })

        it('should set default textX and textY values correctly', () => {
            expect(`textX = ${square.textX}, textY = ${square.textY}`).toEqual('textX = 150, textY = 125');
        })
    })

    //Test case for render method
    describe('render', () => {
        it('should render a SVG square with the correct color', () => {
            expect(square.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />');
        })
    })

    // Test case for using hex values
    describe('hex values', () => {
        let squareHex = new Square('hex', '808000');
        it('should assign color value correctly when using a hex value', () => {
            expect(squareHex.color).toEqual('#808000');
        })

        it('should assign color value correctly when using a hex value with a leading #', () => {
            let squareHex2 = new Square('hex', '#808000');
            expect(squareHex2.color).toEqual('#808000');
        })

        it('should render a SVG square with the correct hex color', () => {
            expect(squareHex.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="#808000" />');
        })        
    })
});
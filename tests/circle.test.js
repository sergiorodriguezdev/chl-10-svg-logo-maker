// Import Circle class
const Circle = require('../lib/circle.js');

// Test suite for Circle class
describe('Circle', () => {
    const circle = new Circle('red', '');
    // Test case for constructor
    describe('constructor', () => {
        it('should assign color value correctly when using keyword', () => {
            expect(circle.color).toEqual('red');
        })

        it('should set default textX and textY values correctly', () => {
            expect(`textX = ${circle.textX}, textY = ${circle.textY}`).toEqual('textX = 150, textY = 125');
        })
    })

    //Test case for render method
    describe('render', () => {
        it('should render a SVG circle with the correct color', () => {
            expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
        })
    })

    // Test case for using hex values
    describe('hex values', () => {
        let circleHex = new Circle('hex', '808000');
        it('should assign color value correctly when using a hex value', () => {
            expect(circleHex.color).toEqual('#808000');
        })

        it('should assign color value correctly when using a hex value with a leading #', () => {
            let circleHex2 = new Circle('hex', '#808000');
            expect(circleHex2.color).toEqual('#808000');
        })

        it('should render a SVG circle with the correct hex color', () => {
            expect(circleHex.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#808000" />');
        })        
    })
});
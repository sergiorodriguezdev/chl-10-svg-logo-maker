// Import Triangle class
const Triangle = require('../lib/triangle.js');

// Test suite for Triangle class
describe('Triangle', () => {
    const triangle = new Triangle('red', '');
    // Test case for constructor
    describe('constructor', () => {
        it('should assign color value correctly when using keyword', () => {
            expect(triangle.color).toEqual('red');
        })

        it('should override textX and textY values from parent class correctly', () => {
            expect(`textX = ${triangle.textX}, textY = ${triangle.textY}`).toEqual('textX = 150, textY = 150');
        })
    })

    //Test case for render method
    describe('render', () => {
        it('should render a SVG polygon with the correct color', () => {
            expect(triangle.render()).toEqual('<polygon points="20 180 150 20 280 180" fill="red" />');
        })
    })

    // Test case for using hex values
    describe('hex values', () => {
        let triangleHex = new Triangle('hex', '808000');
        it('should assign color value correctly when using a hex value', () => {
            expect(triangleHex.color).toEqual('#808000');
        })

        it('should assign color value correctly when using a hex value with a leading #', () => {
            let triangleHex2 = new Triangle('hex', '#808000');
            expect(triangleHex2.color).toEqual('#808000');
        })

        it('should render a SVG polygon with the correct hex color', () => {
            expect(triangleHex.render()).toEqual('<polygon points="20 180 150 20 280 180" fill="#808000" />');
        })        
    })
});
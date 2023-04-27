// Import Shape class
const Shape = require('../lib/shape.js');

// Test suite for Shape class
describe('Shape', () => {
    const shape = new Shape('red', '');
    // Test case for constructor
    describe('constructor', () => {
        it('should assign color value correctly when using keyword', () => {
            expect(shape.color).toEqual('red');
        })

        it('should set default textX and textY values correctly', () => {
            expect(`textX = ${shape.textX}, textY = ${shape.textY}`).toEqual('textX = 150, textY = 125');
        })
    })

    // Test case for render method
    describe('render', () => {
        it('should throw an error', () => {
            expect(() => shape.render()).toThrow('Child class must implement render() method.');
        })
    })

    // Test case for using hex values
    describe('hex values', () => {
        it('should assign color value correctly when using a hex value', () => {
            let shapeHex = new Shape('hex', '808000');
            expect(shapeHex.color).toEqual('#808000');
        })
    
        it('should assign color value correctly when using a hex value with a leading #', () => {
            let shapeHex = new Shape('hex', '#808000');
            expect(shapeHex.color).toEqual('#808000');
        })
    })
});
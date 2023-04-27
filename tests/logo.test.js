// Import shape classes
const Logo = require('../lib/logo.js');
const Circle = require('../lib/circle.js');
const Triangle = require('../lib/triangle.js');
const Square = require('../lib/square.js');

// Test suite for Logo class
describe('Logo', () => {
    // Test case for shape object and its type
    describe('shape object', () => {
        it('should throw an error when an unsupported shape value is passed in constructor', () => {
            expect(() => new Logo('ABC', 'white', '', 'star', 'red', '')).toThrow('Unsupported shape.');
        })

        it('should create a shape object of Circle type', () => {
            const circleLogo = new Logo('ABC', 'white', '', 'circle', 'red', '');
            expect(circleLogo.shape instanceof Circle).toEqual(true);
        })

        it('should create a shape object of Triangle type', () => {
            const triangleLogo = new Logo('ABC', 'white', '', 'triangle', 'red', '');
            expect(triangleLogo.shape instanceof Triangle).toEqual(true);
        })

        it('should create a shape object of Square type', () => {
            const squareLogo = new Logo('ABC', 'white', '', 'square', 'red', '');
            expect(squareLogo.shape instanceof Square).toEqual(true);
        })
    })

    const logo = new Logo('ABC', 'white', '', 'circle', 'red', '');
    // Test case for constructor
    describe('constructor', () => {
        it('should assign text value correctly', () => {
            expect(logo.text).toEqual('ABC');
        })

        it('should assign text color value correctly when using keyword', () => {
            expect(logo.color).toEqual('white');
        })
    })

    // Test case for render method
   describe('render', () => {
        it('should render a SVG correctly', () => {
            expect(logo.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="red" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
</svg>`);
        })
    })


    // Test case for using hex values as text color
    describe('hex values', () => {
        let logoHex = new Logo('ABC', 'hex', '808000', 'circle', 'red', '');
        it('should assign text color value corectly when using a hex value', () => {
            expect(logoHex.color).toEqual('#808000');
        })

        it('should assign text color value corectly when using a hex value with a leading #', () => {
            let logoHex2 = new Logo('ABC', 'hex', '#808000', 'circle', 'red', '');
            expect(logoHex2.color).toEqual('#808000');
        })

        it('should render a SVG correctly with the correct hex color', () => {
            expect(logoHex.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="red" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="#808000">ABC</text>
</svg>`);
        })
    })
});
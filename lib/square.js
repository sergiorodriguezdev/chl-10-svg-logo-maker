// Import Shape class
const Shape = require('./shape.js');

// Define Square class
//  It's a child class inheriting the Shape class
class Square extends Shape {
    constructor(color, colorHex) {
        super(color, colorHex);
    }

    // Render SVG for square
    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
}

module.exports = Square;
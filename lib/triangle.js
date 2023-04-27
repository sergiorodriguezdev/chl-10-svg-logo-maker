// Import Shape class
const Shape = require('./shape.js');

// Define Triangle class
//  It's a child class inheriting the Shape class
class Triangle extends Shape {
    constructor(color, colorHex) {
        super(color, colorHex);
    }

    // Override preferred X and Y position values for text for Triangle objects
    // These are only used by Logo class
    textX = 150;
    textY = 150;

    // Render SVG for triangle
    //  Define it as a polygon and enter the 3 (x,y) coordinate pairs
    render() {
        return `<polygon points="20 180 150 20 280 180" fill="${this.color}" />`;
    }
}

module.exports = Triangle;
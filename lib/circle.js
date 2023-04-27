// Import Shape class
const Shape = require('./shape.js');

// Define Circle class
//  It's a child class inheriting the Shape class
class Circle extends Shape {
    constructor(color, colorHex) {
        super(color, colorHex);
    }

    // Render SVG for circle
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

module.exports = Circle;
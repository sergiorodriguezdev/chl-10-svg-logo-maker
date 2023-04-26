const Shape = require('shape.js');

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }

    textX = 150;
    textY = 150;

    render() {
        return `<polygon points="20 180 150 20 280 180" fill="${this.color}" />`;
    }
}
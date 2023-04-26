const Circle = require('circle.js');
const Triangle = require('triangle.js');
const Square = require('square.js');


class Logo {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;

        if(textColor.trim()[0] === '#') {
            this.color = textColor.trim();
        } else {
            this.color = `#${textColor.trim()}`;
        }
        
        if(shape === 'circle') {
            this.shape = new Circle(shapeColor);
        } else if(shape === 'triangle') {
            this.shape = new Triangle(shapeColor);
        } else if(shape === 'square') {
            this.shape = new Square(shapeColor);
        } else {
            throw Error('Invalid shape.');
        }
    }

    render() {
        return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${this.shape.render()}
<text x="${this.shape.textX}" y="${this.shape.textY}" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
</svg>
`;
    }
}
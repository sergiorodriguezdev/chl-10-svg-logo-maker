// Import shape modules
const Circle = require('circle.js');
const Triangle = require('triangle.js');
const Square = require('square.js');

// Define Logo class
class Logo {
    // Constructor accepts 6 values
    // text: 3 character text that will be rendered in logo
    // textColor: the color of the text
    // textColorHex: if textColor is 'hex' then this value will be used for the text color instead
    // shape: string representation of the shape
    // shapeColor: the color of the shape
    // shapeColorHex: if shapeColor is 'hex' then this value will be used for the shape color instead
    constructor(text, textColor, textColorHex, shape, shapeColor, shapeColorHex) {
        this.text = text.trim();

        if(textColor === 'hex') {
            // If textColor is 'hex'
            //  Then check if the leading character of textColorHex is #
            //  If it isn't, then prepend the hex value with #
            if(textColorHex.trim()[0] === '#') {
                this.color = textColorHex.trim();
            } else {
                this.color = `#${textColorHex.trim()}`;
            }
        } else {
            // Otherwise, just assign the color keyword to color
            this.color = textColor;
        }
        
        // Instantiate the correct type of shape based on the shape argument
        if(shape === 'circle') {
            this.shape = new Circle(shapeColor, shapeColorHex);
        } else if(shape === 'triangle') {
            this.shape = new Triangle(shapeColor, shapeColorHex);
        } else if(shape === 'square') {
            this.shape = new Square(shapeColor, shapeColorHex);
        } else {
            throw Error('Invalid shape.');
        }
    }

    // Render the entire logo
    //  Use textX and textY values from the shape object for the best placement for the text depending on the shape
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${this.shape.render()}
<text x="${this.shape.textX}" y="${this.shape.textY}" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
</svg>`;
    }
}
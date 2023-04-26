// Define Shape class
class Shape {
    // Constructor accepts 2 values
    // color: the color of the shape
    // colorHex: if color is 'hex' then this value will be used for the shape color instead
    constructor(color, colorHex) {
        if(color === 'hex') {
            // If color is 'hex'
            //  Then check if the leading character of colorHex is #
            //  If it isn't, then prepend the hex value with #
            if(colorHex.trim()[0] === '#') {
                this.color = colorHex.trim();
            } else {
                this.color = `#${colorHex.trim()}`;
            }
        } else {
            // Otherwise, just assign the color keyword to color
            this.color = color;
        }
    }

    // Preferred X and Y position values for text
    // These are only used by Logo class
    textX = 150;
    textY = 125;

    // Render method - throws an error as it must be defined by child class
    render() {
        throw Error('Child class must implement render() method.');
    }
}
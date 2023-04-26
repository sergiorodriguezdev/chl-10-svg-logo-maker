class Shape {
    constructor(color) {
        if(color.trim()[0] === '#') {
            this.color = color.trim();
        } else {
            this.color = `#${color.trim()}`;
        }
    }

    textX = 150;
    textY = 125;

    render() {
        throw Error('Child class must implement render() method.');
    }
}
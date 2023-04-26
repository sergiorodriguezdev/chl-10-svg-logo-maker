// Import inquirer and fs modules
const inquirer = require('inquirer');
const fs = require('fs');

// Arrays of choices
const colors = [
    {
        name: 'Yellow',
        value: 'yellow'
    },
    {
        name: 'Blue',
        value: 'blue'
    },
    {
        name: 'Red',
        value: 'red'
    },
    {
        name: 'Green',
        value: 'green'
    },
    {
        name: 'Purple',
        value: 'purple'
    },
    {
        name: 'Orange',
        value: 'orange'
    },
    {
        name: 'Black',
        value: 'black'
    },
    {
        name: 'White',
        value: 'white'
    },
    {
        name: 'Gray',
        value: 'gray'
    },
    {
        name: 'Hex Value',
        value: 'hex'
    }
];

const shapes = [
    {
        name: 'Circle',
        value: 'circle'
    },
    {
        name: 'Triangle',
        value: 'triangle'
    },
    {
        name: 'Square',
        value: 'square'
    }
];

// Array of questions
const questions = [
    {
        type: 'input',
        message: 'Enter the text for your logo (up to 3 characters):',
        name: 'logoText',
        validate: logoTextValidation
    },
    {
        type: 'list',
        message: 'Select a color for the text or enter a valid hex value:',
        choices: colors,
        name: 'logoTextColor'
    },
    {
        type: 'input',
        message: 'Enter a hex value: #',
        name: 'logoTextColorHex',
        when: answers => answers['logoTextColor'] === 'hex',
        validate: hexValueValidation
    },
    {
        type: 'list',
        message: 'Select a shape for your logo:',
        choices: shapes,
        name: 'logoShape'
    },
    {
        type: 'list',
        message: 'Select a color for the shape or enter a valid hex value:',
        choices: colors,
        name: 'logoShapeColor'
    },
    {
        type: 'input',
        message: 'Enter a hex value: #',
        name: 'logoShapeColorHex',
        when: answers => answers['logoShapeColor'] === 'hex',
        validate: hexValueValidation
    },
];

// Validation functions
// Validate that the text for the logo matches criteria
function logoTextValidation(value) {
    if (!value || value.trim().length === 0) {
        return 'Please enter a response.';
    } else if (value.trim().length > 3) {
        // If input is longer than 3 charactes, reject it
        return 'Please enter a valid response. It can\'t be longer than 3 characters.';
    } else {
        return true;
    }
}

// Validate hex value entered is valid
function hexValueValidation(value) {
    if (!value || value.trim().length === 0) {
        return 'Please enter a response.';
    }

    // Check if value is a valid hex value
    // Code taken from https://linuxhint.com/check-if-string-is-hex-in-javascript/
    const regex = /#?([0-9A-Fa-f]{6})/g;
    if (value.trim().match(regex)) {
        return true;
    } else
    {
        return 'Invalid hex value. Hex values may only contain digits from 0-9 and/or letters A-F.';
    }
}

// Function to start code execution
function run() {
    inquirer.prompt(questions)
    .then(res => console.log(res))
}

module.exports = run;
// Import inquirer and fs modules
const inquirer = require('inquirer');
const fs = require('fs');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const Logo = require('./logo.js');

// constant and global variables
const outputDir = 'examples';

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
        when: answers => answers['logoTextColor'] === 'hex', // Only ask this question when the answer to the previous question is 'hex'
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
        when: answers => answers['logoShapeColor'] === 'hex', // Only ask this question when the answer to the previous question is 'hex'
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
    } else {
        return 'Invalid hex value. Hex values may only contain digits from 0-9 and/or letters A-F.';
    }
}


// Function to save logo to file
function saveLogo(logo) {
    console.log('Generating logo...');

    const filePath = join(__dirname, '..', outputDir); // Generate the file path
    const data = logo.render(); // Call render() method from Logo class

    // Create an output directory if it doesn't exist
    if (!fs.existsSync(filePath)) {
        console.log(`Creating './${outputDir}' directory...`);
        fs.mkdirSync(filePath);
    }

    // Save file
    writeFile(
        join(filePath, logo.fileName), // Specify full file path and file name
        data // Pass output from render() method
    )
        .then(() => console.log(`Logo succesfully created! You can find it here: './${outputDir}/${logo.fileName}'`))
        .catch((err) => {
            console.error(err);
            console.error('Something went wrong. Please try again.');
        });

}

// Function to start code execution
function run() {
    inquirer.prompt(questions)
        .then((responses) => {
            // Destructure responses object
            let { logoText: text, logoTextColor: textColor, logoTextColorHex: textColorHex = '', logoShape: shape, logoShapeColor: shapeColor, logoShapeColorHex: shapeColorHex = '' } = responses;

            // Create Logo object using the answers to the prompts
            let logo = new Logo(
                text,
                textColor,
                textColorHex,
                shape,
                shapeColor,
                shapeColorHex
            );

            // Write to file
            saveLogo(logo);
        })
}

module.exports = run;
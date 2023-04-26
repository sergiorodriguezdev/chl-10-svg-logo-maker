// Import inquirer and fs
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
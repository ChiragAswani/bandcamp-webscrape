// Import the 'fs' module
const fs = require('fs');

// Define the path to the file
const filePath = 'artists.txt';

// Read the file and convert it to an array
fs.readFile(filePath, 'utf8', (err, data) => {
    // Handle possible read errors
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the file content into an array (each line becomes an array element)
    const arrayFromFile = data.split('\n');

    // Log the array to the console
    console.log(JSON.stringify(arrayFromFile));
});
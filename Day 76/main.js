// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip


//Solution 1


/* const fs = require('fs');
const path = require('path');

// Function to organize the directory
function organizeDirectory(directoryPath) {
    // Read all the files in the directory
    const files = fs.readdirSync(directoryPath);

    files.forEach(file => {
        // Get the file extension
        const ext = path.extname(file).substring(1);
        const extFolder = path.join(directoryPath, ext);

        // Create a folder for the extension if it doesn't exist
        if (!fs.existsSync(extFolder)) {
            fs.mkdirSync(extFolder);
        }

        // Move the file into the respective folder
        const oldPath = path.join(directoryPath, file);
        const newPath = path.join(extFolder, file);
        fs.renameSync(oldPath, newPath);
    });

    console.log('Directory organized successfully!');
}

// Specify the directory path
const directoryPath = '.';

// Call the function to organize the directory
organizeDirectory(directoryPath);
 */


// Solution

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "."

let files = await fs.readdir(basepath)

for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {


        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }

}
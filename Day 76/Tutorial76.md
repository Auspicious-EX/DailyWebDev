# Tutorial **76** Notes

## Exercise 15:

To solve the problem of organizing the contents of a directory into different folders based on file types in Node.js, you can follow this approach:

### **Intuition**
The program should iterate through the files in a specified directory and move each file into a new folder based on its extension (e.g., `.jpg`, `.pdf`, `.zip`).

### **Approach**
1. **Read the Directory**: Fetch all files from the given directory.
2. **Create Folders**: For each file, check its extension and create a corresponding folder if it doesn't exist.
3. **Move Files**: Move each file into the appropriate folder based on its extension.

### **Complexity**
- **Time Complexity**: O(n), where `n` is the number of files in the directory.
- **Space Complexity**: O(1), since we're mainly operating on the files in place.

### **Code**

Here's the Node.js program that accomplishes this:

```javascript
const fs = require('fs');
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
const directoryPath = './your-directory-path';

// Call the function to organize the directory
organizeDirectory(directoryPath);
```

### **Explanation**
1. **fs.readdirSync(directoryPath)**: Reads all the files from the specified directory.
2. **path.extname(file).substring(1)**: Extracts the file extension without the dot.
3. **fs.mkdirSync(extFolder)**: Creates a new directory for the file extension if it doesn't exist.
4. **fs.renameSync(oldPath, newPath)**: Moves the file to the new folder.

Replace `'./your-directory-path'` with the actual path to the directory you want to organize. When you run this program, it will organize all files in the specified directory into folders based on their extensions.
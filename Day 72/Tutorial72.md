# Tutorial **72** Notes

# Working with Files in Node.js: `fs` and `path` Modules

Node.js provides powerful built-in modules to work with the file system and paths. The two primary modules for this are `fs` (File System) and `path`.

---

#### 1. **`fs` Module (File System)**

The `fs` module allows you to work with the file system on your computer. You can read, write, update, delete, and rename files using the `fs` module.

- **Importing `fs`:**
  ```javascript
  const fs = require('fs');
  ```

- **Reading a File:**
  - Synchronously:
    ```javascript
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data);
    ```
  - Asynchronously:
    ```javascript
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    ```

- **Writing to a File:**
  - Synchronously:
    ```javascript
    fs.writeFileSync('example.txt', 'Hello, World!');
    ```
  - Asynchronously:
    ```javascript
    fs.writeFile('example.txt', 'Hello, World!', (err) => {
      if (err) throw err;
      console.log('File has been saved!');
    });
    ```

- **Appending to a File:**
  ```javascript
  fs.appendFile('example.txt', '\nAppended Text', (err) => {
    if (err) throw err;
    console.log('Text appended!');
  });
  ```

- **Deleting a File:**
  ```javascript
  fs.unlink('example.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
  });
  ```

- **Creating a Directory:**
  ```javascript
  fs.mkdirSync('newDir');
  ```

- **Reading a Directory:**
  ```javascript
  const files = fs.readdirSync('.');
  console.log(files);
  ```

---

#### 2. **`path` Module**

The `path` module provides utilities for working with file and directory paths.

- **Importing `path`:**
  ```javascript
  const path = require('path');
  ```

- **Getting the File Name:**
  ```javascript
  const fileName = path.basename('/Users/joe/file.txt');
  console.log(fileName); // Outputs: file.txt
  ```

- **Getting the Directory Name:**
  ```javascript
  const dirName = path.dirname('/Users/joe/file.txt');
  console.log(dirName); // Outputs: /Users/joe
  ```

- **Getting the File Extension:**
  ```javascript
  const ext = path.extname('file.txt');
  console.log(ext); // Outputs: .txt
  ```

- **Joining Paths:**
  ```javascript
  const joinedPath = path.join('/Users', 'joe', 'docs', 'file.txt');
  console.log(joinedPath); // Outputs: /Users/joe/docs/file.txt
  ```

- **Resolving Absolute Paths:**
  ```javascript
  const absPath = path.resolve('file.txt');
  console.log(absPath); // Outputs: Absolute path to file.txt
  ```

---

### Summary:

- **`fs` Module**: Used for interacting with the file system (reading, writing, deleting files, etc.).
- **`path` Module**: Used for handling and transforming file paths.

These modules are essential tools when working with files and directories in Node.js, making it easier to perform a variety of file-related operations in a cross-platform manner.
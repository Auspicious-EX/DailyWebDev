# Tutorial **71** Notes

# CommonJS vs ECMAScript Modules: Key Differences

#### CommonJS Modules:
- **Introduction**: CommonJS is the module system used in Node.js, designed for server-side JavaScript.
- **Syntax**:
  - To export a module: `module.exports = ...`
  - To import a module: `const module = require('module')`
- **Execution**:
  - Modules are loaded synchronously, making it ideal for server-side environments.
- **Scope**:
  - Each module has its own scope, so variables defined in one module are not accessible in another unless explicitly exported.
- **Examples**:
  ```javascript
  // exporting in CommonJS
  module.exports = {
      greet: function() {
          console.log("Hello from CommonJS");
      }
  };

  // importing in CommonJS
  const { greet } = require('./myModule');
  greet();
  ```

#### ECMAScript (ES6) Modules:
- **Introduction**: ES6 Modules are the official standard for JavaScript modules, introduced in ECMAScript 2015 (ES6).
- **Syntax**:
  - To export a module: `export ...`
  - To import a module: `import ... from 'module'`
- **Execution**:
  - Modules are loaded asynchronously, which is better suited for client-side environments but works well on the server too.
- **Scope**:
  - Like CommonJS, ES6 modules have their own scope. However, ES6 allows for more granular control over what is imported/exported.
- **Examples**:
  ```javascript
  // exporting in ES6
  export const greet = () => {
      console.log("Hello from ES6");
  };

  // importing in ES6
  import { greet } from './myModule.js';
  greet();
  ```

#### Key Differences:
1. **Loading**: 
   - CommonJS is synchronous, making it more suited for server-side environments.
   - ES6 Modules are asynchronous, making them more suitable for browser environments.
   
2. **Syntax**:
   - CommonJS uses `require` and `module.exports`.
   - ES6 Modules use `import` and `export`.

3. **Scope**:
   - Both systems provide module scope, but ES6 Modules offer more flexibility with named and default exports.

4. **Usage**:
   - CommonJS is mainly used in Node.js.
   - ES6 Modules are the standard for modern JavaScript development and are supported in both Node.js (from version 12) and browsers.

### Summary:
CommonJS and ES6 Modules serve the same purpose—modularizing JavaScript code—but with different syntax and execution models. CommonJS is synchronous and traditionally used in Node.js, while ES6 Modules are the modern, asynchronous, and widely adopted standard for both client and server-side JavaScript.
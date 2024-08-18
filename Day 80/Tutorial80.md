# Tutorial **80** Notes

You can refer to the official Mongoose documentation on validation here: [Mongoose Validation Guide](https://mongoosejs.com/docs/validation.html).

## Installing Mongoose & Using it with Express

Mongoose is a powerful and popular Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your data, making it easier to work with MongoDB in a Node.js environment.

#### 1. **Installing Mongoose**

To get started with Mongoose in an Express project, you first need to install it using npm (Node Package Manager).

- **Step 1: Install Mongoose**

Open your terminal in your project directory and run:

```bash
npm install mongoose
```

This command installs Mongoose and adds it to your `package.json` file.

#### 2. **Using Mongoose with Express**

After installing Mongoose, you can integrate it into your Express application to interact with your MongoDB database.

- **Step 2: Connecting to MongoDB**

First, you'll need to connect to your MongoDB database. This is typically done in your main application file (e.g., `app.js` or `index.js`).

```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/yourDatabaseName';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
```

- **Step 3: Defining a Mongoose Schema and Model**

A Mongoose schema defines the structure of the documents within a MongoDB collection. A model is a wrapper for the schema, providing an interface to interact with the data.

```javascript
// Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// Create a model
const User = mongoose.model('User', UserSchema);
```

- **Step 4: Creating Routes with Express**

You can now create routes in Express to perform CRUD operations using the Mongoose model.

```javascript
// Create a new user
app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
```

#### Summary

- **Install Mongoose**: Install Mongoose using `npm install mongoose`.
- **Connect to MongoDB**: Use Mongoose's `connect()` method to connect your Express app to a MongoDB database.
- **Define Schemas and Models**: Create schemas to define the structure of your MongoDB documents and models to interact with them.
- **Integrate with Express**: Use the Mongoose models in your Express routes to perform CRUD operations.

Mongoose simplifies MongoDB operations by providing a schema-based solution, which makes it easier to validate, query, and manipulate data within a MongoDB database.

---

## Validations Using Mongoose

Mongoose provides a powerful way to define and enforce validations on your MongoDB documents through schemas. These validations help ensure that the data stored in your database adheres to specific rules and constraints.

#### 1. **Built-in Validators**

Mongoose has several built-in validators that you can use directly in your schema definitions:

- **`required`**: Ensures a field is not empty.
- **`min` and `max`**: Validates the minimum and maximum values for numbers.
- **`minLength` and `maxLength`**: Validates the length of strings.
- **`match`**: Ensures the string matches a given regular expression.
- **`enum`**: Restricts the value of a field to a set of predefined values.

#### Example of Built-in Validators

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Name is required
        minLength: 3,   // Name must be at least 3 characters long
        maxLength: 50   // Name must not exceed 50 characters
    },
    email: {
        type: String,
        required: true,
        unique: true,   // Email must be unique
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'] // Validates email format
    },
    age: {
        type: Number,
        min: 18,        // Age must be at least 18
        max: 65         // Age must not exceed 65
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'guest'], // Role must be one of these values
        default: 'user'  // Default role is 'user'
    },
    password: {
        type: String,
        required: true,
        minLength: 8    // Password must be at least 8 characters long
    }
});

const User = mongoose.model('User', UserSchema);
```

#### 2. **Custom Validators**

Mongoose also allows you to define custom validators for more complex validation logic.

#### Example of a Custom Validator

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Custom validation logic: username must be alphanumeric
                return /^[a-zA-Z0-9]+$/.test(v);
            },
            message: props => `${props.value} is not a valid username!`
        }
    },
    birthdate: {
        type: Date,
        validate: {
            validator: function(v) {
                // Custom validation: user must be at least 18 years old
                const today = new Date();
                const age = today.getFullYear() - v.getFullYear();
                return age >= 18;
            },
            message: 'User must be at least 18 years old!'
        }
    }
});

const User = mongoose.model('User', UserSchema);
```

#### 3. **Asynchronous Validators**

For validations that involve asynchronous operations, you can use an asynchronous custom validator.

#### Example of an Asynchronous Validator

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validate: {
            isAsync: true,
            validator: async function(v) {
                // Simulate an async operation (e.g., checking if email exists)
                const user = await User.findOne({ email: v });
                return !user;
            },
            message: 'Email already exists!'
        }
    }
});

const User = mongoose.model('User', UserSchema);
```

#### 4. **Validation on Update**

By default, Mongoose only applies validation when creating a document. To apply validation on updates, you need to explicitly specify it.

#### Example of Validation on Update

```javascript
UserSchema.pre('findOneAndUpdate', function(next) {
    this.options.runValidators = true;  // Enable validation on update
    next();
});
```

#### Summary

- **Built-in Validators**: Quickly add validation rules like `required`, `min`, `max`, `match`, and `enum`.
- **Custom Validators**: Implement custom validation logic using `validate` with synchronous or asynchronous operations.
- **Validation on Update**: Ensure that validations are enforced even when updating documents by using `runValidators`.

Mongoose validations are essential for ensuring data integrity and consistency in your MongoDB database. By leveraging these validation features, you can create robust data models that prevent invalid data from being stored.
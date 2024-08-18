# Tutorial **79** Notes

https://www.mongodb.com/docs/manual/crud/

## CRUD Operations in MongoDB

CRUD operations are the four basic functions of persistent storage in MongoDB, representing Create, Read, Update, and Delete. These operations allow you to interact with and manipulate data stored in MongoDB collections.

#### 1. **Create (Insert)**

The **Create** operation in MongoDB is performed using the `insertOne()` or `insertMany()` methods. These methods allow you to add one or more documents to a collection.

- **Example:**

```javascript
// Insert a single document
db.students.insertOne({
    name: "John Doe",
    age: 21,
    major: "Computer Science"
});

// Insert multiple documents
db.students.insertMany([
    { name: "Jane Smith", age: 22, major: "Mathematics" },
    { name: "Alice Johnson", age: 20, major: "Physics" }
]);
```

#### 2. **Read (Query)**

The **Read** operation is used to retrieve data from a MongoDB collection. You can use the `find()` method to query the collection and retrieve documents that match specific criteria.

- **Example:**

```javascript
// Find all documents in the collection
db.students.find();

// Find documents with a specific field value
db.students.find({ major: "Computer Science" });

// Find documents with a specific field value and projection
db.students.find({ major: "Computer Science" }, { name: 1, age: 1 });
```

- **Example of findOne:**

```javascript
// Find the first document that matches the query
db.students.findOne({ name: "John Doe" });
```

#### 3. **Update**

The **Update** operation allows you to modify existing documents in a collection. You can use the `updateOne()` or `updateMany()` methods to update one or more documents.

- **Example:**

```javascript
// Update a single document
db.students.updateOne(
    { name: "John Doe" }, // Filter
    { $set: { age: 22 } }  // Update operation
);

// Update multiple documents
db.students.updateMany(
    { major: "Computer Science" }, // Filter
    { $set: { major: "Software Engineering" } }  // Update operation
);
```

- **Replace Document:**

If you want to replace an entire document, you can use the `replaceOne()` method.

```javascript
db.students.replaceOne(
    { name: "John Doe" },
    { name: "John Doe", age: 23, major: "Data Science" }
);
```

#### 4. **Delete**

The **Delete** operation is used to remove documents from a collection. You can use the `deleteOne()` or `deleteMany()` methods to delete one or more documents.

- **Example:**

```javascript
// Delete a single document
db.students.deleteOne({ name: "John Doe" });

// Delete multiple documents
db.students.deleteMany({ age: { $lt: 21 } });
```

### Summary

- **Create**: Use `insertOne()` or `insertMany()` to add documents to a collection.
- **Read**: Use `find()` or `findOne()` to retrieve documents from a collection.
- **Update**: Use `updateOne()`, `updateMany()`, or `replaceOne()` to modify existing documents.
- **Delete**: Use `deleteOne()` or `deleteMany()` to remove documents from a collection.

These CRUD operations are fundamental to working with MongoDB and allow you to effectively manage the data stored in your database.
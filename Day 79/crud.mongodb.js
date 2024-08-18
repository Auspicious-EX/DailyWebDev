use("CRUDDB")

console.log(db)

db.createCollection("courses")

// db.courses.insertOne({
//     name: "SHubham's Web",
//     price : 200,
//     assignment: 12
// }
// )

// let a = db.courses.find({price : 220})
// console.log(a)
// console.log(a.count())

// db.courses.updateOne({price:220}, {$set:{price:320}})

db.courses.deleteOne({price:320})


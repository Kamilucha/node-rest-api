const app = require('./app')

// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000")
// })

const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://Kamila:11111111k@cluster0.fib0ay0.mongodb.net/db_contacts?retryWrites=true&w=majority";

mongoose.set('strictQuery', true)


mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000)
    console.log("Database connection successful")
  })
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })

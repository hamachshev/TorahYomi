const mongoose = require("mongoose");

await mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.llkqu.mongodb.net/users?retryWrites=true&w=majority`
);

const userSchema = new mongoose.Schema({
  user: String,
});

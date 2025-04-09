const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Connection Failed:', err);
    process.exit(1);
  }
};

// User Schema
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Book Schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  category: String,
  price: Number,
  rating: Number,
  publishedDate: Date
});

const User = mongoose.model('User', userSchema);
const Book = mongoose.model('Book', bookSchema);

module.exports = {
  connectDB,
  User,
  Book
};

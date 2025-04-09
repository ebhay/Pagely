const express = require('express');
const { connectDB } = require('./db/db');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());

app.use('/api/users', require('./routes/user'));
app.use('/api/books', require('./routes/book'));


app.get('/', (req, res) => {
  res.send('📚 Bookstore API is running!');
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server started on http://localhost:${process.env.PORT}`);
});

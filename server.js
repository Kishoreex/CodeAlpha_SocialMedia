const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

// routes
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);

const PORT = process.env.PORT || 5001;


mongoose.connect(process.env.MONGO_URI, { })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error('Mongo connection error:', err.message);
    process.exit(1);
  });

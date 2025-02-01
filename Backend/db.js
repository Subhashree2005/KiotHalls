const mongoose = require('mongoose');

const db = mongoose.createConnection('mongodb://localhost:27017/kiothalls', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to MongoDB');
});
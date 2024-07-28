const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aymenshoteri:Anev3682013.@thewincolumn.0inb4jw.mongodb.net/courses', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('mongodb courses connected');
})
.catch(() => {
  console.log('failed to connect to courses');
});

module.exports = mongoose;

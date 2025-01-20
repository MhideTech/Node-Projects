const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connection successful'));

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    default: [true, 'A tour must have a price']
  }
});

const Tour = mongoose.model('Tour', tourSchema);

const app = require('./app');
// console.log(process.env);

const port = process.env.PORT || 3000;

app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on port ${port}...`);
});

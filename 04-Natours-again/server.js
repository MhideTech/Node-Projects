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

const app = require('./app');
// console.log(process.env);

const port = process.env.PORT || 3000;

app.listen(port, '127.0.0.1', () => {
  console.log(`Server is running on port ${port}...`);
});

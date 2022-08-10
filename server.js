const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_LOCAL, () => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Express server is listing on port ${port}!`);
  });
});

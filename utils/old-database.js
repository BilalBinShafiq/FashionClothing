// /* eslint-disable no-underscore-dangle */
// const mongodb = require('mongodb');

// const mongoDbClient = mongodb.MongoClient;

// let _db;

// const mongoConnect = (callback) => {
//   mongoDbClient
//     .connect('mongodb://localhost:27017')
//     .then((client) => {
//       console.log('MongoDb Connected Successfully!');
//       _db = client.db('male_fashion');
//       callback();
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

// const getDb = () => {
//   if (_db) {
//     return _db;
//   }
//   // eslint-disable-next-line no-throw-literal
//   throw 'No database found!';
// };

// exports.mongoConnect = mongoConnect;
// exports.getDb = getDb;

// Paste the following code at the top before const app = express()
// const databaseUtil = require('./utl/old-database');

// Paste the following code at the last
// databaseUtil.mongoConnect(() => {
//   app.listen(port, () => {
//     // eslint-disable-next-line no-console
//     console.log(`Express server is listing on port ${port}!`);
//   });
// });

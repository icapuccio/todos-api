/* eslint-disable no-console */
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users')
      .deleteMany({ name: 'Nacho' })
      .then(result => {
        console.log(result);
      });

    db.collection('Users')
      .findOneAndDelete({
        _id: new ObjectID('5bd4d87d3a20b6853ea6d983')
      })
      .then(result => {
        console.log(result);
      });

    client.close();
  }
);

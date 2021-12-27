import mongoose from 'mongoose';

import { CONNECTION_URL, DATABASE_NAME } from './config';

export default function() {
  mongoose.connect(CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, dbName: DATABASE_NAME });
  const connection = mongoose.connection;

  connection.on('connected', function() {
    console.log('Connected to ' + DATABASE_NAME);
  });

  connection.on('error', function(err) {
    console.log('Connection error: ' + err);
  });

  connection.on('disconnected', function() {
    console.log('Disconnected from ' + DATABASE_NAME);
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      console.log('Disconnected due to application termination');
      process.exit(0);
    });
  });
}

module.exports = function (mongoose) {
  const Schema = mongoose.Schema;
  // db setup
  var options = {
    useMongoClient: true,
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0
  };
  mongoose.connect(process.env.MONGO_URL_LOCAL, options);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('connected to mongodb..');
  });

  var OrdersSchema = new Schema({
    user: {
      name: String,
      phone: Number
    },
    created_at: Date
  });

  mongoose.model('Orders', OrdersSchema);

  return db;
}

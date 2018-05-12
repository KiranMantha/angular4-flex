module.exports = function (mongoose) {
  const Schema = mongoose.Schema;
  const db = mongoose.connection;

  mongoose.connect(process.env.MONGO_URL_LOCAL);
  
  db.on('error', () => { 
    console.log(console, 'connection error:');
  });

  db.once('open', () => {
    console.log('connected to mongodb..');
  });

  //Users Schema
  const UsersSchema = new Schema({
    email: String,
    password: String
  });
  mongoose.model('Users', UsersSchema, 'users'); //model name, model schema, collection name in mongodb

  // Orders Schema
  const OrdersSchema = new Schema({
    user: {
      name: String,
      phone: Number
    },
    created_at: Date
  });
  mongoose.model('Orders', OrdersSchema, 'orders'); //model name, model schema, collection name in mongodb

  return db;
}

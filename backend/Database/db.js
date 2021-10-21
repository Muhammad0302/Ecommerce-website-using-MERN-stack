import mongoose from "mongoose";

const Connection = async (userName, password) => {
  // const URL = `mongodb+srv://${userName}:${password}@ecommerce-db.1xlx6.mongodb.net/ECOMMERCE-WEBSITE?retryWrites=true&w=majority`;

  const URL = `mongodb://${userName}:${password}@ecommerce-db-shard-00-00.1xlx6.mongodb.net:27017,ecommerce-db-shard-00-01.1xlx6.mongodb.net:27017,ecommerce-db-shard-00-02.1xlx6.mongodb.net:27017/ECOMMERCE-WEBSITE?ssl=true&replicaSet=atlas-bz00t8-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
export default Connection;

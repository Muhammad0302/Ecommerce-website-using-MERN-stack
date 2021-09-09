import mongoose from 'mongoose'

 const Connection = async(userName,password) =>{
   const URL = `mongodb+srv://${userName}:${password}@ecommerce-db.1xlx6.mongodb.net/ECOMMERCE-WEBSITE?retryWrites=true&w=majority`;
   try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
    console.log('Database Connected Succesfully');
   } catch(error) {
    console.log('Error: ', error.message);
  }
}
export default Connection
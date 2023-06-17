import { Schema, model } from 'mongoose';
// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true }
});
// 3. Create a Model.
const User = model('User', userSchema);
export default User;
// run().catch(err => console.log(err));
// async function run() {
//   // 4. Connect to MongoDB
//   await connect('mongodb://127.0.0.1:27017/test');
//   const user = new User({
//     name: 'Bill',
//     email: 'bill@initech.com',
//     avatar: 'https://i.imgur.com/dM7Thhn.png'
//   });
//   await user.save();
//   console.log(user.email); // 'bill@initech.com'
// }

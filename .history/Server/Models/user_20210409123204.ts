import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new Schema
({
    username: String,
    EmailAddress: String,
    DisplayName
},
{
    collection: 'users'
});
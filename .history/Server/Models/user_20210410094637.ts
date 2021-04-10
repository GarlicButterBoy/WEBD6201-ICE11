import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

const userSchema = new Schema
({
    username: String,
    emailAddress: String,
    displayName: String,
    created: 
    {
        type: Date,
        default: Date.now()
    },
    updated: 
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: 'users'
});

userSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("User", userSchema as PassportLocalSchema);

//helps typescript understand 
declare global
{
    export type UserDocument = mongoose.Document &
    {
        username: String,
        emailAddress: String,
        displayName: String
    }
}

export default Model;

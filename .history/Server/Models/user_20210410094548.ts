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

declare global
{
    
}

export default Model;

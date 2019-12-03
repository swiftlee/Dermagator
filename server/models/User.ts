import {Schema, Document, model} from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    permissions: {
        type: [String],
        default: []
    }
});

interface IUser extends Document {
    name: string,
    email: string,
    password: string,
    permissions: [string]
}

export const User = model<IUser>('users', UserSchema);

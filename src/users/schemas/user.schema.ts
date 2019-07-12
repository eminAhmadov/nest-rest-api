import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    nickname: String,
    age: Number,
    gender: String,
    country: String,
    address: String,
})
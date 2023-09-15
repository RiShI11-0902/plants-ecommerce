const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true,
        validate:{
            validator: function(v){
                return  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
            },
            message: (props) => `${props/value} is not a valid email`
        },
    },
    name:{type: String, required: true},
    password: {type: String, minLength: 6, required: true},
    storeOwner: {type: Boolean}
})

exports.User = mongoose.model("User", userSchema)
const mongoose = require("mongoose")
const { Schema } = mongoose

const sellerSchema = new Schema({
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
    storename:{type: String, required: true},
    password: {type: String, minLength: 6, required: true},
})

exports.Seller = mongoose.model("Seller", sellerSchema)
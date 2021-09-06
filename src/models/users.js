const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
        validate(value){
            if(value.length<=6){
                throw new Error('length must be greater then 6')
            }
            else if(value.toLowerCase().includes('password')){
                throw new Error('password must not includes password')
            }
        }
    },
    age:{
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Invalid age');
            }
        }
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email');
            }
        }
    }
});


module.exports = User
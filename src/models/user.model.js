const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { type: String,
                    uniuque: true,
                    required: true},
        email: { type: String,
            uniuque: true,
            required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?)*(\.\w{2,3})+$/,
            'Please enter a valid email'
        ]},

        password: { type: String,
            uniuque: true,
            required: true},
        
    },
    { timestamps: true }
)


module.exports = mongoose.model("User",userSchema)
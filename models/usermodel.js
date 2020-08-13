const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    Unique_ID: { type:String},
    Password: { type: String},
    Campus_ID: {type:String},
    Type : {type:String}
});

module.exports = User = mongoose.model("Authentication", userSchema);
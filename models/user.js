const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//User Schema
const UserSchema = new Schema(
{
    name:
    {
        type: String,
        required: false
    },
    suitesize:
    {
        type: String,
        default: "yes"
 
    },
    suitecolor:
    {
        type: String,
        default: "yes"

    },
    cabin:
    {
        type: String,
        default: ""
    },
    //an array of posts passed by the reference to id
    diet: 
    {
        type: String,
        default: "yes"
    },
    //an array of comments passed by the reference to id
    flightSchedule:
    [{
        type: String,
        required: true
    }],
    date:
    {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model("User", UserSchema);
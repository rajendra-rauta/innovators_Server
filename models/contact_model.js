const { Schema, model, default: mongoose } = require("mongoose");
const { strict, required } = require("../validators/auth_validator");
const { string } = require("zod");

const contactSchema = new Schema({
    username: { type:String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },


});
// create a model or a collection 

const Contact = new model("Contact", contactSchema);
module.exports = Contact;
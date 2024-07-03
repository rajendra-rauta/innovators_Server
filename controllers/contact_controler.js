const Contact = require("../models/contact_model");


const contaactForm = async (req,res) =>{
    try {
        const responce = req.body;
        await Contact.create(responce);
        return res.status(200).json({message:"Message send successfully"});

    } catch (error) {
     return res.status(500).json*({messag: "Message not delivered"});  
    }
};


module.exports =contaactForm;
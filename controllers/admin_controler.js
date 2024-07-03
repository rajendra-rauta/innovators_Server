const User = require("../models/user_modele");
const Contact = require("../models/contact_model");
const getAllUser = async(req,res) =>{
    try {
        const users =await User.find({},{ password:0});
        // console.log(users);
        if(!users || users.length === 0){
           return res.status(404).json({message:"No Users found"});
        }
       return res.status(200).json(users);
    } catch (error) {
        next(error);
    }

};


// get single user for edit

const getUserById = async(req,res) =>{
    try {
        const id = req.params.id;
       const data=  await User.findOne({_id:id}, {password:0})
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }

};




// user update logic 


const updateUserById =async(req,res)=>{
    try {
        const id = req.params.id;
      const updatUserData= req.body;
      const updatedData = await User.updateOne({_id:id},{
        $set :updatUserData,
      });
      return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}



// delet user logic 

const deleteUserBYid = async(req,res) =>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Sucesfully"});
    } catch (error) {
        next(error);
    }

};


// get All contact logic 
const getAllContact = async(req,res) =>{
    try {
        const contacts = await Contact.find();

        if(!contacts || contacts.length === 0){
            return res.status(404).json({message:"No contacts found"});
         }
        return res.status(200).json(contacts)
    } catch (error) {
        next(error);
        
    }

};

const deleteContactBYid= async(req,res) =>{
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id:id});
        return res.status(200).json({message:"User Deleted Sucesfully"});
    } catch (error) {
        next(error);
    }
};



module.exports = {getAllUser, getAllContact, deleteUserBYid,getUserById, updateUserById,deleteContactBYid};

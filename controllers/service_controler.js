
const  service = require("../models/service_model");
const services = async(req,res)=>{
    try {
            
        
        const responce = await service.find();

        if(!responce){
            res.status(404).json({msg:"No service found"});
            return;
        }
        res.status(200).json({msg:responce});
        
        
    } catch (error) {
        console.log(`services:${error}`);
    }

};
module.exports =services;
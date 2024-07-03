// const { Schema } = require("zod");

const validate = (Schema) => async(req,res,next) => {

    try {
        const parseBody= await Schema.parseAsync(req.body);
        req.body= parseBody;
        next();

    } catch (err) {
      const  status = 420; 
        const message ="fill the input properly";
        const extraDetails =  err.errors[0].message;
        const error = {
            status,
            message,
            extraDetails,
        };
        // res.status(500).json({msg:massage})
        next(error);
    }
};
module.exports= validate;  
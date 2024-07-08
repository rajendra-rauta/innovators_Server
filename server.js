require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const auth_route = require("./routers/auth-router");
const contact_route = require("./routers/contact_router");
const service_route = require("./routers/Service_router");
const admin_route = require("./routers/admin_router");
const connectDb = require("./utils/db");
const errorMiddlewear = require("./middlewares/errer_middlewear");



// lets trakles cors 
const corsOptions = {
    origin: [
        'https://innovaterslabs-kj0mr0hrl-rajendra-rautas-projects.vercel.app'],
   methods :"GET, POST ,DELETE,PATCH,HEAD",
   Credentials:true,

};
app.use(cors(corsOptions));
// middlewear
app.use(express.json());

// this is for using router 
app.use("/api/auth", auth_route);
app.use("/api/form", contact_route);
app.use("/api/data", service_route);

// lets define admin route 
app.use("/api/admin", admin_route);

// errer errorMiddlewear   
app.use(errorMiddlewear);
 
// mongodb
connectDb().then(()=>{
    app.listen(port, () => {  
        console.log(`server connected at port no ${port}`);
    
    }); 

});





  
 

const mongoose = require("mongoose");

// const URI  ="mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect (URI);

//  const URI  =
// "mongodb+srv://prakashkushwaha1999:mern2024@cluster0.y1tt4re.mongodb.net/merndata?retryWrites=true&w=majority&appName=Cluster0";

const URI = process.env.MONGODB_URI;

const connectDb = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("connectionn successfull  database")
        
    } catch (error) {
        console.error("database connection faild");
        process.exit(0);
        
    }
    // connectDb.close();
};
module.exports = connectDb;
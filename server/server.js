require("dotenv").config();
const express= require("express")
const app = express();
const cors = require("cors")
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router")
const adminRoute = require("./router/admin-router")

const corsOption = {
    origin: "http://localhost:5173",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOption))
// middleware
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

// let's define admin route
app.use("/api/admin", adminRoute)

app.use(errorMiddleware);    //? this is errormiddleware  


// app.get("/", (req,res)=>{
  
//     res.status(200).send("hello world i am learn mern")
// })
// app.get("/register", (req,res)=>{
  
//     res.status(200).send("wellcome to register page")
// })


const PORT = 5000;

connectDb().then (()=>{

    app.listen(PORT, ()=>{
        console.log(`server is runing at port: ${PORT}`);
    })
});

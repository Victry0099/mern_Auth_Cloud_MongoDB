const express = require("express")
const router = express.Router();
// const {home, register} = require("../controllers/auth-controller"); another way
const authControllers= require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware")
const {signupSchema,loginSchema} = require("../validators/auth-validatore");
// const loginSchema = require("../validators/login-auth-validatore")

const validate = require("../middlewares/validate-middleware");

// app.get("/", (req,res)=>{
  
//     res.status(200).send("hello world i am learn mern")
// })

//we use another way to make server

// router.get("/", (req, res)=>{
//     res.status(200).send("hello i am run server using router ")
// })

//? another way

router.route("/").get(authControllers.home)

router.route("/register")
.post(validate(signupSchema), authControllers.register);

router.route("/login").post(validate(loginSchema), authControllers.login); 


// new for user data to show our react page

router.route("/user").get(authMiddleware, authControllers.user);
module.exports = router;
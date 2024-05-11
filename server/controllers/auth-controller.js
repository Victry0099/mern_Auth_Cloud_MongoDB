const User = require("../modules/user-model");
const bcrypt = require("bcryptjs");

//?  home logic
const home = async (req, res) => {

    try {
        res.status(200).send("hello i am run server using router using controller")

    } catch (error) {
        console.log(error)
    }
}

//? user register logic 
const register = async (req, res) => {
    try {
        console.log(req.body)
        const { username, phone, email, password } = req.body;
        const userExits = await User.findOne({ email: email });

        if (userExits) {
            return res.status(400).json({ message: "Email already exist" });
        }

        //?   Hash the password 
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        //? we use another way to pass hash in user model pre

        const userCreated = await User.create
            ({
                username,
                phone,
                email,
                // password: hash_password 
                password
            })

        res.status(201).json({
            message: "registration successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        })
        // res.status(200).json({ message: "wellcome to register page using controller"})

    } catch (error) {
        // res.status(500).json({ msg: "internal server error" })
        next(error);
    }
}

//? user login logic

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const userExits = await User.findOne({ email:email });

        if (!userExits) {
            return res.status(400).json({ message: "Invalid email or password" });
            // next(error)
        }

        // const user = await bcrypt.compare(password, userExits.password);

        //? other way
        const user = await userExits.comparePassword(password);
        if (user) {
            res.status(200).json({
                message: "Login Successful",
                token: await userExits.generateToken(),
                userId: userExits._id.toString(),
            });
        }
        else {
            res.status(401).json({ message: "Invalid email or password" });
           
        }

    }
    catch (error) {
        console.error("Error in login function:", error);
        res.status(500).json("Internal server error");
        next(error)
    }
};


// ? send user data logic


const user= async(req, res)=>{

    try {
        const userData = req.user;
        console.log(userData)
       return res.status(200).json({userData})
    } catch (error) {
        console.log(`error from user route ${error}`)
    }
}


module.exports = { home, register, login, user }
const User = require("../modules/user-model")
const Contact = require("../modules/contact-model");


// ? admin user get all Users
const getAllUser = async (req, res) => {

    try {

        const users = await User.find({}, { password: 0 });
        console.log(users)
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No users found" })
        }
        res.status(200).json(users);
    } catch (error) {
        next(error)
    }
}
// ? admin user get all Contacts
const getAllContacts = async (req, res) => {

    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No Contacts found" })
        }

        return res.status(200).json({ contacts });
    } catch (error) {
        next(error)
    }
}
const deletContactById = async(req, res)=>{

    try {
        try {
            const id = req.params.id;
            await Contact.deleteOne({ _id: id })
            res.status(200).json({ message: "Contact Deleted Successfully" })
    
        } catch (error) {
            next();
        } 
    } catch (error) {
        
    }
}


//? user delete logic
const deleteUserById = async (req, res) => {

    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id }, { password: 0 })
        res.status(200).json({ message: "User Deleted Successfully" })

    } catch (error) {
        next();
    }
}


// single user logic 

const getUserById = async (req, res) => {

    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        res.status(200).json(data)

    } catch (error) {
        next();
    }
}


// User update logic 

const updateUserById = async (req, res) => {

    try {

        const id = req.params.id;
        const updateUserData = req.body;
        const updateData = await User.updateOne(
           
            { _id: id},
            {
                $set: updateUserData,
            }
        )
        return res.status(200).json(updateData)
    } catch (error) {
        next();
    }
}


module.exports = { getAllUser, getAllContacts, deleteUserById, getUserById, updateUserById, deletContactById };
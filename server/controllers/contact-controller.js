// const Contact = require("../modules/contact-model");

// const contactForm = async (req, res)=>{

//     try {
//         const response = req.body;
//         await Contact.create(response);
//         return res.status(200).json({message: "message send successfully"})
//     } catch (error) {
        
//         return res.status(500).json({message: "message not send successfully"})
//     }
// }

// module.exports = contactForm;

const Contact = require("../modules/contact-model");
const contactSchema = require("../validators/contact-auth-validatore");

const contactForm = async (req, res) => {
  try {
    // Validate the request body against the contact schema
    contactSchema.parse(req.body);

    // If validation passes, create the contact record
    const { username, email, message } = req.body;
    await Contact.create({ username, email, message });

    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    // If validation fails or an error occurs, handle it here
    console.error("Error in contact form submission:", error);
    return res.status(400).json({ message: error.errors });
  }
};

module.exports = contactForm;

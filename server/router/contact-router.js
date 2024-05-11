// const express  =require("express")
// const router = express.Router();
// const contactForm = require("../controllers/contact-controller");

// router.route("/contact").post(contactForm);


// module.exports = router;

const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");
const validate = require("../middlewares/validate-middleware");
const contactSchema = require("../validators/contact-auth-validatore")

router.post("/contact", validate(contactSchema), contactForm); // Apply validate middleware

module.exports = router;


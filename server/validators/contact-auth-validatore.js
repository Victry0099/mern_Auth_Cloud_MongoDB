const { z } = require("zod");

const contactSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 2 characters" })
    .max(255, { message: "Name must be less than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email address" }),

  message: z
    .string({ required_error: "Message is required" })
    .min(2, { message: "Message must be at least 2 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

module.exports = contactSchema;

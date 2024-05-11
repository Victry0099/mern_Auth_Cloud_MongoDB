const {z} = require("zod");



const loginSchema = z.object({
   
  email: z
  .string({required_error: "Email is required"})
  .trim()
  .email({message: "Invalid email address"})
  .min(5,{message: "Email must be 5 character"} )
  .max(255,{message: "Email less than 255 character"} ),


  password: z
  .string({required_error: "Password is required"})
  .min(7,{message: "Password must be 7 character"} )
  .max(1024,{message: "Password less than 255 character"} ),
})



//? Creating object schema for signup

const signupSchema =loginSchema.extend({

    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3,{message: "Name must be 3 character"} )
    .max(255,{message: "Name less than 255 character"} ),

    // email: z
    // .string({required_error: "Email is required"})
    // .trim()
    // .email({message: "Invalid email address"})
    // .min(5,{message: "Email must be 5 character"} )
    // .max(255,{message: "Email less than 255 character"} ),

    phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, { message: "Phone number must be 10 digits" })
    .max(12, { message: "Phone less than 20 digits" })
    .refine((value) => /^\d+$/.test(value), {
      message: "Phone number must contain only digits",
    }),

    // password: z
    // .string({required_error: "Password is required"})
    // .min(7,{message: "Password must be 7 character"} )
    // .max(1024,{message: "Password less than 255 character"} ),

    
})

module.exports = {signupSchema,loginSchema };
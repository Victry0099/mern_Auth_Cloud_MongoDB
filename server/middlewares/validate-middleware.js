
const validate = (schema) => async (req, res, next) => {

    try {

        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const status = 400;
        const message = "Fill the input properly"
        const extraDetails = err.errors[0].message;

        // res.status(400).json({msg: message})  replace with next()

        const error = {
            status,
            message,
            extraDetails ,
        }
        console.log(error)
        next(error)

    }
}

module.exports = validate;



const Service = require("../modules/service-model")


const services = async (req, res) => {
    try {
        const response = await Service.find();
        if (!response) {
            // handle for no document found
            res.status(404).json({ msg: "No service found" })
            return;
        }
        res.status(200).json({ msg: response })

    } catch (error) {
        console.log("service", error)
    }
}
module.exports = services;
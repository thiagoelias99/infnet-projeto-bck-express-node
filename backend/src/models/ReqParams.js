const Joi = require("joi");

const ReqParams = Joi.object({
id: Joi.string().guid({version: "uuidv4"}).required()
});

module.exports = ReqParams;
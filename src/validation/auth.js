import Joi from "joi";

export const registerUserSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(3).max(30).email({ tlds: { allow: ['com', 'net', 'ua', 'cz'] } }).required(),
    password: Joi.string().min(6).max(20).required()
});

export const loginUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});

export const sendResetEmailSchema = Joi.object({
    email: Joi.string().email().required(),
});
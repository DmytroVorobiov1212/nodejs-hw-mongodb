import Joi from "joi";

export const registerUserSchema = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    email: Joi.string().min(3).max(20).email({ tlds: { allow: ['com', 'net', 'ua', 'cz'] } }).required(),
    // password: Joi.string().min(6).max(20).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')).required().messages({
    //     'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    //     'string.empty': 'Password is required',
    //     'string.min': 'Password must be at least {#limit} characters long',
    //     'string.max': 'Password must be at most {#limit} characters long',
    // })
    password: Joi.string().min(6).max(20).required()
});

export const loginUserSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});
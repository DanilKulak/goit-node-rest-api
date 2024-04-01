import Joi from "joi";

export const userRegisterSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
});

export const userLoginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
});

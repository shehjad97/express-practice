const Joi = require('joi');
const { validate } = require("../utils/validate");

const getBook = {
    params: Joi.object({
        _id: Joi.string().required(),
    })
};

const addBook = {
    body: Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        price: Joi.number().required(),
    })
};

const updateBook = {
    params: Joi.object({
        _id: Joi.string().required(),
    }),
    body: Joi.object({
        title: Joi.string().required(),
        author: Joi.string().required(),
        price: Joi.number().required(),
    })
};

const deleteBook = {
    params: Joi.object({
        _id: Joi.string().required(),
    })
};

module.exports = {
    getBookValidation: validate(getBook),
    addBookValidation: validate(addBook),
    updateBookValidation: validate(updateBook),
    deleteBookValidation: validate(deleteBook),
}

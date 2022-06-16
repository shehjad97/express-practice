const Joi = require('joi');
const { validate } = require("../utils/validate");

const getMember = {
    params: Joi.object({
        _id: Joi.string().required(),
    })
};

const addMember = {
    body: Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required(),
        email: Joi.string().required()
    })
};

const updateMember = {
    params: Joi.object({
        _id: Joi.string().required(),
    }),
    body: Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required(),
        email: Joi.string().required()
    })
};

const deleteMember = {
    params: Joi.object({
        _id: Joi.string().required(),
    })
};

module.exports = {
    getMemberValidation: validate(getMember),
    addMemberValidation: validate(addMember),
    updateMemberValidation: validate(updateMember),
    deleteMemberValidation: validate(deleteMember),
}

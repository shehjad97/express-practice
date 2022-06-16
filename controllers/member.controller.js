const httpStatus = require("http-status");
const { MemberModel, MemberStatus } = require("../models/member.model")
const apiResponse = require("../utils/apiResponse")
const catchAsync = require("../utils/catchAsync")

const getMembers = catchAsync(async (req, res) => {
    const members = await MemberModel.find({}, { name: true, address: true, email: true });
    return apiResponse(res, httpStatus.OK, { data: members });
});

const getMember = catchAsync(async (req, res) => {
    const member = await MemberModel.findOne({ _id: req.params._id }, { name: true, address: true, email: true });
    return apiResponse(res, httpStatus.OK, { data: member });
});

const addMember = catchAsync(async (req, res) => {
    const { name, address, email } = req.body;

    const newMember = new MemberModel({ name, address, email });
    await newMember.save();

    return apiResponse(res, httpStatus.CREATED, { data: newMember });
});

const updateMember = catchAsync(async (req, res) => {
    const { name, address, email } = req.body;
    const update = await MemberModel.updateOne({ _id: req.params._id }, { name, address, email });

    return apiResponse(res, httpStatus.ACCEPTED, { message: "your information has been updated" }, update);
});

const deleteMember = catchAsync(async (req, res) => {
    const drop = await MemberModel.deleteOne({_id: req.params._id});
    return apiResponse(res, httpStatus.ACCEPTED, {message: "your information has been deleted"}, drop);
});

module.exports = {
    getMembers,
    getMember,
    addMember,
    updateMember,
    deleteMember
}

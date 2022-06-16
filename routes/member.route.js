const express = require("express");
const router = express.Router();
const {
    getMemberValidation,
    addMemberValidation,
    updateMemberValidation,
    deleteMemberValidation,
} = require("../validations/member.validation")

const {
    getMembers,
    getMember,
    addMember,
    updateMember,
    deleteMember
} = require("../controllers/member.controller");

router.get("/", getMembers);
router.post("/", addMemberValidation, addMember);
router.get("/:_id", getMemberValidation, getMember);
router.put("/:_id", updateMemberValidation, updateMember);
router.delete("/:_id", deleteMemberValidation, deleteMember);

module.exports = router;

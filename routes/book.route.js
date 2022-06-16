const express = require("express");
const router = express.Router();
const {
    getBookValidation,
    addBookValidation,
    updateBookValidation,
    deleteBookValidation,
} = require("../validations/book.validation")

const {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
} = require("./../controllers/book.controller");

router.get("/", getBooks);
router.post("/", addBookValidation, addBook);
router.get("/:_id", getBookValidation, getBook);
router.put("/:_id", updateBookValidation, updateBook);
router.delete("/:_id", deleteBookValidation, deleteBook);

module.exports = router;

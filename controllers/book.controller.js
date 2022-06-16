const httpStatus = require("http-status");
const { BookModel, BookStatus } = require("../models/book.model")
const apiResponse = require("../utils/apiResponse")
const catchAsync = require("../utils/catchAsync")

const getBooks = catchAsync(async (req, res) => {
    const books = await BookModel.find({ status: { $ne: BookStatus.removed } }, { title: true, author: true, price: true, status: true });
    return apiResponse(res, httpStatus.OK, { data: books });
});

const getBook = catchAsync(async (req, res) => {
    const book = await BookModel.findOne({ _id: req.params._id }, { title: true, author: true, price: true, status: true });
    return apiResponse(res, httpStatus.OK, { data: book });
});

const addBook = catchAsync(async (req, res) => {
    const { title, author, price } = req.body;

    const newBook = new BookModel({ title, author, price });
    await newBook.save();

    return apiResponse(res, httpStatus.CREATED, { data: newBook });
});

const updateBook = catchAsync(async (req, res) => {
    const { title, author, price } = req.body;
    const update = await BookModel.updateOne({ _id: req.params._id }, { title, author, price });

    return apiResponse(res, httpStatus.ACCEPTED, { message: "your information has been updated" }, update);
});

const deleteBook = catchAsync(async (req, res) => {
    const drop = await BookModel.updateOne({_id: req.params._id}, {status: BookStatus.removed});
    return apiResponse(res, httpStatus.ACCEPTED, {message: "your information has been deleted"}, drop);
});

module.exports = {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
}

const mongoose = require("mongoose");
const {Schema} = mongoose;

const status = Object.freeze({
    available: 'available',
    lended: 'lended',
    removed: 'removed',
});

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: Object.values(status),
        required: true,
        default: status.available
    },
}, { timestamps: true });

schema.methods.toJSON = function () {
    let obj = this.toObject();

    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.__v;

    return obj;
};

const model = mongoose.model("book", schema);
module.exports = {BookModel: model, BookStatus: status};

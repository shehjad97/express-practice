const httpStatus = require("http-status");
const apiResponse = require("./apiResponse");

module.exports = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(err => apiResponse(res, httpStatus.BAD_REQUEST, {message: 'message' in err ? err.message : 'Something went wrong'}));
};

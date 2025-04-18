"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = require("http-status");
// //! Define global error
const globalErrorHandler = (err, req, res, next) => {
    const error = err;
    const statusCode = error.statusCode || http_status_1.status.INTERNAL_SERVER_ERROR;
    res.status(statusCode).json({
        success: false,
        status: error.statusCode,
        message: error.message || "Something went wrong",
        stack: process.env.NODE_ENV === "DEVELOPMENT" ? error.stack : undefined,
    });
    next();
};
exports.default = globalErrorHandler;

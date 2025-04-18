"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseHandler = (res, success, message, data) => {
    res.json({
        success,
        message,
        data,
    });
};
exports.default = responseHandler;

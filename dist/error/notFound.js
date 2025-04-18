"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = require("http-status");
const notFound = (req, res, next) => {
    res.status(http_status_1.status.NOT_FOUND).json({
        success: false,
        status: 404,
        message: 'API Not found !!',
    });
};
exports.default = notFound;

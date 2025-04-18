"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./error/globalErrorHandler"));
const notFound_1 = __importDefault(require("./error/notFound"));
const customer_routes_1 = require("./modules/Customer/customer.routes");
const bike_routes_1 = require("./modules/Bike/bike.routes");
const record_routes_1 = require("./modules/ServiceRecord/record.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/v1', customer_routes_1.customerRoutes);
app.use('/api/v1', bike_routes_1.bikeRoutes);
app.use('/api/v1', record_routes_1.recordRoutes);
// global error handler
app.use(globalErrorHandler_1.default);
// not found
app.use(notFound_1.default);
exports.default = app;

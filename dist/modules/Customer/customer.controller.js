"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const responseHandler_1 = __importDefault(require("../../utils/responseHandler"));
const customer_service_1 = require("./customer.service");
// Create new customer
const createCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.CustomerServices.createCustomer(req.body);
    (0, responseHandler_1.default)(res, true, "Created Successfully", result);
}));
// Get all customers
const getAllCustomers = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield customer_service_1.CustomerServices.getAllCustomers();
    (0, responseHandler_1.default)(res, true, "Customers fetched successfully.", result);
}));
// Get a specific customer by ID
const getSpecificCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const result = yield customer_service_1.CustomerServices.getSpecificCustomer(customerId);
    (0, responseHandler_1.default)(res, true, "Customer fetched successfully.", result);
}));
// Update customer details
const updateCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    const result = yield customer_service_1.CustomerServices.updateCustomer(customerId, req.body);
    (0, responseHandler_1.default)(res, true, "Customer updated successfully.", result);
}));
// Delete customer
const deleteCustomer = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    yield customer_service_1.CustomerServices.deleteCustomer(customerId);
    (0, responseHandler_1.default)(res, true, "Customer deleted successfully.");
}));
exports.CustomerControllers = {
    createCustomer,
    getAllCustomers,
    getSpecificCustomer,
    updateCustomer,
    deleteCustomer,
};

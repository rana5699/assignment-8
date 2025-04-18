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
exports.CustomerServices = void 0;
const prismaClient_1 = __importDefault(require("../../utils/prismaClient"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
// Create new customer
const createCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingCustomer = yield prismaClient_1.default.customer.findUnique({
        where: {
            email: payload.email,
        },
    });
    if (existingCustomer) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, "Customer already exists");
    }
    const result = yield prismaClient_1.default.customer.create({
        data: payload,
    });
    return result;
});
// Get all customers
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.default.customer.findMany();
    return result;
});
// Get a specific customer by ID
const getSpecificCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.default.customer.findUnique({
        where: {
            customerId: customerId,
        },
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Customer not found!");
    }
    return result;
});
// Update customer details
const updateCustomer = (customerId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existCustomer = yield prismaClient_1.default.customer.findUnique({
        where: {
            customerId: customerId,
        },
    });
    if (!existCustomer) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Customer not found!");
    }
    const result = yield prismaClient_1.default.customer.update({
        where: {
            customerId: customerId,
        },
        data: Object.assign({}, payload),
    });
    return result;
});
// Delete customer
const deleteCustomer = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    const existCustomer = yield prismaClient_1.default.customer.findUnique({
        where: {
            customerId: customerId,
        },
    });
    if (!existCustomer) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Customer not found!");
    }
    const result = yield prismaClient_1.default.customer.delete({
        where: {
            customerId: customerId,
        },
    });
    return result;
});
exports.CustomerServices = {
    createCustomer,
    getAllCustomers,
    getSpecificCustomer,
    updateCustomer,
    deleteCustomer
};

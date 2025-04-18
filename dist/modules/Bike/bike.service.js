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
exports.BikeServices = void 0;
const prismaClient_1 = __importDefault(require("../../utils/prismaClient"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
// Add a new bike
const createBike = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = payload.customerId;
    const existCustomer = yield prismaClient_1.default.customer.findUnique({
        where: {
            customerId: customerId
        }
    });
    if (!existCustomer) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Customer not found!");
    }
    const result = yield prismaClient_1.default.bike.create({
        data: payload
    });
    return result;
});
// Get all bikes
const getAllBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.default.bike.findMany();
    return result;
});
// Get a specific bike by bikeID
const getSpecificBike = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.default.bike.findUnique({
        where: {
            bikeId: bikeId,
        },
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Bike not found!");
    }
    return result;
});
exports.BikeServices = {
    createBike,
    getAllBikes,
    getSpecificBike
};

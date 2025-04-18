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
exports.RecordServices = void 0;
const prismaClient_1 = __importDefault(require("../../utils/prismaClient"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const http_status_1 = __importDefault(require("http-status"));
// Create a service record
const createRecordService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeId = payload.bikeId;
    const existBike = yield prismaClient_1.default.bike.findUnique({
        where: {
            bikeId: bikeId,
        },
    });
    if (!existBike) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Bike not found!");
    }
    const result = yield prismaClient_1.default.serviceRecord.create({
        data: payload,
    });
    return result;
});
// Get all service records
const getAllRecordServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.default.serviceRecord.findMany();
    return result;
});
// Get a specific service record
const getSpecificRecordService = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.default.serviceRecord.findUnique({
        where: {
            serviceId: serviceId,
        },
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Service record not found!");
    }
    return result;
});
// Mark a service as completed
const markAsCompleted = (serviceId, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    const existingService = yield prismaClient_1.default.serviceRecord.findUnique({
        where: { serviceId },
    });
    if (!existingService) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Service not found!");
    }
    // Update the service
    const updatedService = yield prismaClient_1.default.serviceRecord.update({
        where: { serviceId },
        data: {
            status: "done",
            completionDate: completionDate ? new Date(completionDate) : new Date(),
        },
    });
    return updatedService;
});
const getPendingOrOverdue = () => __awaiter(void 0, void 0, void 0, function* () {
    const today = new Date();
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    const result = yield prismaClient_1.default.serviceRecord.findMany({
        where: {
            status: {
                in: ["pending", "in_progress"],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
        orderBy: {
            serviceDate: "asc",
        },
    });
    return result;
});
exports.RecordServices = {
    createRecordService,
    getAllRecordServices,
    getSpecificRecordService,
    markAsCompleted,
    getPendingOrOverdue,
};

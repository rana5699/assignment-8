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
exports.RecordControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const responseHandler_1 = __importDefault(require("../../utils/responseHandler"));
const record_service_1 = require("./record.service");
//  Create a service record
const createRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield record_service_1.RecordServices.createRecordService(req.body);
    (0, responseHandler_1.default)(res, true, "Service record created successfully.", result);
}));
// Get all Records
const getAllRecordServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield record_service_1.RecordServices.getAllRecordServices();
    (0, responseHandler_1.default)(res, true, "Service records fetched successfully.", result);
}));
// Get a specific record by ID
const getSpecificRecordService = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield record_service_1.RecordServices.getSpecificRecordService(serviceId);
    (0, responseHandler_1.default)(res, true, "Service record fetched successfully.", result);
}));
// Mark as completed
const markServiceAsCompleted = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const completeDate = req.body;
    const result = yield record_service_1.RecordServices.markAsCompleted(serviceId, completeDate === null || completeDate === void 0 ? void 0 : completeDate.completionDate);
    (0, responseHandler_1.default)(res, true, "Service marked as completed.", result);
}));
const getPendingOrOverdue = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield record_service_1.RecordServices.getPendingOrOverdue();
    (0, responseHandler_1.default)(res, true, "Overdue or pending services fetched successfully.", result);
}));
exports.RecordControllers = {
    createRecord,
    getAllRecordServices,
    getSpecificRecordService,
    markServiceAsCompleted,
    getPendingOrOverdue
};

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
exports.BikeControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const responseHandler_1 = __importDefault(require("../../utils/responseHandler"));
const bike_service_1 = require("./bike.service");
// Add a new bike 
const createBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.BikeServices.createBike(req.body);
    (0, responseHandler_1.default)(res, true, "Bike added successfully.", result);
}));
// Get all bikes
const getAllBikes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.BikeServices.getAllBikes();
    (0, responseHandler_1.default)(res, true, "Bikes fetched successfully.", result);
}));
// Get a specific bike by ID
const getSpecificBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId } = req.params;
    const result = yield bike_service_1.BikeServices.getSpecificBike(bikeId);
    (0, responseHandler_1.default)(res, true, "Bike fetched successfully.", result);
}));
exports.BikeControllers = {
    createBike,
    getAllBikes,
    getSpecificBike
};

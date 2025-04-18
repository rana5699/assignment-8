"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const record_controller_1 = require("./record.controller");
const router = express_1.default.Router();
router.post("/services", record_controller_1.RecordControllers.createRecord);
router.get("/services", record_controller_1.RecordControllers.getAllRecordServices);
router.get("/services/:serviceId", record_controller_1.RecordControllers.getSpecificRecordService);
router.put("/services/:serviceId/complete", record_controller_1.RecordControllers.markServiceAsCompleted);
// Bonus
router.get("/service/status", record_controller_1.RecordControllers.getPendingOrOverdue);
exports.recordRoutes = router;

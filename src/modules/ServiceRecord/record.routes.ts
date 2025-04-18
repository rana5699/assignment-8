import express from "express";
import { RecordControllers } from "./record.controller";

const router = express.Router();

// Bonus
router.get("/services/status",RecordControllers.getPendingOrOverdue)

router.post("/services", RecordControllers.createRecord);

router.get("/services", RecordControllers.getAllRecordServices);

router.get("/services/:serviceId", RecordControllers.getSpecificRecordService);

router.put(
  "/services/:serviceId/complete",
  RecordControllers.markServiceAsCompleted
);





export const recordRoutes = router;

import express from "express";
import { RecordControllers } from "./record.controller";

const router = express.Router();

router.post("/services", RecordControllers.createRecord);

router.get("/services", RecordControllers.getAllRecordServices);

router.get("/services/:serviceId", RecordControllers.getSpecificRecordService);

router.put(
  "/services/:serviceId/complete",
  RecordControllers.markServiceAsCompleted
);


// Bonus
router.get("/service/status",RecordControllers.getPendingOrOverdue)


export const recordRoutes = router;

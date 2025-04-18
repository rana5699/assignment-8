import catchAsync from "../../utils/catchAsync";
import responseHandler from "../../utils/responseHandler";
import { RecordServices } from "./record.service";

//  Create a service record
const createRecord = catchAsync(async (req, res) => {
  const result = await RecordServices.createRecordService(req.body);

  responseHandler(res, true, "Service record created successfully.", result);
});

// Get all Records
const getAllRecordServices = catchAsync(async (req, res) => {
  const result = await RecordServices.getAllRecordServices();

  responseHandler(res, true, "Service records fetched successfully.", result);
});

// Get a specific record by ID
const getSpecificRecordService = catchAsync(async (req, res) => {
  const { serviceId } = req.params;

  const result = await RecordServices.getSpecificRecordService(serviceId);

  responseHandler(res, true, "Service record fetched successfully.", result);
});

// Mark as completed
const markServiceAsCompleted = catchAsync(async (req, res) => {
  const { serviceId } = req.params;
  const  completeDate  = req.body;

  const result = await RecordServices.markAsCompleted(serviceId, completeDate?.completionDate);

  responseHandler(res, true, "Service marked as completed.", result);
});


const getPendingOrOverdue = catchAsync(async(req,res)=>{
  const result = await RecordServices.getPendingOrOverdue();

  responseHandler(res, true, "Overdue or pending services fetched successfully.", result);
})

export const RecordControllers = {
  createRecord,
  getAllRecordServices,
  getSpecificRecordService,
  markServiceAsCompleted,
  getPendingOrOverdue
};

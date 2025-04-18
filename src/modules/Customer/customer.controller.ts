import catchAsync from "../../utils/catchAsync";
import responseHandler from "../../utils/responseHandler";
import { CustomerServices } from "./customer.service";

// Create new customer
const createCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.createCustomer(req.body);
  responseHandler(res, true, "Created Successfully", result);
});

// Get all customers
const getAllCustomers = catchAsync(async (req, res) => {
  const result = await CustomerServices.getAllCustomers();

  responseHandler(res, true, "Customers fetched successfully.", result);
});

// Get a specific customer by ID
const getSpecificCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;

  const result = await CustomerServices.getSpecificCustomer(customerId);

  responseHandler(res, true, "Customer fetched successfully.", result);
});

// Update customer details
const updateCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;

  const result = await CustomerServices.updateCustomer(customerId, req.body);

  responseHandler(res, true, "Customer updated successfully.", result);
});

// Delete customer
const deleteCustomer = catchAsync(async (req, res) => {
  const { customerId } = req.params;
  
  await CustomerServices.deleteCustomer(customerId);

  responseHandler(res, true, "Customer deleted successfully.");
});

export const CustomerControllers = {
  createCustomer,
  getAllCustomers,
  getSpecificCustomer,
  updateCustomer,
  deleteCustomer,
};

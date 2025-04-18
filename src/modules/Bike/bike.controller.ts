import catchAsync from "../../utils/catchAsync";
import responseHandler from "../../utils/responseHandler";
import { BikeServices } from "./bike.service";

// Add a new bike 
const createBike = catchAsync(async (req, res) => {

  const result = await BikeServices.createBike(req.body);

  responseHandler(res, true, "Bike added successfully.", result);

});

// Get all bikes
const getAllBikes = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBikes();

  responseHandler(res, true, "Bikes fetched successfully.", result);
});

// Get a specific bike by ID
const getSpecificBike = catchAsync(async (req, res) => {
  const { bikeId } = req.params;

  const result = await BikeServices.getSpecificBike(bikeId);

  responseHandler(res, true, "Bike fetched successfully.", result);
});

export const BikeControllers = {
  createBike,
  getAllBikes,
  getSpecificBike
};

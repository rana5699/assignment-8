import { Prisma } from "@prisma/client";
import prisma from "../../utils/prismaClient";
import AppError from "../../error/AppError";
import status from "http-status";

// Add a new bike
const createBike =async (payload:Prisma.BikeCreateInput) => {


  const customerId = (payload as any).customerId;

  const existCustomer = await prisma.customer.findUnique({
    where:{
      customerId:customerId
    }
  })

  if (!existCustomer) {
    throw new AppError(status.NOT_FOUND,"Customer not found!")
  }

  const result = await prisma.bike.create({
    data:payload
  })

  return result

  };

  // Get all bikes
const getAllBikes = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

// Get a specific bike by bikeID
const getSpecificBike= async (bikeId: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: bikeId,
    },
  });

  if (!result) {
    throw new AppError(status.NOT_FOUND,"Bike not found!")
  }
  return result;
};
  
  export const BikeServices = {
    createBike,
    getAllBikes,
    getSpecificBike
  };
  
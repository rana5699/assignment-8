import { Prisma } from "@prisma/client";
import prisma from "../../utils/prismaClient";
import AppError from "../../error/AppError";
import status from "http-status";

// Create a service record
const createRecordService = async (
  payload: Prisma.ServiceRecordCreateInput
) => {
  const bikeId = (payload as any).bikeId;

  const existBike = await prisma.bike.findUnique({
    where: {
      bikeId: bikeId,
    },
  });

  if (!existBike) {
    throw new AppError(status.NOT_FOUND, "Bike not found!");
  }

  const result = await prisma.serviceRecord.create({
    data: payload,
  });

  return result;
};

// Get all service records
const getAllRecordServices = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

// Get a specific service record
const getSpecificRecordService = async (serviceId: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: serviceId,
    },
  });

  if (!result) {
    throw new AppError(status.NOT_FOUND, "Service record not found!");
  }

  return result;
};

// Mark a service as completed
const markAsCompleted = async (serviceId: string, completionDate?: string) => {
  const existingService = await prisma.serviceRecord.findUnique({
    where: { serviceId },
  });

  if (!existingService) {
    throw new AppError(status.NOT_FOUND, "Service not found!");
  }

  // Update the service
  const updatedService = await prisma.serviceRecord.update({
    where: { serviceId },
    data: {
      status: "done",
      completionDate: completionDate ? new Date(completionDate) : new Date(),
    },
  });

  return updatedService;
};

const getPendingOrOverdue = async () => {
  const today = new Date();
  const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  const result = await prisma.serviceRecord.findMany({
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
};

export const RecordServices = {
  createRecordService,
  getAllRecordServices,
  getSpecificRecordService,
  markAsCompleted,
  getPendingOrOverdue,
};

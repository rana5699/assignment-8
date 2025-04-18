import { Prisma } from "@prisma/client";
import prisma from "../../utils/prismaClient";
import AppError from "../../error/AppError";
import status from "http-status";

// Create new customer
const createCustomer = async (payload: Prisma.CustomerCreateInput) => {
  const existingCustomer = await prisma.customer.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (existingCustomer) {
    throw new AppError(status.CONFLICT, "Customer already exists");
  }

  const result = await prisma.customer.create({
    data: payload,
  });

  return result;
};

// Get all customers
const getAllCustomers = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

// Get a specific customer by ID
const getSpecificCustomer = async (customerId: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: customerId,
    },
  });

  if (!result) {
    throw new AppError(status.NOT_FOUND,"Customer not found!")
  }

  return result;
};

// Update customer details
const updateCustomer = async (
  customerId: string,
  payload: Partial<Prisma.CustomerCreateInput>
) => {


  const existCustomer = await prisma.customer.findUnique({
    where: {
      customerId: customerId,
    },
  });

  if (!existCustomer) {
    throw new AppError(status.NOT_FOUND,"Customer not found!")
  }

  const result = await prisma.customer.update({
    where: {
      customerId: customerId,
    },
    data: {
     ...payload
    },
  });
  return result;
};

// Delete customer
const deleteCustomer = async (
  customerId: string,
) => {

  const existCustomer = await prisma.customer.findUnique({
    where: {
      customerId: customerId,
    },
  });

  if (!existCustomer) {
    throw new AppError(status.NOT_FOUND,"Customer not found!")
  }


  const result = await prisma.customer.delete({
    where: {
      customerId: customerId,
    },
  });
  return result;
};

export const CustomerServices = {
  createCustomer,
  getAllCustomers,
  getSpecificCustomer,
  updateCustomer,
  deleteCustomer
};

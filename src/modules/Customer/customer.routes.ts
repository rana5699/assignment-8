import express from "express";
import { CustomerControllers } from "./customer.controller";

const router = express.Router();

router.post("/customers", CustomerControllers.createCustomer);

router.get("/customers", CustomerControllers.getAllCustomers);

router.get("/customers/:customerId", CustomerControllers.getSpecificCustomer);

router.put("/customers/:customerId", CustomerControllers.updateCustomer);

router.delete("/customers/:customerId", CustomerControllers.deleteCustomer);

export const customerRoutes = router;

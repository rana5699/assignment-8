"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const router = express_1.default.Router();
router.post("/customers", customer_controller_1.CustomerControllers.createCustomer);
router.get("/customers", customer_controller_1.CustomerControllers.getAllCustomers);
router.get("/customers/:customerId", customer_controller_1.CustomerControllers.getSpecificCustomer);
router.put("/customers/:customerId", customer_controller_1.CustomerControllers.updateCustomer);
router.delete("/customers/:customerId", customer_controller_1.CustomerControllers.deleteCustomer);
exports.customerRoutes = router;

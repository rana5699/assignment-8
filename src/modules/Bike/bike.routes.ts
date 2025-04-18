import express from "express";
import { BikeControllers } from "./bike.controller";


const router = express.Router();

router.post("/bikes",BikeControllers.createBike)

router.get("/bikes", BikeControllers.getAllBikes);

router.get("/bikes/:bikeId", BikeControllers.getSpecificBike);

export const bikeRoutes = router
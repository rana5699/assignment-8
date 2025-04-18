import express, { Application, Request, Response } from "express"
import cors from "cors"
import globalErrorHandler from "./error/globalErrorHandler"
import notFound from "./error/notFound"
import { customerRoutes } from "./modules/Customer/customer.routes"
import { bikeRoutes } from "./modules/Bike/bike.routes"
import { recordRoutes } from "./modules/ServiceRecord/record.routes"

const app: Application = express()

app.use(cors())
app.use(express.json())


app.use('/api/v1', customerRoutes);
app.use('/api/v1', bikeRoutes);
app.use('/api/v1', recordRoutes);

// global error handler
app.use(globalErrorHandler)

// not found
app.use(notFound);

export default app
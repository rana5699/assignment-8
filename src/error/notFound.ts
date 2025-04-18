/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { status } from "http-status";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    status: 404,
    message: 'API Not found !!',
  });
};
export default notFound;
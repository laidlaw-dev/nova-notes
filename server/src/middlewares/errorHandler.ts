import { Request, Response, NextFunction } from 'express';

export class ApiError extends Error {
  statusCode?: number;

  constructor(message?: string, statusCode?: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: ApiError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // Default to 500 if no statusCode is set
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    // Only show stack trace in development
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

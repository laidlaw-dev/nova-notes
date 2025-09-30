import { NextFunction } from 'express';
import { errorHandler, ApiError } from './errorHandler';
import httpMocks from 'node-mocks-http';

describe('errorHandler', () => {
  it('should respond with 500 and default message if no statusCode or message is provided', () => {
    const err = new ApiError();
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    errorHandler(err, req, res, {} as NextFunction);

    expect(res.statusCode).toBe(500);
    const data = res._getJSONData();
    expect(data).toMatchObject({
      success: false,
      message: 'Internal Server Error',
    });
  });

  it('should respond with provided statusCode and message', () => {
    const err = new ApiError('Custom error', 404);
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();

    errorHandler(err, req, res, {} as NextFunction);

    expect(res.statusCode).toBe(404);
    const data = res._getJSONData();
    expect(data).toMatchObject({
      success: false,
      message: 'Custom error',
    });
  });

  it('should include stack trace in development mode', () => {
    const err = new ApiError('Dev error', 400);
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'development';

    errorHandler(err, req, res, {} as NextFunction);

    const data = res._getJSONData();
    expect(data.stack).toBe(err.stack);

    process.env.NODE_ENV = originalEnv;
  });

  it('should not include stack trace outside development mode', () => {
    const err = new ApiError('Prod error', 401);
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const originalEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production';

    errorHandler(err, req, res, {} as NextFunction);

    const data = res._getJSONData();
    expect(data.stack).toBeUndefined();

    process.env.NODE_ENV = originalEnv;
  });
});

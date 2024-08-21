// lib/mongoErrorHandler.ts
import { MongoError } from "mongodb";

export function handleMongoError(error: MongoError): {
  status: number;
  message: string;
} {
  if (error.code === 11000) {
    // Duplicate key error
    return {
      status: 400,
      message: "This username already exists",
    };
  } else if (error.code === 121) {
    // Validation error
    return {
      status: 400,
      message: "Invalid Data Provided",
    };
  } else {
    // Generic MongoDB error
    return {
      status: 500,
      message: "An internal server error occurred.",
    };
  }
}

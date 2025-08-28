export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number, name = "AppError") {
    super(message);
    this.name = name;
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, new.target.prototype);
  }
};

export class ValidationError extends AppError {
  constructor(message: string) {
    super(message, 400, "ValidationError");
    Object.setPrototypeOf(this, new.target.prototype);
  }
};

export class AuthError extends AppError {
  constructor(message = "Unauthorized") {
    super(message, 401, "AuthError");
    Object.setPrototypeOf(this, new.target.prototype);
  }
};

export class NotFoundError extends AppError {
  constructor(message = "Not Found") {
    super(message, 404, "NotFoundError");
  }
};
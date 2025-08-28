export declare class AppError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number, name?: string);
}
export declare class ValidationError extends AppError {
    constructor(message: string);
}
export declare class AuthError extends AppError {
    constructor(message?: string);
}
export declare class NotFoundError extends AppError {
    constructor(message?: string);
}
//# sourceMappingURL=AppError.d.ts.map
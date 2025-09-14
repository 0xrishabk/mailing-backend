export interface ApiResponse {
    success: boolean;
    message: string;
    data?: any;
    errors?: any;
    timestamp: string;
}
export interface ContactResponse extends ApiResponse {
    count?: number;
}
//# sourceMappingURL=ResponseModel.d.ts.map
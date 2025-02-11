export interface ApiError {
    status: number;
    data: {
        message: string;
        errors?: Record<string, string[]>;
    };
}

export interface PaginatedResponse<T> {
    data: T[];
    meta: {
        currentPage: number;
        totalPages: number;
        totalItems: number;
    };
}
export interface DefaultResponseType {
    message: string;
    success: boolean;
    data: object,
    error: object,
}

export interface DefaultResponseWithDetailsType {
    message: string;
    success: boolean;
    details: object
}

export interface DefaultResponseDataType {
    data: DefaultResponseType
}
export interface DefaultResponseType {
    message: string;
    success: boolean;
}

export interface DefaultResponseWithDetailsType {
    message: string;
    success: boolean;
    details: object
}

export interface DefaultResponseDataType {
    data: DefaultResponseType
}
export interface DefaultResponseDataWithDetailsType {
    data: DefaultResponseWithDetailsType
}
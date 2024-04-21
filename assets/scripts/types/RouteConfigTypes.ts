export interface RouteConfigurationType {
    auth: boolean;
    title: string | null;
    layout: any;
    description?: string;
    middlewareMethod?: (to: any, from: any) => void;
}
export interface RouteConfigurations {
    [path: string]: RouteConfigurationType;
}
export interface GeneralModel {
    renderId: number | any,
    currentRoute: CurrentRoute
}
export interface CurrentRoute {
    path: string | null,
    configs: object,
    readyForView: boolean | null
}
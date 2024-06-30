import {axiosInstance} from "~/services/queryManager";

export async function getAllPlaces(withBrand: boolean){
    return await axiosInstance.get(`/v1/place/all?with_brand=${withBrand}`);
}
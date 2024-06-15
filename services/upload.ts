import { axiosInstance } from "~/services/queryManager";
import type {DefaultResponseType} from "assets/scripts/types/defaultTypes";


export async function uploadService(event : any): Promise<{data: DefaultResponseType}[]> {
    const results = [];
    for (let index in event.target.files) {
        let file = event.target.files[index];
        if(file.name && file.size && file.type === "audio/mpeg"){
            console.log(file)
            const formData = new FormData()
            formData.append('file', file)

            const response = await axiosInstance.post('/v1/upload/example', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            results.push(response);
        }
    }
    return results;
}
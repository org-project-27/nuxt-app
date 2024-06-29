import { axiosInstance } from '~/services/queryManager';
import type { DefaultResponseType } from 'assets/scripts/types/defaultTypes';

export async function uploadService(
    event: any
): Promise<{ url: string; name: string }[]> {
    const results = [];
    for (let index in event.target.files) {
        let file = event.target.files[index];
        if (file.name && file.size) {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axiosInstance.post(
                '/v1/uploader/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            const url = response.data.data.path;
            results.push({ url, name: response.data.data.filename });
        }
    }
    return results;
}

export async function updateService(
    event: any,
    id: string
): Promise<{ url: string; name: string }[]> {
    const results = [];
    for (let index in event.target.files) {
        let file = event.target.files[index];
        if (file.name && file.size) {
            const formData = new FormData();
            formData.append('file', file);

            const response = await axiosInstance.put(
                `/v1/uploader/update/${id ? id : ''}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            const url = response.data.data.path;
            results.push({ url, name: response.data.data.filename });
        }
    }
    return results;
}

export async function deleteService(id: string): Promise<DefaultResponseType> {
    const response = await axiosInstance.delete(`/v1/uploader/delete/${id}`);
    console.log(response.status);
    return response.data;
}

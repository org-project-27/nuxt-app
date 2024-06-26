import { axiosInstance } from '~/services/queryManager';
import type { DefaultResponseType } from 'assets/scripts/types/defaultTypes';

export async function uploadService(
    event: any
): Promise<{ url: string; name: string }[]> {
    const results = [];
    for (let index in event.target.files) {
        let file = event.target.files[index];
        if (file.name && file.size) {
            console.log(file);
            const formData = new FormData();
            formData.append('file', file);

            const response = await axiosInstance.post(
                '/v1/upload/example',
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
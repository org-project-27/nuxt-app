export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { baseApiUrl } = useAppConfig();
    const method : any = event.method.toLowerCase();
    const path = `${baseApiUrl}${event.path.toLowerCase()}`;
    try{
        return await $fetch(path, {
            method,
            body,
            // @ts-ignore
            headers: event.req.headers
        });
    } catch (error: any) {
        setResponseStatus(event, error.statusCode);
        return error.data;
    }

});
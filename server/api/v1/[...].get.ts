export default defineEventHandler(async (event) => {
    const query = getQuery(event);

    const { baseApiUrl } = useAppConfig();
    const method : any = event.method.toLowerCase();
    const path = `${baseApiUrl}${event.path.toLowerCase()}`;
    try{
        return await $fetch(path, {
            method,
            query,
            // @ts-ignore
            headers: event.req.headers
        });
    } catch (error: any) {
        setResponseStatus(event, error.statusCode);
        return error.data;
    }
});
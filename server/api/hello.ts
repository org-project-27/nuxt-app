export default defineEventHandler(async event => {
    const response = { message: "Hello world" };
   return { ...response };
});
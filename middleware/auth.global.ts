import routeConfig from "~/assets/scripts/configs/routeConfig";
import { useAuthStore } from "~/stores/user/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const { path } = to;
    const fromPath = from.path;
    if (process.client) {
        const config = routeConfig[path];
        let {
            isAuthenticated,
            authUser,
            syncTokensFromLocalStorage,
            setAuthProgressIsLoading,
            setAfterAuthPath
        } = useAuthStore();
        syncTokensFromLocalStorage()
        const access_token = localStorage.getItem('access_token');

        if (path) {
            let auth;
            if (access_token && !isAuthenticated) {
                setAuthProgressIsLoading(true);
                auth = await authUser();
            } else {
                setAuthProgressIsLoading(false);
            }
            if (config?.auth && !isAuthenticated) {
                if (path !== fromPath) {
                    setAfterAuthPath(path);
                }
                if (!access_token) {
                    return '/getstarted'
                }
                if (auth && !auth.user_id) {
                    return '/getstarted'
                }
            } else if(path === '/getstarted' && access_token) {
                return '/';
            }
        }
    }
});
import routeConfig from "~/constants/configs/routeConfig";

export default defineNuxtRouteMiddleware((to, from) => {
    let { path } = to;
    if(path.length > 1 && path.endsWith('/')){
        path = path.slice(0, -1);
    }
    const overall = !!Object.keys(to.params).length;
    const config = routeConfig[path]
    if (process.client) {
        if (config) {
            processByConfig(to, from, config);
        } else if (overall) {
            let parentPath: any = path.split('/');
            if (parentPath.length > 1) parentPath[parentPath.length - 1] = "*";
            parentPath = parentPath.join('/');
            const parentConfig = routeConfig[parentPath];
            processByConfig(to, from, parentConfig);
        } else {
            processByConfig(to, from);
        }
    }
});

function processByConfig(to: any, from: object, config = routeConfig.default): void {
    const { brandName } = useAppConfig();
    const { path } = to;
    const { reRenderApp, setCurrentRoute } = useGeneralStore();

    useSeoMeta({
        title: config.title ?
            `${useI18nStore().i18n.global.t(config.title)} | ${brandName}` : brandName,
        description: config.description
    });

    if (config.middlewareMethod) {
        config.middlewareMethod(to, from);
    }

    setPageLayout(config.layout);
    setCurrentRoute({
        path,
        configs: config,
        readyForView: false,
    });

    if (process.client) {
        reRenderApp();
    }
}
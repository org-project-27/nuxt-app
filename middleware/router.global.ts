import routeConfig from "~/assets/scripts/configs/routeConfig";
export default defineNuxtRouteMiddleware((to, from) => {
    const { setStatus } = useFullscreenModal();
    setStatus(false);
    const { path } = to;
    const overall = !!Object.keys(to.params).length;
    const config = routeConfig[path]
    if(config){
        processByConfig(to, from, config);
    } else if (overall){
        let parentPath: any = path.split('/');
        if(parentPath.length > 1) parentPath[parentPath.length - 1] = "*";
        parentPath = parentPath.join('/');
        const parentConfig = routeConfig[parentPath];
        processByConfig(to, from, parentConfig);
    } else {
        processByConfig(to, from);
    }
});

function processByConfig(to: object, from: object, config = routeConfig.default): void {
    const { brandName } = useAppConfig();
    const {i18n} = useI18nStore();
    useSeoMeta({
        title: config.title ? `${i18n.global.t(config.title)} | ${brandName}` : brandName,
        description: config.description
    });
    if(config.middlewareMethod){
        config.middlewareMethod(to, from);
    }
    setPageLayout(config.layout);
}
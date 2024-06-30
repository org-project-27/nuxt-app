import {deepEqualObjects, developerAnnounce, generateUniqueId} from "~/utils/helpers/generalHelpers";

type QueryType = {
    headers: object,
    method: "get" | "post" | "patch" | "put" | "delete" | "head" | "options" | string | undefined,
    url: string | undefined,
    baseURL: string | undefined,
    data: object;
    queryKey: string;
} | any;

let history: Array<QueryType> = [];
let loading: Array<QueryType> = [];
export const useServiceManagementStore = defineStore('serviceManagement', {
    state: () => ({
        history,
        loading,
    }),
    getters: {
        queriesHistory(state){
            return arrayToObjectBy(state.history, 'url');
        },
        queriesLoading(state) {
            return arrayToObjectBy(state.loading, 'url');
        },
    },
    actions: {
        addToQueryHistories(queryKey: string){
            const targetQueryIndex = loading.findIndex(query => query.queryKey === queryKey);
            if(loading[targetQueryIndex]){
                history.push(loading[targetQueryIndex]);
            }
            loading.splice(targetQueryIndex, 1);
        },
        async addToQueriesLoading(config: QueryType) {
            config['queryKey'] = generateUniqueId(10);
            return await checkForDuplicate(config, loading);
        },
        checkQueryIsLoadingByKey(url: string){
            const targetQuery = loading.findIndex(query => query.url === url);
            return !!targetQuery;
        }
    }
});

function arrayToObjectBy(array: Array<any>, by: string){
    const result: { [key: string]: QueryType } = {};
    array.forEach(item => {
        const key: string = item[by];
        result[key] = item;
    });
    return result;
}

async function checkForDuplicate(config: QueryType, base = loading){
    const result = await base.find(exist => {
        if(exist.url === config.url){
            if(exist.baseURL === config.baseURL){
                if(exist.method === config.method){
                    return deepEqualObjects(exist.data, config.data) || deepEqualObjects(exist.params, config.params)
                }
            }
        }
    });
    if(!result){
        loading.push(config)
        return config.queryKey;
    }
    developerAnnounce(`Duplicated axios request blocked to "${config.method.toUpperCase()}: ${config.url}"`, 'warn');
    return null;
}


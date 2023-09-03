import type {RouteRecordRaw} from "vue-router";

// 定义用户数据的小仓库
export interface UserState {
    token: string|null;
    menuRoutes:RouteRecordRaw[],
    name:string|null,
    avatar:string|null
}
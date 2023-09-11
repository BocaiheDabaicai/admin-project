// 统一管理用户相关的接口
import request from "@/utils/request.ts";
import type{loginForm,loginResponseData,userResponseData} from "@/api/user/type.ts";

enum API {
    LOGIN_URL = '/admin/acl/index/login',
    USERINFO_URL = '/admin/acl/index/info',
    LOGOUT_URL = '/admin/acl/index/logout'
}

// 暴露请求函数
export const reqLogin = (data:any) => request.post<any,any>(API.LOGIN_URL,data);
export const reqUserInfo = () => request.get<any,any>(API.USERINFO_URL);
export const reqLogout = () => request.post<any,any>(API.LOGOUT_URL)
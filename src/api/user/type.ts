// 登录接口需要携带的参数TS类型

export interface loginFormData{
    username:string,
    password:string
}

// 请求通用约束
export interface ResponseData {
    code:number,
    message:string,
    ok:boolean
}

// 登录约束
export interface loginResponseData  extends ResponseData{
    data:string
}

// 获取用户信息约束
export interface userInfoResponseData extends ResponseData{
    data:{
        routes:string[],
        buttons:string[],
        roles:string[],
        name:string,
        avatar:string,
    }
}
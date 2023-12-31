import request from "@/utils/request"

enum API {
    // 请求品牌接口
    TRADEMARK_URL = "/admin/product/baseTrademark"
}

// 获取已有品牌接口
export const reqHasTrademark = (page: number, limit: number) => request.get<any, any>(API.TRADEMARK_URL + `/${page}/${limit}`);

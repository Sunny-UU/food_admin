import request from "../axios/axios";

// new
export function commonUpload(data) {
    debugger
    return request({
        url: "/view",
        method: "get",
        data:data
    });
}
// // 订单维护批量导入
// export function shoppingUpload(data) {
//     return request({
//         url: "/Common/ShoppingUpload",
//         method: "post",
//         data
//     });
// }

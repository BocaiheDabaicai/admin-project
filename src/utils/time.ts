// 获取时间函数，判断时间段
export const getTime = () => {
    let hour = new Date().getHours()
    let message:string;
    if(hour<8)
        message = '早上'
    else if (hour<12)
        message = '上午'
    else if(hour<18)
        message = '下午'
    else
        message = '晚上'
    // console.log(hour)
    // console.log(message)
    return message
}
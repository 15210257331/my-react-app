import { axiosInstance } from './config'

// 获取我的订单数据
export const getImages = () =>  {
    return axiosInstance.get('/api/request/picture') 
}

// 获取推荐列表数据
export const getCommend = () => {
    return axiosInstance.get('/goods')
}
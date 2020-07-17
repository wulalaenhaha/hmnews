// 处理用户想干的api
import request from '@/utils/request.js'

// 用户登录  user：mobile，code
export const login = ({mobile,code}) => {
    return request({
        url: `/app/v1_0/authorizations`,
        method:'post',
        data:{
            mobile,
            code
        }
    })
}
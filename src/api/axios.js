import axios from 'axios' //引入axios
import router from '../router'
// axios.defaults.timeout = 5000;  //设置请求超时和post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset-UTF-8';

//请求拦截器（请求发出前处理的一些请求）
axios.interceptors.request.use(
    config => {                 //每次发送请求之前判断store中是否存在token, 然后将token放入header,不用每次请求都手动添加（判断用户是否登录）
        const token = window.localStorage.getItem('token')
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error)
    }
)

//响应拦截器（处理axios拿到服务器返回给我们的数据）
axios.interceptors.response.use(
    response => {
        if (response.state === 200) {
            return response;
        } else {
            return response;
        }
    },
    error => {
        let status = error.response.status
        if (status) {
            switch (status) {
                case 401:
                    // 跳转登录页面并将浏览器的页面 fullPath传过去
                    router.replace({
                        path: '/'
                    });
                    break;
                case 500:
                    //  具体的状态码可以和后台对接
                    break;
                default:
                     Message.console.error(error.response.data.message);
                    break;
            }
            return Promise.reject(error, response);
        }
    }
)

export default axios
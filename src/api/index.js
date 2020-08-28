import axios from './axios'

export const login = (data) => {
    return axios({
        url: '/api/user/login',
        method: 'post',
        data: data
    })
}
export const getUserInfo = (params) => {
    return axios({
        url: '/api/user/userInfo',
        method: 'get',
        params: params
    })
}
export const  getTest = (data) => {
    return axios({
        url:'/api/exam/questions',
        method:'post',
        data: data

    })
}
export const  getTest1 = (params) => {
    return axios({
        url:'/api/exam/examType',
        method:'get',
        params: params

    })
}
export const   getKeCheng = (params) => {
    return axios({
        url:'/api/exam/subject',
        method:'get',
        params: params

    })
}
export const   getTiMu = (params) => {
    return axios({
        url:'/api/exam/getQuestionsType',
        method:'get',
        params: params

    })
}
export const   getInserQuestionsType = (params) => {
    return axios({
        url:'/api/exam/insertQuestionsType',
        method:'get',
        params: params

    })
}
export const  getDelQuestionsType = (data) => {
    return axios({
        url:'/api/exam/delQuestionsType',
        method:'post',
        data: data
    })
}

export const   getQuestionsCondtion = (params) => {
    return axios({
        url:'/api/exam/questions/condtion',
        method:'get',
        params: params

    })
}
export const   getQuestionsNew = (params) => {
    return axios({
        url:'/api/exam/questions/new',
        method:'get',
        params: params

    })
}
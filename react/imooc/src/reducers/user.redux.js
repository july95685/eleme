import axios from 'axios'
import { getRedirectPath } from '../util.js'
//reducer
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const initState = {
    redirectTo:'',
    isAuth:false,
    msg:'',
    user:'',
    pwd:'',
    type:''
}

export function user(state = initState,action) {
    console.log(action)
    switch(action.type) {
        case REGISTER_SUCCESS:
            console.log(getRedirectPath(action.payload))
            return {
                ...state,
                msg: '',
                isAuth: true,
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            }
        case AUTH_SUCCESS: 
            return {
                ...state,
                msg: '',
                isAuth: true,
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            }
        case LOGIN_SUCCESS: 
            return {
                ...state,
                msg: '',
                isAuth: true,
                redirectTo: getRedirectPath(action.payload),
                ...action.payload
            }
        case LOAD_DATA: 
            console.log('LOAD_DATALOAD_DATALOAD_DATA')
            console.log({
                ...state,
                ...action.payload
            })
            return {
                ...state,
                ...action.payload
            }
        case ERROR_MSG:
            return {
                ...state,
                msg: action.msg,
                redirectTo: '',
                isAuth: false
            }
        default:
            return state
    }
}
function registerSuccess(data) {
    return {
        payload:data,
        type: REGISTER_SUCCESS
    }
}
function loginSuccess(data) {
    return {
        payload: data,
        type: LOGIN_SUCCESS
    }
}
function authSuccess(data) {
    return {
        payload: data,
        type: AUTH_SUCCESS
    }
}
function errorMsg(msg) {
    return {
        msg,
        type: ERROR_MSG
    }
}

function loadData(data) {
    console.log('123131')
    return {
        payload: data,
        type: LOAD_DATA
    }
}

export function register({user,pwd,replace,type}){
    if(!user || !pwd || !type){
        return errorMsg('用户名不能为空')
    }
    if(pwd !== replace) {
        return errorMsg('密码不一致')
    }
    console.log(user)
    return dispatch => {
        axios.post('/user/register',{user,pwd,type})
            .then(res => {
                console.log(res)
                if(res.status === 200 && res.data.code === 0) {
                    console.log(user)
                    dispatch(registerSuccess({user,pwd,type}))
                } else {
                    // return dispatch(errorMsg(res.data.msg))
                    // return dispatch => {
                        dispatch(errorMsg(res.data.msg))
                    // }   
                }
            })
        }
    // else {

    //     return dispatch => {
    //         dispatch(errorMsg(res.data.msg))
    //     }
    // }
}
export function userinfo(data) {
    return {
        payload: data,
        type: LOAD_DATA
    }
}

export function login({user,pwd}) {
    if(!user || !pwd){
        console.log('用户名不能为空')
        return errorMsg('用户名不能为空')
    } else {
        return dispatch => {
            axios.post('/user/login',{user,pwd})
                .then(res => {
                    console.log(res)
                    if(res.status === 200 && res.data.code === 0) {
                        dispatch(loginSuccess({user,pwd}))
                    } else {
                        // return dispatch(errorMsg(res.data.msg))
                        //return dispatch => {
                            dispatch(errorMsg(res.data.msg))
                        // }   
                    }
                })
        }
    }
}

export function updata(data) {
    return dispatch => {
        axios.post('/user/update',data)
            .then(res => {
                console.log(res)
                if(res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess(data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }  
            })   
    }
}
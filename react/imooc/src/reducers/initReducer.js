import { handleActions } from 'redux-actions'

const initialState = {
    userInfo: {},
    userType: 3,// 0 plus, 1男 2女 3位置
    loading: false,    // 主页面可以展示了
}

const ACTION_TYPES = {
    FETCH_USER_INFO: 'FETCH_USER_INFO'
}

const initReducer = handleActions({
    // 获取用户信息
    [ACTION_TYPES.FETCH_USER_INFO]: (state, action) => {
        console.log(state)
        console.log(action)
        let result = {
            ...state,
            ...action.payload.data,
            loading: true,
        };
        return result;
    },

},initialState)

export default initReducer;
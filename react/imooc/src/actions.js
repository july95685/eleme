import { createAction } from 'redux-actions'

const ACTION_TYPES = {
    FETCH_USER_INFO: 'FETCH_USER_INFO',
    CLOSE_LOADING: 'CLOSE_LOADING',
    SHOW_LOADING: 'SHOW_LOADING'
}

const fetchUserInfoAction = createAction(ACTION_TYPES.FETCH_USER_INFO, infos => {
    return { ...infos, receivedAt: Date.now() };
});
const showLoadingAction = createAction(ACTION_TYPES.SHOW_LOADING, infos => {
    return { showLayer: true };
});
const closeLoadingAction = createAction(ACTION_TYPES.CLOSE_LOADING, infos => {
    return { showLayer: false };
});


function showLoadLayer() {
    return showLoadingAction();
}
function closeLoadLayer() {
    return closeLoadingAction();
}
// function fetchUserInfo() {
//     console.log('fetchUserInfo12')
//             let action = fetchUserInfoAction({
//                 data: { userInfo: {
//                         name: 'july'
//                     },
//                     userType: 2,// 0 plus, 1男 2女 3位置
//                     loading: true,    // 主页面可以展示了
//                 }
                
//             })
//             return action
// }
function fetchUserInfo() {
    console.log('fetchUserInfo')
    return dispatch => {
        setTimeout(() => {
            let action = fetchUserInfoAction({
                data: { userInfo: {
                        name: 'july'
                    },
                    userType: 2,// 0 plus, 1男 2女 3位置
                    loading: true,    // 主页面可以展示了
                }
                
            })
            dispatch(action);
        },2000)
    }
}

export {
    showLoadLayer,
    closeLoadLayer,
    fetchUserInfo
}

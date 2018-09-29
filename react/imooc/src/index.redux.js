const ADD_GUN = 'addJGQ'
const REMOVE_GUN = 'removeJGQ'
export function counter(sss = 0,action) {
    switch(action.type) {
        case ADD_GUN:
            return sss + 1
        case REMOVE_GUN:
            return sss - 1
        default:
            return 11
    }
}

//action creator
export function addGUN() {
    return {
        type: ADD_GUN
    }
}

export function removeGun() {
    return {
        type: REMOVE_GUN
    }
}

export function addGunAsync() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addGUN())
        }, 2000)
    }
}
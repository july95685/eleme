import { handleActions } from 'redux-actions'

const showLayer = false

const ACTION_TYPES = {
    CLOSE_LOADING: 'CLOSE_LOADING',
    SHOW_LOADING: 'SHOW_LOADING'
}

const isShowLayer = handleActions({
    [ACTION_TYPES.CLOSE_LOADING]: (state, action) => {
        console.log(state)
        console.log(action)
        return action.payload.showLayer;
    },
    [ACTION_TYPES.SHOW_LOADING]: (state, action) => {
        return action.payload.showLayer;
    }

},showLayer)

export default isShowLayer;
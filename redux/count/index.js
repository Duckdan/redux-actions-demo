import { createActions, handleActions, combineActions } from 'redux-actions'
import { INCREMENT, DECREMENT } from '../../utils/constant'

export const { increment, decrement } = createActions({
    [INCREMENT]: (amount = 1) => amount,
    [DECREMENT]: (amount = 1) => -amount
})

//异步调用不要用createAction创建
export const asyncIncrement = (amount=1,timeout)=>{
        //此时使用的redux-thunk实现的异步调用，由redux-thunk调用时会传入dispatch
    return  (dispatch) => {
        setTimeout(() => {
            dispatch(increment(amount))
        }, timeout)
    }
}


const defaultState = 0;
export const countReducer = handleActions({
    [combineActions(increment, decrement)]: (
        state,
        { payload:  amount  }
    ) => {
        return state + amount 
    }
}, defaultState)
import { createAction, handleAction } from 'redux-actions'
import { ADD_PERSON } from "../../utils/constant"

export const addPerson = createAction(ADD_PERSON)

const defaultState = []
export const personReducer = handleAction(
    addPerson,
    //传入的数据都是由{payload:xxx}来接收的，所以需要使用payload进行解构
    (state, { payload: person }) => {
        return  [...state, person] 
    },
    defaultState)
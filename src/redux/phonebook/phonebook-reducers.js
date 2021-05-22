import { combineReducers } from 'redux'
import types from './phonebook-types'

const contacts = (state = [],{ type, payload }) => {
    switch (type) {
        case types.ADD:
            return [...state, payload]
        
        case types.DELETE:
            const newArr = [...state]
            newArr.splice(payload, 1)
            return newArr
        
            default:
            return state
    }
}
const filter = (state = '', {type, payload}) => {
    switch (type) {
        case types.HANDLE_FILTER:
            return payload
        
        default:
            return state
        }
}

export default combineReducers({
    contacts,
    filter
})
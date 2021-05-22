import shortid from 'shortid'
import types from './phonebook-types'
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction(types.ADD, ({ name, number }) => ({
        payload: {
        id: shortid.generate(),
        name,
        number,
    }
}))

// const addTodo = ({ name, number }) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     }
// })

const deleteContacts = createAction(types.DELETE)

// const deleteContacts = (index) => ({
//     type: types.DELETE,
//     payload: index
// })

const changeFilter = createAction(types.HANDLE_FILTER)
// const changeFilter = value => ({
//     type: types.HANDLE_FILTER,
//     payload: value
// })


export default { addTodo, deleteContacts, changeFilter };
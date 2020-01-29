import TYPE from '../types'
import { v4 } from 'node-uuid'

export const updateInput = newInput => ({
   type: TYPE.INPUT,
   newInput
})

export const add = todo => ({
   type: TYPE.ADD,
   key: v4(),
   todo
})

export const check = id => ({
   type: TYPE.CHECK,
   id
})

export const checkAll = allChecked => ({
   type: TYPE.CHECK_ALL,
   allChecked
})

export const edit = (id, isCompleted, todoText) => ({
   type: TYPE.EDIT,
   id,
   isCompleted,
   todoText
})

export const handleEditInput = newInput => ({
   type: TYPE.EDIT_INPUT,
   newInput
})

export const setEditStatus = status => ({
   type: TYPE.EDIT_STATUS,
   status
})

export const remove = id => ({
   type: TYPE.REMOVE,
   id
})

export const changeFilter = filter => ({
   type: TYPE.CHANGE_FILTER,
   filter
})

export const clearCompleted = () => ({ type: TYPE.CLEAR })

export const confirmAction = (status, id, name) => ({
   type: TYPE.CONFIRM,
   status,
   id,
   name
})

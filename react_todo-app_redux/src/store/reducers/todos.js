/* eslint-disable no-case-declarations */
import TYPE from '../types'

const initialState = {
   todoInput: '',
   nextTodo: 0,
   todos: [],
   filter: 'All',
   allChecked: false,
   editInput: '',
   completed: false,
   canAdd: false,
   canEdit: false,
   action: null,
   currentId: null
}

const todosReducer = (state = initialState, action) => {
   switch (action.type) {
      case TYPE.INPUT:
         return {
            ...state,
            todoInput: action.newInput
         }
      case TYPE.ADD:
         return {
            ...state,
            todos: [...state.todos, {
                  id: state.nextTodo,
                  key: action.key,
                  content: action.todo,
                  completed: false
            }],
            nextTodo: state.nextTodo + 1, // increment id counter
            todoInput: '',
            canAdd: false
         }
      case TYPE.REMOVE:
         return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== action.id),
            nextTodo: state.nextTodo - 1 // decrement id counter
         }
      case TYPE.CHECK:
         return {
            ...state,
            todos: state.todos.map(todo => {
                  if (todo.id === Number(action.id)) {
                     return {
                        ...todo,
                        completed: !todo.completed
                     }
                  }
                  return todo
            })
         }
      case TYPE.CHECK_ALL:
         return {
            ...state,
            todos: state.todos.map(todo => {
                  return {
                     ...todo,
                     completed: !state.allChecked
                  }
            }),
            allChecked: !state.allChecked
         }
      case TYPE.EDIT:
         return {
            ...state,
            currentId: action.id,
            canEdit: !action.isCompleted, // disable edit if checked
            editInput: action.todoText
         }
      case TYPE.EDIT_INPUT:
         return {
            ...state,
            editInput: action.newInput
         }
      case TYPE.EDIT_STATUS:
         return {
            ...state,
            canEdit: action.status
         }
      case TYPE.CHANGE_FILTER:
         let filter = ''
         if (action.filter !== '/') {
            filter = /\w+/.exec(action.filter)[0]
         }
         return {
            ...state,
            filter
         }
      case TYPE.CLEAR:
         return {
            ...state,
            todos: state.todos.filter(todo => !todo.completed),
            nextTodo: 0
         }
      case TYPE.CONFIRM:
         return {
            ...state,
            action: action.name,
            currentId: Number(action.id)
         }
      default:
         return state
   }
}

export default todosReducer

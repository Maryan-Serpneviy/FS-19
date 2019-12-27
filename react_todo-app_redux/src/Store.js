const INPUT = 'INPUT'
const ADD = 'ADD'
const CHECK = 'CHECK'
const CHECK_ALL = 'CHECK_ALL'
const EDIT = 'EDIT'
const EDIT_INPUT = 'EDIT_INPUT'
const EDIT_STATUS = 'EDIT_STATUS'
const REMOVE = 'REMOVE'
const FILTER_CHANGE = 'FILTER_CHANGE'
const CLEAR = 'CLEAR'
const CONFIRM = 'CONFIRM'
const HIDE_CONFIRM = 'HIDE_CONFIRM'

const initialState = {
    todoInput: '',
    editInput: '',
    nextTodo: 0,
    todos: [],
    filter: 'All',
    allChecked: false,
    completed: false,
    canAdd: false,
    canEdit: false,
    confirm: false,
    action: null,
    currentId: null
}

export default class Store {
    static reducer(state = initialState, action) {
        switch (action.type) {
            case INPUT:
                return {
                    ...state,
                    todoInput: action.newInput
                }
            case ADD:
                return {
                    ...state,
                    todos: [...state.todos, {
                        id: state.nextTodo,
                        content: action.todo,
                        completed: false
                    }],
                    nextTodo: state.nextTodo + 1,
                    todoInput: '',
                    canAdd: false,
                    confirm: false
                }
            case REMOVE:
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.id),
                    nextTodo: state.nextTodo - 1, // decrement id counter
                    confirm: false
                }
            case CHECK:
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
                    }),
                    confirm: false
                }
            case CHECK_ALL:
                return {
                    ...state,
                    todos: state.todos.map(todo => {
                        return {
                            ...todo,
                            completed: !state.allChecked
                        }
                    }),
                    allChecked: !state.allChecked,
                    confirm: false
                }
            case EDIT:
                return {
                    ...state,
                    currentId: action.id,
                    canEdit: !action.isCompleted, // disable edit if checked
                    confirm: false,
                    editInput: action.todoText
                }
            case EDIT_INPUT:
                return {
                    ...state,
                    editInput: action.newInput
                }
            case EDIT_STATUS:
                return {
                    ...state,
                    canEdit: action.status
                }
            case FILTER_CHANGE:
                return {
                    ...state,
                    filter: action.filter,
                    confirm: false
                }
            case CLEAR:
                return {
                    ...state,
                    confirm: false,
                    todos: state.todos.filter(todo => !todo.completed),
                    nextTodo: 0
                }
            case CONFIRM:
                return {
                    ...state,
                    confirm: !action.status,
                    action: action.name,
                    currentId: Number(action.id)
                }
            case HIDE_CONFIRM:
                return {
                    ...state,
                    confirm: false
                }
            default:
                return state
        }
    }

    static updateInput(newInput) {
        return {
            type: INPUT,
            newInput
        }
    }

    static add(todo) {
        return {
            type: ADD,
            todo
        }
    }

    static check(id) {
        return {
            type: CHECK,
            id
        }
    }

    static checkAll(allChecked) {
        return {
            type: CHECK_ALL,
            allChecked
        }
    }

    static edit(id, isCompleted, todoText) {
        return {
            type: EDIT,
            id,
            isCompleted,
            todoText
        }
    }

    static handleEditInput(newInput) {
        return {
            type: EDIT_INPUT,
            newInput
        }
    }

    static setEditStatus(status) {
        return {
            type: EDIT_STATUS,
            status
        }
    }

    static remove(id) {
        return {
            type: REMOVE,
            id
        }
    }

    static changeFilter(filter) {
        return {
            type: FILTER_CHANGE,
            filter
        }
    }

    static clearCompleted() {
        return {
            type: CLEAR
        }
    }

    static confirmAction(status, id, name) {
        return {
            type: CONFIRM,
            status,
            id,
            name
        }
    }

    static hideConfirm() {
        return {
            type: HIDE_CONFIRM
        }
    }
}

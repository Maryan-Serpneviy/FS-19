import Action from './constants'

export default class Store {
    static initialState = {
        todoInput: '',
        nextTodo: 0,
        todos: [],
        filter: 'All',
        allChecked: false,
        editInput: '',
        completed: false,
        canAdd: false,
        canEdit: false,
        confirm: false,
        action: null,
        currentId: null
    }

    static reducer(state = Store.initialState, action) {
        switch (action.type) {
            case Action.INPUT:
                return {
                    ...state,
                    todoInput: action.newInput
                }
            case Action.ADD:
                return {
                    ...state,
                    todos: [...state.todos, {
                        id: state.nextTodo,
                        content: action.todo,
                        completed: false
                    }],
                    nextTodo: state.nextTodo + 1, // increment id counter
                    todoInput: '',
                    canAdd: false,
                    confirm: false
                }
            case Action.REMOVE:
                return {
                    ...state,
                    todos: state.todos.filter(todo => todo.id !== action.id),
                    nextTodo: state.nextTodo - 1, // decrement id counter
                    confirm: false
                }
            case Action.CHECK:
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
            case Action.CHECK_ALL:
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
            case Action.EDIT:
                console.log(action)
                return {
                    ...state,
                    currentId: action.id,
                    canEdit: !action.isCompleted, // disable edit if checked
                    confirm: false,
                    editInput: action.todoText
                }
            case Action.EDIT_INPUT:
                return {
                    ...state,
                    editInput: action.newInput
                }
            case Action.EDIT_STATUS:
                return {
                    ...state,
                    canEdit: action.status
                }
            case Action.FILTER_CHANGE:
                return {
                    ...state,
                    filter: action.filter,
                    confirm: false
                }
            case Action.CLEAR:
                return {
                    ...state,
                    confirm: false,
                    todos: state.todos.filter(todo => !todo.completed),
                    nextTodo: 0
                }
            case Action.CONFIRM:
                return {
                    ...state,
                    confirm: !action.status,
                    action: action.name,
                    currentId: Number(action.id)
                }
            case Action.HIDE_CONFIRM:
                return {
                    ...state,
                    confirm: false
                }
            default:
                return state
        }
    }

    static updateInput = newInput => ({
        type: Action.INPUT,
        newInput
    })

    static add = todo => ({
        type: Action.ADD,
        todo
    })

    static check = id => ({
        type: Action.CHECK,
        id
    })

    static checkAll = allChecked => ({
        type: Action.CHECK_ALL,
        allChecked
    })

    static edit = (id, isCompleted, todoText) => ({
        type: Action.EDIT,
        id,
        isCompleted,
        todoText
    })

    static handleEditInput = newInput => ({
        type: Action.EDIT_INPUT,
        newInput
    })

    static setEditStatus = status => ({
        type: Action.EDIT_STATUS,
        status
    })

    static remove = id => ({
        type: Action.REMOVE,
        id
    })

    static changeFilter = filter => ({
        type: Action.FILTER_CHANGE,
        filter
    })

    static clearCompleted = () => ({ type: Action.CLEAR })

    static confirmAction = (status, id, name) => ({
        type: Action.CONFIRM,
        status,
        id,
        name
    })

    static hideConfirm = () => ({ type: Action.HIDE_CONFIRM })
}

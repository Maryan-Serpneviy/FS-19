const ACTIVATE = 'activate'
const MOVE_UP = 'moveup'
const MOVE_DOWN = 'movedown'
const EDIT = 'edit'
const DELETE = 'delete'
const CANCEL = 'cancel'

const initState = {
    items: ['Apron', 'Belt', 'Cardigan', 'Dress', 'Earrings', 'Fur coat', 'Gloves', 'Hat'],
    selected: null,
    selectedIndex: null
}

export default class Storage {
    static reducer = (state = initState, action) => {
        let curr = null
        let newItems = []
    
        switch(action.type) {
            case EDIT:
                newItems = [...state.items]
                newItems[action.id] = action.newText
                return {
                    ...state,
                    items: newItems,
                    selectedIndex: null,
                }
            case DELETE:
                newItems = [...state.items]
                newItems.splice(action.id, 1)
                return {
                    ...state,
                    items: newItems,
                    selectedIndex: null
                }
            case CANCEL:
                return {
                    ...state,
                    selectedIndex: null
                }
            case ACTIVATE:
                return {
                    ...state,
                    selected: action.selected,
                    selectedIndex: state.items.indexOf(action.selected.textContent)
                }
            case MOVE_UP:
                curr = state.items.indexOf(state.selected.textContent)
                newItems = [...state.items];
                [newItems[curr], newItems[curr - 1]] = [newItems[curr - 1], newItems[curr]]
                return {
                    ...state,
                    items: newItems,
                    selectedIndex: state.selectedIndex - 1
                }
            case MOVE_DOWN:
                curr = state.items.indexOf(state.selected.textContent)
                newItems = [...state.items];
                [newItems[curr], newItems[curr + 1]] = [newItems[curr + 1], newItems[curr]]
                return {
                    ...state,
                    items: newItems,
                    selectedIndex: state.selectedIndex + 1
                }
            default:
                return state
        }
    }
    
    static activate = target => {
        return {
            type: ACTIVATE,
            selected: target
        }
    }
    
    static moveup = () => {
        return {
            type: MOVE_UP 
        }
    }
    
    static movedown = () => {
        return {
            type: MOVE_DOWN
        }
    }

    static edit = (id, newText) => {
        return {
            type: EDIT,
            id,
            newText
        }
    }

    static delete = id => {
        return {
            type: DELETE,
            id
        }
    }

    static cancel = () => {
        return {
            type: CANCEL
        }
    }
}
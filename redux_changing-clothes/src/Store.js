const TYPE = {
    ACTIVATE: 'activate',
    MOVE_UP: 'moveup',
    MOVE_DOWN: 'movedown',
    EDIT: 'edit',
    DELETE: 'delete',
    CANCEL: 'cancel'
}

export default class Store {
    static initialState = {
        items: ['Apron', 'Belt', 'Cardigan', 'Dress', 'Earrings', 'Fur coat', 'Gloves', 'Hat'],
        selectedIndex: null
    }

    static reducer = (state = Store.initialState, action) => {
        let curr = null
        let newItems = []
    
        switch(action.type) {
            case TYPE.ACTIVATE:
                return {
                    ...state,
                    selected: action.selected,
                    selectedIndex: state.items.indexOf(action.selected.textContent)
                }
            case TYPE.EDIT:
                newItems = [...state.items]
                newItems[action.id] = action.newText
                return {
                    ...state,
                    items: newItems,
                    selectedIndex: null,
                }
            case TYPE.DELETE:
                newItems = [...state.items]
                newItems.splice(action.id, 1)
                return {
                    ...state,
                    items: newItems,
                    selectedIndex: null
                }
            case TYPE.CANCEL:
                return {
                    ...state,
                    selectedIndex: null
                }
            case TYPE.MOVE_UP:
                curr = state.items.indexOf(state.selected.textContent)
                newItems = [...state.items];
                [newItems[curr], newItems[curr - 1]] = [newItems[curr - 1], newItems[curr]]
                return {
                    ...state,
                    items: newItems,
                    selectedIndex: state.selectedIndex - 1
                }
            case TYPE.MOVE_DOWN:
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
    
    static activate = target => ({
        type: TYPE.ACTIVATE,
        selected: target
    })

    static edit = (id, newText) => ({
        type: TYPE.EDIT,
        id,
        newText
    })

    static delete = id => ({
        type: TYPE.DELETE,
        id
    })

    static cancel = () => ({ type: TYPE.CANCEL })
    static moveup = () => ({ type: TYPE.MOVE_UP })
    static movedown = () => ({ type: TYPE.MOVE_DOWN })
}
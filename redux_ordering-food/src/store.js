const ACTIVATE = 'activate'
const MOVE_UP = 'moveup'
const MOVE_DOWN = 'movedown'

const initState = {
    items: ['Apple', 'Bread', 'Carrot', 'Dumplings', 'Eggs', 'Fish', 'Garlic', 'Honey', 'Ice cream', 'Jam'],
    selected: null,
    selectedIndex: null
}

const reducer = (state = initState, action) => {
    let curr = null
    let newItems = []

    switch(action.type) {
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

const activate = target => {
    return {
        type: ACTIVATE,
        selected: target
    }
}

const moveup = () => {
    return {
        type: MOVE_UP 
    }
}

const movedown = () => {
    return {
        type: MOVE_DOWN
    }
}
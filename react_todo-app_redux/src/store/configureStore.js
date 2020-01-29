import { createStore } from 'redux'
import reducer from './reducers/todos'
import Storage from '../Storage'
import throttle from 'lodash/throttle'

const configureStore = () => {
    const persistedState = Storage.loadState()
    const store = createStore(
        reducer,
        persistedState
    )

    store.subscribe(throttle(() => {
    Storage.saveState(store.getState())
    // for particular items:
    // Storage.saveState({
    //    todos: store.getState().todos
    // })
    }, 1000))

    return store
}

export default configureStore

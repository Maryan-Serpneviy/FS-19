export default class Storage {
    static loadState() {
        try {
            const serializedState = localStorage.getItem('state')
            if (serializedState === null) {
                return undefined // to let reducer initialize an app
            }
            return JSON.parse(serializedState)
        } catch (err) { // prevent app from crashing
            return undefined // to let reducer initialize an app
        }
    }

    static saveState(state) {
        try {
            const serializedState = JSON.stringify(state)
            localStorage.setItem('state', serializedState)
        } catch (err) { // prevent app from crashing
            console.error(err)
        }
    }
}

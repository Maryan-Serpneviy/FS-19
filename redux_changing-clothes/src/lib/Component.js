export class Component {
    setState(newState) {
        if (typeof newState === 'number' ||
            typeof newState === 'string' ||
            typeof newState === undefined ||
            typeof newState === null) {
                throw new TypeError(`expected object as new state but instead received ${typeof newState}`)
            }
        if (typeof newState === 'object') {
            if (this.state) {
                this.state = {
                    ...this.state,
                    ...newState
                }
            }
            this.state = newState
        }
        if (typeof newState === 'function') {
            console.log('working on it')
        }
    }
}

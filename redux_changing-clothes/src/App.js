import Store from './Store.js'
import { Component } from './lib/Component.js'

export const store = Redux.createStore(Store.reducer)

export default class App extends Component {
    editItem = e => store.dispatch(Store.edit(e.target))
    activateBtn = e => store.dispatch(Store.activate(e.target))
    moveUp = () => store.dispatch(Store.moveup())
    moveDown = () => store.dispatch(Store.movedown())

    handleActive = event => {
        const id = event.target.attributes[0].value // get "key" attribute
        this.setState({ id }) // mimics setting current id into local state

        if (event.target.id !== 'edit') {
            this.activateBtn(event)
        }
    }

    handleDisable = (items, index) => {
        const btnUp = document.getElementById('btn-up')
        const btnDown = document.getElementById('btn-down')
        btnUp.disabled = index === 0 || index === null
        btnDown.disabled = index === items.length - 1 || index === null
    }

    editItem = event => {
        const { value } = event.target
        const { id } = this.state

        if (event.key === 'Enter' && !value.length) {
            store.dispatch(Store.delete(id))
        } else if (event.key === 'Enter') {
            store.dispatch(Store.edit(id, value))
        } else if (event.key === 'Escape') {
            store.dispatch(Store.cancel())
        }
    }

    renderHint = () => `<div class="hint">ESC to cancel | ENTER to edit | CLEAR & ENTER to delete</div>`

    render() {
        const { items, selectedIndex } = store.getState()
        const root = document.getElementById('root')

        root.innerHTML = `
            <ul id="list">
                ${items.map((item, index) => {
                    if (selectedIndex === index) {
                        return `
                            ${this.renderHint()}
                            <input id="edit" autocomplete="off" />
                            `
                    } 
                    return `<li key=${index} class=${index === selectedIndex ? 'li_active' : ''}>${item}</li>`  
                })}
            </ul>
            <button id="btn-up"> Move Up </button>
            <button id="btn-down"> Move Down </button>`
            .replace(/\,/g, '')

        document.getElementById('list').addEventListener('click', this.handleActive)
        document.getElementById('btn-up').addEventListener('click', this.moveUp)
        document.getElementById('btn-down').addEventListener('click', this.moveDown)

        const edit = document.getElementById('edit')
        if (edit) {
            edit.focus()
            edit.value = items[selectedIndex]
            edit.addEventListener('keyup', this.editItem)
        }

        this.handleDisable(items, selectedIndex)
    }
}
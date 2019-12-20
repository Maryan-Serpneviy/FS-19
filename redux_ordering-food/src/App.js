const store = Redux.createStore(reducer)

const activateBtn = event => store.dispatch(activate(event.target))
const moveUp = () => store.dispatch(moveup())
const moveDown = () => store.dispatch(movedown())

const handleDisable = (items, index) => {
    const btnUp = document.getElementById('btn-up')
    const btnDown = document.getElementById('btn-down')
    btnUp.disabled = index === 0 || index === null
    btnDown.disabled = index === items.length - 1 || index === null
}

const render = () => {
    const { items, selectedIndex } = store.getState()

    const root = document.getElementById('root')
    root.innerHTML = `
        <ul class="list">
            ${items.map((item, index) => {
                return `
                    <li
                        onclick="activateBtn(event)"
                        class=${index === selectedIndex ? 'li_active' : ''}
                    >${item}</li>
                `
            })}
        </ul>
        <button onclick="moveUp()" id="btn-up"> Move Up </button>
        <button onclick="moveDown()" id="btn-down"> Move Down </button>`
        .replace(/\,/g, '')
    
    handleDisable(items, selectedIndex)
}
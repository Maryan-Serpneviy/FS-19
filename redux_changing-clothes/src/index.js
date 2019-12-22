import App from './App.js'
import { store } from './App.js'

const app = new App()
app.render()

store.subscribe(() => {
    app.render()
})
const LOAD = 'LOAD'
const DISPLAY = 'DISPLAY'
const API_URL = 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles'

export default class Store {
    static initialState = {
        requested: false,
        title: null
    }

    static reducer = (state = Store.initialState, action) => {
        switch (action.type) {
            case LOAD:
                return {
                    ...state,
                    requested: true
                }
            case DISPLAY:
                return {
                    ...state,
                    title: action.title
                }
            default:
                return state
        }
    }

    static load = () => {
        return (dispatch) => {
            dispatch({ type: LOAD })
            fetch(API_URL)
            .then(response => response.json())
            .then(data => dispatch(Store.display(data[0].title)))
        }
    }

    static display = title => ({
        type: DISPLAY,
        title
    })
}
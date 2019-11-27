const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export default function getTodos() {
    return fetch(API_URL).then(response => response.json())
}
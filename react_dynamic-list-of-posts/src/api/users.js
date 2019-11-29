const API_URL = 'https://jsonplaceholder.typicode.com/users'

export default function getUsers() {
  return fetch(API_URL).then(response => response.json())
}
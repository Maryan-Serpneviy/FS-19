const API_URL = 'https://jsonplaceholder.typicode.com/comments'

export default function getComments() {
  return fetch(API_URL).then(response => response.json())
}
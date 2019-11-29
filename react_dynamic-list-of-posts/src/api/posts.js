const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export default function getPosts() {
  return fetch(API_URL).then(response => response.json())
}
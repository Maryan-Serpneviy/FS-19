const API_URL = 'https://mate-academy.github.io/react_people-table/api/people.json'

export default function getPeople() {
    return fetch(API_URL).then(response => response.json())
}
import React from 'react'

export default function Person(props) {
    return (
        <>
            {props.people
            .filter(person => person.name.toLowerCase().includes(props.searchValue.toLowerCase()))
            .map((person, index) => (
                <tr key={index}
                    className={`Person Person--lived-in-${Math.ceil(person.died / 100)}`}
                    onClick={props.handleRowSelect}
                >
                    <td>{index}</td>
                    <td>{person.name}</td>
                    <td
                        className={person.sex === 'm' ? 'Person--male': 'Person--female'}
                    >{person.sex}</td>
                    <td
                        style={person.born < 1650 ? { textDecoration: 'line-through' } : null}
                    >{person.born}</td>
                    <td>{person.died}</td>
                    <td
                        style={person.died - person.born >= 65 ? { fontStyle: 'italic' } : null}
                    >{person.died - person.born}</td>
                    <td>{Math.ceil(person.died / 100)}</td>
                    <td>{person.mother}</td>
                    <td>{person.father}</td>
                </tr>
            ))}
        </>
    )
}

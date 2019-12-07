import React from 'react'

export default function NewPerson(props) {
    return (
        <form onSubmit={props.addNewPerson}>
            <legend>Add new person</legend>
            <input
                value={props.name}
                onChange={props.handleChange}
                placeholder="Name"
                name="name"
                type="text"
                autoComplete="off"
                required={true}
            />
            <input
                value={props.born}
                onChange={props.handleChange}
                placeholder="Born"
                name="born"
                type="text"
                autoComplete="off"
                required={true}
            />
            <input
                value={props.died}
                onChange={props.handleChange}
                placeholder="Died"
                name="died"
                type="text"
                autoComplete="off"
                required={true}
            />
            <input
                value={props.mother}
                onChange={props.handleChange}
                placeholder="Mother"
                name="mother"
                type="text"
                autoComplete="off"
                required={true}
            />
            <input
                value={props.father}
                onChange={props.handleChange}
                placeholder="Father"
                name="father"
                type="text"
                autoComplete="off"
                required={true}
            />
            <label>
                <input
                    onChange={props.handleChange}
                    checked={props.sex === 'm'}
                    value="m"
                    name="sex"
                    type="radio"
                /> Male
            </label>
            <label>
                <input
                    onChange={props.handleChange}
                    checked={props.sex === 'f'}
                    value="f"
                    name="sex"
                    type="radio"
                /> Female
            </label>
            <button>Add</button>
        </form>
    )
}

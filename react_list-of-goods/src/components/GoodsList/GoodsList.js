import React, {useState} from 'react'
import './GoodsList.css'

export default function GoodsList(props) {
    const unsortedList = [...props.list]
    const [list, setList] = useState([...props.list])
    const [selected, setSelected] = useState(1)
    
    function handleReverse() {
        setList([...list].reverse()) // we must create a new copy to trigger re-render
    }

    function sortByAlphabet() {
        setList([...list].sort()) // we must create a new copy to trigger re-render
    }

    function sortByLength() {
        setList([...list].sort((a, b) => b.length - a.length)) // we must create a new copy to trigger re-render
    }

    function handleReset() {
        setList(unsortedList)
        setSelected(1)
    }

    function handleSelect(event) {
        const { value } = event.target
        setList(unsortedList.filter(li => li.length >= value))
        setSelected(value)
    }

    const selectOptions = []
    for (let i = 1; i <= props.list.length; i++) {
        selectOptions.push(i)
    }
    return (
        <div className="goods-list">
            <ul className="goods-list__list">
                {list.map(li => (
                    <li className="goods-list__list-item" key={li}>{li}</li>
                ))}
            </ul>
            <button onClick={handleReverse}>Reverse</button>
            <button onClick={sortByAlphabet}>Sort alphabet</button>
            <button onClick={sortByLength}>Sort by length</button>
            <button onClick={handleReset}>Reset</button>
            <br />
            <select value={selected} onChange={handleSelect}>
                {selectOptions.map(option => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
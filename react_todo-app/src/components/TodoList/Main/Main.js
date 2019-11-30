import React from 'react'
import './Main.scss'

export default class Main extends React.Component {
    render() {
        return (
            <section className="main" style={{ display: 'block' }}>
                <input type="checkbox" id="toggle-all" className="toggle-all" />
                <label htmlFor="toggle-all">Mark all as complete</label>

                <ul className="todo-list">
                    <li className="">
                        <div className="view">
                            <input type="checkbox" className="toggle" id="todo-1" />
                            <label htmlFor="todo-1">sdfsdfsdf</label>
                            <button type="button" className="destroy" />
                        </div>
                    </li>

                    <li className="">
                        <div className="view">
                            <input type="checkbox" className="toggle" id="todo-2" />
                            <label htmlFor="todo-2">sakgjdfgkhjasgdhjfhs</label>
                            <button type="button" className="destroy" />
                        </div>
                    </li>

                    <li className="">
                        <div className="view">
                            <input type="checkbox" className="toggle" id="todo-3" />
                            <label htmlFor="todo-3">sddfgdfgdf</label>
                            <button type="button" className="destroy" />
                        </div>
                    </li>
                </ul>
            </section>
        )
    }
}

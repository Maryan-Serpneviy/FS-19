import { connect } from 'react-redux'
import Store from '../../Store'
import TodoList from './TodoList'

function mapStateToProps(state) {
    return {
        todos: state.todos,
        todoInput: state.todoInput,
        confirm: state.confirm
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateInput: todoInput => dispatch(Store.updateInput(todoInput)),
        add: todoInput => dispatch(Store.add(todoInput)),
        confirmAction: (confirm, id, name) => dispatch(Store.confirmAction(confirm, id, name)),
        hideConfirm: () => dispatch(Store.hideConfirm())
    }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer

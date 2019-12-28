import { connect } from 'react-redux'
import Store from '../../Store'
import TodoList from './TodoList'

const mapStateToProps = state => ({
    todos: state.todos,
    nextTodo: state.nextTodo,
    todoInput: state.todoInput,
    filter: state.filter,
    allChecked: state.allChecked,
    confirm: state.confirm
})

const mapDispatchToProps = dispatch => ({
    updateInput: todoInput => dispatch(Store.updateInput(todoInput)),
    add: todoInput => dispatch(Store.add(todoInput)),
    confirmAction: (confirm, id, name) => dispatch(Store.confirmAction(confirm, id, name)),
    hideConfirm: () => dispatch(Store.hideConfirm())
})

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer

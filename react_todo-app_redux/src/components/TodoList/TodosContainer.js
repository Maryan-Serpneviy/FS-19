import { connect } from 'react-redux'
import * as actions from '../../store/actions/todos'
import TodoList from './TodoList'

const mapStateToProps = state => ({
    todos: state.todos,
    filtered: state.filtered,
    nextTodo: state.nextTodo,
    todoInput: state.todoInput,
    allChecked: state.allChecked,
    action: state.action,
    currentId: state.currentId
})

const mapDispatchToProps = dispatch => ({
    updateInput: todoInput => dispatch(actions.updateInput(todoInput)),
    add: todoInput => dispatch(actions.add(todoInput)),
    confirmAction: (id, name) => dispatch(actions.confirmAction(confirm, id, name)),
    removeTodo: id => dispatch(actions.remove(id)),
    changeFilter: filter => dispatch(actions.changeFilter(filter)),
    clearCompleted: () => dispatch(actions.clearCompleted())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

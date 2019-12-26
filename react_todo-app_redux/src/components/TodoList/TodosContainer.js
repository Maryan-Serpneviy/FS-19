import { connect } from 'react-redux'
import TodoList from './TodoList'
import Store from '../../Store'

function mapStateToProps(state) {
    return {
        todoInput: state.todoInput,
        editInput: state.editInput,
        todos: state.todos,
        allChecked: state.allChecked,
        filter: state.filter,
        confirm: state.confirm,
        action: state.action,
        currentId: state.currentId,
        canEdit: state.canEdit
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateInput: todoInput => dispatch(Store.updateInput(todoInput)),
        add: todoInput => dispatch(Store.add(todoInput)),
        editTodo: (id, isCompleted, todoText) => dispatch(Store.edit(id, isCompleted, todoText)),
        setEditInput: editInput => dispatch(Store.setEditInput(editInput)),
        setEditStatus: status => dispatch(Store.setEditStatus(status)),
        remove: id => dispatch(Store.remove(id)),
        check: id => dispatch(Store.check(id)),
        checkAll: allChecked => dispatch(Store.checkAll(allChecked)),
        changeFilter: filter => dispatch(Store.changeFilter(filter)),
        confirmAction: (confirm, id, name) => dispatch(Store.confirmAction(confirm, id, name)),
        hideConfirm: () => dispatch(Store.hideConfirm()),
        clearCompleted: () => dispatch(Store.clearCompleted())
    }
}

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer
